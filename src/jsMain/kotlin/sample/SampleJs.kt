package sample

import kotlinx.html.dom.*
import kotlinx.html.*
import kotlinx.html.js.*
import kotlin.browser.document
import kotlin.browser.window
import org.w3c.dom.*
import kotlin.dom.addClass


actual class Sample {

    actual fun checkMe(): Int {
        window.addEventListener("hashchange", {
                event ->
            run {
                val parameterSet = Variablen.getParameterSet(window.location.hash)

                if (parameterSet.containsKey("id") && !parameterSet.getValue("id").equals(Variablen.status)) {
                    val aktuelleBelegung = Belegung.getBelegungsobjekt()
                    aktuelleBelegung.deserialisiere(parameterSet.getValue("id"))
                    val leistungsfachWirtschaft=aktuelleBelegung.getBelegung().filter{it.name=="Wirtschaft"&&it.typ==Belegung.Companion.Kursart.LF}.firstOrNull()
                    if (leistungsfachWirtschaft!=null){
                        aktuelleBelegung.action(Belegung.Companion.Aktion.TOGGLE, "Wirtschaft", Belegung.Companion.Kursart.LF)
                        aktuelleBelegung.action(Belegung.Companion.Aktion.TOGGLE, "Wirtschaft", Belegung.Companion.Kursart.LF)

                    }
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

        if (parameterSet.containsKey("ansicht")||parameterSet.isEmpty()) {
           // if (parameterSet.getValue("ansicht").equals("start")) {
                erstelleAuswahl()
           // }
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

    val version="0.1.6_2023_01_19"
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

fun erstelleHilfe() {
    val myDiv = document.create.div("panel") {
        h2 {
            +"Hilfe"
        }
        h3 {
            +"Einführung"
        }

        +"Dieses Programm ermöglicht die Kurswahl für die Oberstufe der allgemein bildenden Gymnasien in Baden-Württemberg nach der AGVO ab dem Abiturjahrgang 2025."
        p {
            +"Rosé unterlegt sind die wählbaren Fächer. Hierbei steht LF für Leistungsfach, BF für Basisfach und WF für Wahlfach. Die Seminarfächer werden wie Basisfächer als BF angezeigt."
            br
            +"Sobald ein Fach gewählt wird, wird die Wahl gelb unterlegt."

            br
            +"Die drei gewählten Leistungsfächer müssen schriftlich im Abitur geprüft werden. "
            +"Darüber hinaus müssen zwei der weiteren belegten Fächer (das können Basisfächer oder bestimmte Wahlfächer sein) als mündliche Abiturprüfungsfächer gewählt werden: diese Wahl nimmt man durch das Setzen eines Kreuzchens rechts dieser Fächer vor, wenn dort ein rosé unterlegtes Feld zu sehen ist."

        }
        p {
            +"Solange die Wahl ungültig ist, erscheinen unterhalb der Auswahl rote Fehlermeldungen. Sobald die Auswahl korrekt ist, sind alle Zeilen grün. "
            br
            +"In diesem Fall ist die Auswahl dennoch unbedingt mit dem zuständigen Oberstufenberater besprechen, da dieses Programm nicht alle Spezialfälle abbildet und keine Gewähr für die Richtigkeit des Programms übernommen wird. "
            br
            +"Die bei einer korrekten Auswahl blauen Kurse stellen eine mögliche Anrechnung der Pflichtfächer dar, es kann aber noch andere Anrechnungsmöglichkeiten geben. Hier kann der Oberstufenberater weiterhelfen."
            br
            +"Zudem gilt: eine Schule ist nicht verpflichtet, jede gültige Belegung auch zu ermöglichen. In manchen Fällen können Kurse z. B. aufgrund zu geringer Teilnehmerzahlen nicht zustandekommen."
        }


        h3 {
            +"Gut zu wissen"
        }
            +"Die Adresszeile im Browser enthält stets die aktuelle Auswahl: wird die Belegung verändert, ändert sich auch die URL in der Adresszeile. Dadurch ist es möglich, Mitschülerinnen oder Mitschülern oder einem Oberstufenberater durch Übersenden dieser Adresszeile, z. B. mithilfe eines Instant Messengers oder per E-Mail, die aktuelle Auswahl zuzusenden. "
            br
            +"Der Empfänger sieht im Browser die übermittelte Auswahl und kann diese bei Bedarf ändern und wieder an andere Personen schicken."

        h3 {
            +"Empfohlene Reihenfolge (bzw. TL;DR)"
        }
        ul {
            li {
                +" Drei Leistungsfächer wählen (sind automatisch schriftliche Prüfungsfächer)"
            }
            li { +"Zwei weitere Fächer (das können Basis- oder bestimmte Wahlfächer sein) wählen, die als mündliches Prüfungsfach gedacht sind (erst diese Fächer wählen, dann jeweils durch ein X dahinter als mündliches Prüfungsfach markieren)"
            }
            li {
                +"Weitere Fächer wählen und dabei die Anmerkungen unter der Kurswahl beachten."
            }
            li {
                +"Alle Anmerkungen grün? Dann ist die Kurswahl korrekt! Bitte auf den Oberstufenberater zugehen!"
            }
        }
        h3{
            +"Fehler gefunden?"
        }

        +"Sollte dir ein Fehler im Programm aufgefallen sein, dann melde diesen entweder "
        a(
            href="https://github.com/menzelths/kurswahlMultiplatform/issues"
        )
        {
            +"auf der Seite zu den Fehlern dieses Projekts nach deiner Anmeldung bei github"
        }
        +" (klicke dazu dort auf \"New Issue\") oder schreibe eine E-Mail an menzelths(Klammeraffe)gmail(Punkt)com."

        p {

        }
        button {
            text("Hab's verstanden, zurück zur Auswahl!")
            onClickFunction = {
                val aktuelleBelegung = Belegung.getBelegungsobjekt()
                erstelleRaster(aktuelleBelegung)
                visualisiereBelegung(aktuelleBelegung)
                eventsAnhängen(aktuelleBelegung)
                Variablen.status = aktuelleBelegung.serialisiere()
                Variablen.setzeHash()
            }
        }
    }

    val con = document.getElementById("container")
    con!!.innerHTML = ""

    document.getElementById("container")!!.appendChild(myDiv)
    println("Hilfsansicht")
}



fun erstelleAuswahl() {
    val myDiv = document.create.div("panel") {
        h2{
            +"Einstellungen"
        }
        +"Bitte die Fächer abwählen, die den Schülerinnen und Schülern bei der Auswahl an ihrer Schule "
        span {
            +"nicht"
            classes = setOf<String>("rot")
        }
        +" angezeigt werden sollen."
        br
        +"Danach auf OK drücken."
        br
        +"Daraufhin werden nur noch die übrigen Fächer inklusive der Pflichtfächer in der Kurswahl angezeigt und der Link in der Adresszeile des Browsers kann an die Schülerinnen und Schüler weitergegeben werden. Somit sehen die Schülerinnen und Schüler beim Aufruf dieses Links nur noch die verbliebenen Fächer dieser Liste und die Pflichtfächer."

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
                Variablen.status = aktuelleBelegung.serialisiere()
                Variablen.setzeHash()
            }
        }
    }
    val con = document.getElementById("container")
    con!!.innerHTML = ""

    document.getElementById("container")!!.appendChild(myDiv)
    println("Auswahlansicht")
}

fun erstelleRaster(aktuelleBelegung: Belegung) {
    aktuelleBelegung.action(Belegung.Companion.Aktion.CHECK)
    val darstellung = aktuelleBelegung.holeDarstellung()
    val fächerauswahl = aktuelleBelegung.getFächer().groupBy { it.aufgabenfeld }
    val myDiv = document.create.div("panel") {
        button {
            text("Hilfe anzeigen")
            onClickFunction = {
                erstelleHilfe()
            }

        }
        button {
            text("Auswahl zurücksetzen")
            onClickFunction = {
                Belegung.getBelegungsobjekt().deleteBelegung()
                val aktuelleBelegung = Belegung.getBelegungsobjekt()
                erstelleRaster(aktuelleBelegung)
                visualisiereBelegung(aktuelleBelegung)
                eventsAnhängen(aktuelleBelegung)
                Variablen.status = aktuelleBelegung.serialisiere()
                Variablen.setzeHash()
            }

        }
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
klassen.add("zentriert")
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
                            klassen.add("zentriert")
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
                            if (zeile.mündlich){
                                klassen.add("belegt_m")
                            }
                            klassen.add("zentriert")
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
                                if (zeile.anrechnungspflichtig[i]==1){
                                    klassen.add("fett")
                                    klassen.add("blau")
                                }
                                klassen.add("zentriert")
                                classes = klassen
                            }

                        }

                    }
                }
            }
        }
        div {
            val meldungen = aktuelleBelegung.holeFehler()
            ul {
                meldungen.forEach {
                    li {

                        span {
                            if (it.kommentarart == Belegung.Kommentarart.SCHLECHT) {
                                classes = setOf("rot")

                            } else if (it.kommentarart == Belegung.Kommentarart.GUT) {
                                classes = setOf("grün")
                            } else if (it.kommentarart == Belegung.Kommentarart.HINWEIS) {
                                classes = setOf("hinweis")
                            } else {
                                classes = setOf()
                            }
                            +it.text
                        }

                    }
                }
            }
        }
        div {
            if (Belegung.holeKurswahlKorrekt()){
                +"Kurswahl gültig! Anrechnungspflichtige Kurse sind in der Kurswahl blau und fett dargestellt."
                br
                +"Richtigkeit der Kurswahl ohne Gewähr: bitte unbedingt zusammen mit dem Oberstufenberater überprüfen! "

                classes=setOf("grünText","fett")
            } else {
                +"Kurswahl ungültig!"
                classes=setOf("rotText","fett")
            }
            br

        }
        div {
            br
            +"Version ${Variablen.version}"
            classes=setOf("klein")
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
        if (aktuelleBelegung.getBelegung().filter { it.attribute.contains(Fachattribute.muendlichePruefung) }.count() < 2) {
            if (it.typ == Belegung.Companion.Kursart.BF || it.typ == Belegung.Companion.Kursart.WF) {
                document.getElementById(id_mündlich)?.addClass("klickbar")
            }
        } else {
            if (it.attribute.contains(Fachattribute.muendlichePruefung)) {
                document.getElementById(id_mündlich)?.addClass("klickbar")

            }
        }

        zelle?.let {
            it.addClass("belegt_" + typ)

        }
        if (it.attribute.contains(Fachattribute.muendlichePruefung)) {
            document.getElementById(id_mündlich)?.innerHTML = "X"

        } else {
            document.getElementById(id_mündlich)?.innerHTML = "&nbsp;&nbsp;"
        }
    }
}

actual object Platform {
    actual val name: String = "JS"
}

