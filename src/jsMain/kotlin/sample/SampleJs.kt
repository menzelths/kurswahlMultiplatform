package sample

import kotlinx.html.dom.*
import kotlinx.html.*
import kotlinx.html.js.*
import kotlin.browser.document
import kotlin.browser.window
import jquery.*
import org.w3c.dom.*
import org.w3c.dom.events.EventListener
import kotlin.dom.addClass
import kotlin.dom.removeClass


actual class Sample {

    actual fun checkMe(): Int {
        window.addEventListener("hashchange", { // absichtlich falsch geschrieben
                event ->
            run {
                val parameterSet = Variablen.getParameterSet(window.location.hash)

                if (parameterSet.containsKey("id") && !parameterSet.getValue("id").equals(Variablen.status)) {
                    val aktuelleBelegung = Belegung.getBelegungsobjekt()
                    aktuelleBelegung.deserialisiere(parameterSet.getValue("id"))
                    Variablen.status = parameterSet.getValue("id")
                    erstelleRaster(aktuelleBelegung)
                    visualisiereBelegung(aktuelleBelegung)
                    eventsAnhängen(aktuelleBelegung)

                } else {
                    println("Status unverändert")
                }
            }
        })

        var aktuelleBelegung = Belegung.getBelegungsobjekt()
        val parameterSet = Variablen.getParameterSet(window.location.hash)

        if (parameterSet.containsKey("ansicht")) {
            if (parameterSet.getValue("ansicht").equals("start")) {
                erstelleAuswahl()
            }
        } else {
            if (parameterSet.containsKey("ex")){
                val wert=parameterSet.getValue("ex")
                Variablen.excluded=wert
                if (!wert.equals("")){
                    println("")
                    Variablen.excludedList=Kodierung.characterstring2Binarystring(wert).cut(6).map{Kodierung.binarystring2Int(it)}.toMutableList()
                    println("Ausgeschlossene Fächer: ${Variablen.excludedList}")
                }

            }
        if (parameterSet.containsKey("id") || parameterSet.isEmpty()) {

            if (parameterSet.containsKey(("id"))) {
                Belegung.getBelegungsobjekt().deserialisiere(parameterSet.getValue("id"))
            }

            Variablen.status = "${aktuelleBelegung.serialisiere()}"

            erstelleRaster(aktuelleBelegung)
            visualisiereBelegung(aktuelleBelegung)
            eventsAnhängen(aktuelleBelegung)
        }
            Variablen.setzeHash()
        }



        return 42
    }
}


actual object Variablen {
    enum class Ansichten {
        START, WAHL
    }

    fun setzeHash(){
        window.location.hash="#id=$status;ex=$excluded"
    }

    public var status = ""
    public var excluded=""
    actual var excludedList= mutableListOf<Int>()
    var ansicht: Ansichten = Ansichten.WAHL

    fun getParameterSet(input: String): HashMap<String, String> {
        var hm = hashMapOf<String, String>()
        val parameter = input.substring(1).split(";")
        for (p in parameter) {
            val teile = p.split("=")
            if (teile.size == 2) {
                hm.put(teile[0], teile[1])
            }
        }
        println("ParameterSet: $hm")
        return hm
    }

}

fun erstelleAuswahl() {
    val myDiv = document.create.div("panel") {
        +"Bitte die Fächer abwählen, die den Schülerinnen und Schülern bei der Auswahl "
        span {
            +"nicht"
            classes = setOf<String>("rot")
        }
        +" angezeigt werden sollen."
        br
        +"Danach auf OK drücken. Daraufhin werden nur noch die übrigen Fächer in der Auswahl angezeigt und der Link in der Adresszeile des Browsers kann an die Schülerinnen und Schüler weitergegeben werden. Somit sehen die Schülerinnen und Schüler beim Aufruf dieses Links nur noch die verbliebenen Fächer dieser Liste und die Pflichtfächer."

        val fächer = Belegung.holeFächer()
        ul {
            for (f in fächer) {
                val klassen = mutableSetOf<String>()
                if (f.pflicht == false) {
                    checkBoxInput {
                        checked = true
                        id = "fach_" + f.id
                        klassen.add("checkbox")
                        classes = klassen
                    }
                    +f.name
                    br
                }
            }
        }
        button {
            text("OK")
            onClickFunction = {
                println("Knopf gedrückt")
                val checkboxes = document.getElementsByClassName("checkbox")
                val exclude = mutableListOf<Int>()
                for (i in 0 until checkboxes.length) {
                    val aktuelleCB = checkboxes[i] as HTMLInputElement
                    if (!aktuelleCB?.checked ?: false)
                        exclude.add(aktuelleCB.id.split("_").last().toInt())
                }
                var excludedString=""
                for (e in exclude){
                    var wert= e.toString(2)
                    excludedString+="0".repeat(6-wert.length)+wert
                }
                val wert=Kodierung.binarystring2Characterstring(excludedString)
                Variablen.excludedList=exclude
                Variablen.excluded=wert

                Variablen.setzeHash()
                val aktuelleBelegung=Belegung.getBelegungsobjekt()
                erstelleRaster(aktuelleBelegung)
                visualisiereBelegung(aktuelleBelegung)
                eventsAnhängen(aktuelleBelegung)

            }
        }
    }
    val con = document.getElementById("container")
    con!!.innerHTML = ""

    document.getElementById("container")!!.appendChild(myDiv)
    println("Auswahlansicht")
}

fun erstelleRaster(aktuelleBelegung: Belegung) {
    val darstellung = aktuelleBelegung.holeDarstellung()
    val fächerauswahl = aktuelleBelegung.getFächer().groupBy { it.aufgabenfeld }
    val myDiv = document.create.div("panel") {

        table {

            for (zeile in darstellung) {
                if (zeile is Belegung.Überschrift) {
                    tr {
                        td {
                            classes = setOf("fett")
                            +zeile.text
                        }
                        for (i in 0..5) {
                            td {} //Leere Felder
                        }
                    }
                } else if (zeile is Belegung.Summe) {
                    tr {
                        td {
                            classes = setOf("fett")
                            +"Wochenstunden"
                        }
                        for (i in 0..2) {
                            td {} //Leere Felder
                        }
                        for (i in 0..3) {
                            td {
                                +zeile.stunden[i].toString()
                                classes = setOf("fett")
                            }
                        }
                    }
                } else if (zeile is Belegung.ZeileDarstellung) {
                    tr {
                        td {
                            +zeile.name
                        }
                        td {
                            var klassen = mutableSetOf<String>()
                            if (zeile.klickbar.contains(Belegung.Companion.Kursart.LF)) {
                                +"LF"
                                klassen.add("klickbar")
                                id = zeile.fachnameOriginal + "_LF"
                            }
                            if (zeile.gewählt == Belegung.Companion.Kursart.LF) {
                                klassen.add("belegt_LF")
                            }

                            classes = klassen
                        }
                        td {
                            var klassen = mutableSetOf<String>()
                            if (zeile.klickbar.contains(Belegung.Companion.Kursart.BF)) {
                                +"BF"
                                klassen.add("klickbar")
                                id = zeile.fachnameOriginal + "_BF"

                                if (zeile.gewählt == Belegung.Companion.Kursart.BF) {
                                    klassen.add("belegt_BF")
                                }
                            } else if (zeile.klickbar.contains(Belegung.Companion.Kursart.WF)) {
                                +"WF"
                                klassen.add("klickbar")
                                id = zeile.fachnameOriginal + "_WF"

                                if (zeile.gewählt == Belegung.Companion.Kursart.WF) {
                                    klassen.add("belegt_WF")
                                }
                            }
                            classes = klassen
                        }
                        td {
                            var klassen = mutableSetOf<String>()
                            if (zeile.mündlichKlickbar) {

                                klassen.add("klickbar")
                                val gewählt = zeile.gewählt ?: ""
                                if (gewählt is Belegung.Companion.Kursart) {
                                    if (gewählt == Belegung.Companion.Kursart.BF) {
                                        id = zeile.fachnameOriginal + "_mBF"
                                    } else if (gewählt == Belegung.Companion.Kursart.WF) {
                                        id = zeile.fachnameOriginal + "_mWF"
                                    }
                                }

                            } else {

                            }
                            classes = klassen
                        }

                        val gewählt = zeile.gewählt ?: ""

                        for (i in 0..3) {
                            td {
                                var klassen = mutableSetOf<String>()
                                if (gewählt is Belegung.Companion.Kursart) {
                                    if (zeile.stunden[i] != 0) {
                                        +zeile.stunden[i].toString()

                                        //println("Stunden $i ${zeile.stunden[i]}")
                                        if (zeile.stundenAlternativVorhanden == true) {
                                            klassen.add("klickbar")
                                            klassen.add("stunden")

                                            if (gewählt == Belegung.Companion.Kursart.BF) {
                                                id = zeile.name + "_stundenBF"
                                            } else if (gewählt == Belegung.Companion.Kursart.WF) {
                                                id = zeile.name + "_stundenWF"
                                            }
                                        }
                                    } else {
                                        +" "
                                    }
                                } else {
                                    +" "
                                }
                                classes = klassen
                            }

                        }

                    }
                }
            }
        }
        div {
            val meldungen = aktuelleBelegung.holeFehler()
            meldungen.forEach {
                div {
                    if (it.kommentarart == Belegung.Kommentarart.SCHLECHT) {
                        classes = setOf("rot")

                    } else if (it.kommentarart == Belegung.Kommentarart.GUT) {
                        classes = setOf("grün")

                    } else {
                        classes = setOf()
                    }
                    +it.text
                }
            }
        }
    }

    val con = document.getElementById("container")
    con!!.innerHTML = ""

    document.getElementById("container")!!.appendChild(myDiv)


    //document.getElementById("container")!!.append {
    //}
}

fun eventsAnhängen(aktuelleBelegung: Belegung) {
    val elemente = document.getElementsByClassName("klickbar")
    for (i in 0..elemente.length) {
        if (elemente[i] != null) {
            elemente[i]!!.addEventListener("click",
                { event ->
                    val id = elemente[i]?.id ?: ""
                    val typEvent = id.split("_")
                    var refresh = false
                    if (typEvent.size == 2) {
                        if (typEvent[1].startsWith("m")) {
                            aktuelleBelegung.action(
                                Belegung.Companion.Aktion.TOGGLEMÜNDLICH,
                                typEvent[0],
                                if (typEvent[1].substring(1) == "BF") Belegung.Companion.Kursart.BF else Belegung.Companion.Kursart.WF
                            )
                            refresh = true
                        } else if (typEvent[1] == "LF") {
                            aktuelleBelegung.action(
                                Belegung.Companion.Aktion.TOGGLE,
                                typEvent[0],
                                Belegung.Companion.Kursart.LF
                            )
                            refresh = true
                        } else if (typEvent[1] == "BF") {
                            aktuelleBelegung.action(
                                Belegung.Companion.Aktion.TOGGLE,
                                typEvent[0],
                                Belegung.Companion.Kursart.BF
                            )
                            refresh = true
                        } else if (typEvent[1] == "WF") {
                            aktuelleBelegung.action(
                                Belegung.Companion.Aktion.TOGGLE,
                                typEvent[0],
                                Belegung.Companion.Kursart.WF
                            )
                            refresh = true
                        } else if (typEvent[1].startsWith("stunden")) {
                            aktuelleBelegung.action(
                                Belegung.Companion.Aktion.TOGGLESTUNDEN,
                                typEvent[0],
                                if (typEvent[1].substring(7) == "BF") Belegung.Companion.Kursart.BF else Belegung.Companion.Kursart.WF
                            )
                            refresh = true
                        }
                    }
                    if (refresh == true) {
                        erstelleRaster(aktuelleBelegung)
                        visualisiereBelegung(aktuelleBelegung)
                        eventsAnhängen(aktuelleBelegung)
                        aktuelleBelegung.action(Belegung.Companion.Aktion.CHECK)
                        Variablen.status=aktuelleBelegung.serialisiere()
                        Variablen.setzeHash()
                    }
                }
            )
        }
    }
}

fun visualisiereBelegung(aktuelleBelegung: Belegung) {
    val belegung = Belegung.getBelegungsobjekt().getBelegung()
    belegung.forEach {
        val id = it.name + "_" + it.typ
        val id_mündlich =
            it.name + "_m" + if (it.typ == Belegung.Companion.Kursart.BF) "BF" else if (it.typ == Belegung.Companion.Kursart.WF) "WF" else ""
        val typ = it.typ
        val zelle = document.getElementById(id)
        if (aktuelleBelegung.getBelegung().filter { it.attribute.contains(Fachattribute.mündlichePrüfung) }.count() < 2) {
            if (it.typ == Belegung.Companion.Kursart.BF || it.typ == Belegung.Companion.Kursart.WF) {
                document.getElementById(id_mündlich)?.addClass("klickbar")
            }
        } else {
            if (it.attribute.contains(Fachattribute.mündlichePrüfung)) {
                document.getElementById(id_mündlich)?.addClass("klickbar")

            }
        }

        zelle?.let {
            it.addClass("belegt_" + typ)
        }
        if (it.attribute.contains(Fachattribute.mündlichePrüfung)) {
            document.getElementById(id_mündlich)?.innerHTML = "X"

        } else {
            document.getElementById(id_mündlich)?.innerHTML = "&nbsp;&nbsp;"
        }
    }
}

actual object Platform {
    actual val name: String = "JS"
}

