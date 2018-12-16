package sample

import kotlinx.html.dom.*
import kotlinx.html.*
import kotlinx.html.js.*
import kotlin.browser.document
import kotlin.browser.window
import jquery.*
import org.w3c.dom.*
import kotlin.dom.addClass
import kotlin.dom.removeClass


actual class Sample {
    actual fun checkMe():Int {

        val fächer:MutableList<Fach> = mutableListOf()
        fächer.add(Fach("Deutsch",Aufgabenfeld.I,listOf(5,3,0), listOf(Fachattribute.Deutsch)))
        fächer.add(Fach("Englisch",Aufgabenfeld.I,listOf(5,3,0), listOf(Fachattribute.Fremdsprache)))
        fächer.add(Fach("Französisch",Aufgabenfeld.I,listOf(5,3,0), listOf(Fachattribute.Fremdsprache)))
        fächer.add(Fach("Latein",Aufgabenfeld.I,listOf(5,3,0), listOf(Fachattribute.Fremdsprache)))
        fächer.add(Fach("Griechisch",Aufgabenfeld.I,listOf(5,3,0), listOf(Fachattribute.Fremdsprache)))
        fächer.add(Fach("Russisch",Aufgabenfeld.I,listOf(5,3,0), listOf(Fachattribute.Fremdsprache)))
        fächer.add(Fach("Spanisch",Aufgabenfeld.I,listOf(5,3,0), listOf(Fachattribute.Fremdsprache)))
        fächer.add(Fach("Italienisch",Aufgabenfeld.I,listOf(5,3,0), listOf(Fachattribute.Fremdsprache)))
        fächer.add(Fach("Portugiesisch",Aufgabenfeld.I,listOf(5,3,0), listOf(Fachattribute.Fremdsprache)))
        fächer.add(Fach("Bildende Kunst",Aufgabenfeld.I,listOf(5,2,0), listOf()))
        fächer.add(Fach("Musik",Aufgabenfeld.I,listOf(5,2,0), listOf()))
        fächer.add(Fach("Geschichte",Aufgabenfeld.II,listOf(5,2,0), listOf()))
        fächer.add(Fach("Geographie",Aufgabenfeld.II,listOf(5,0,0), listOf()))
        fächer.add(Fach("Gemeinschaftskunde",Aufgabenfeld.II,listOf(5,0,0), listOf()))
        fächer.add(Fach("Geo/Gk",Aufgabenfeld.II,listOf(0,2,0), listOf(Fachattribute.GeGe)))
        fächer.add(Fach("Religionslehre",Aufgabenfeld.II,listOf(5,2,0), listOf()))
        fächer.add(Fach("Ethik",Aufgabenfeld.II,listOf(5,2,0), listOf()))
        fächer.add(Fach("Wirtschaft",Aufgabenfeld.II,listOf(5,2,0), listOf()))
        fächer.add(Fach("Mathematik",Aufgabenfeld.III,listOf(5,3,0),listOf(Fachattribute.Mathematik)))
        fächer.add(Fach("Biologie",Aufgabenfeld.III,listOf(5,3,0),listOf(Fachattribute.Naturwissenschaft)))
        fächer.add(Fach("Chemie",Aufgabenfeld.III,listOf(5,3,0),listOf(Fachattribute.Naturwissenschaft)))
        fächer.add(Fach("Physik",Aufgabenfeld.III,listOf(5,3,0),listOf(Fachattribute.Naturwissenschaft)))
        fächer.add(Fach("Schulversuch Informatik",Aufgabenfeld.III,listOf(5,3,0),listOf(Fachattribute.kannNawiErsetzen)))
        fächer.add(Fach("Schulversuch NwT",Aufgabenfeld.III,listOf(5,3,0),listOf(Fachattribute.kannNawiErsetzen)))
        fächer.add(Fach("Sport",Aufgabenfeld.Sport,listOf(5,2,0),listOf()))
        fächer.add(Fach("Literatur und Theater",Aufgabenfeld.I,listOf(0,0,2),listOf(Fachattribute.Orchidee)))
        fächer.add(Fach("VK Mathematik",Aufgabenfeld.III,listOf(0,0,2),listOf(Fachattribute.Orchidee)))
        fächer.add(Fach("VK Sprache",Aufgabenfeld.I,listOf(0,0,2),listOf(Fachattribute.Orchidee)))
        fächer.add(Fach("Wahlfach Informatik",Aufgabenfeld.III,listOf(0,0,2),listOf(Fachattribute.Orchidee)))
        fächer.add(Fach("Literatur",Aufgabenfeld.I,listOf(0,0,2),listOf(Fachattribute.Orchidee)))
        fächer.add(Fach("Philosophie",Aufgabenfeld.II,listOf(0,0,2),listOf(Fachattribute.Orchidee)))
        fächer.add(Fach("Psychologie",Aufgabenfeld.II,listOf(0,0,2),listOf(Fachattribute.Orchidee)))
        fächer.add(Fach("Astronomie",Aufgabenfeld.III,listOf(0,0,2),listOf(Fachattribute.Orchidee)))
        fächer.add(Fach("Problemlösen mit CAS",Aufgabenfeld.III,listOf(0,0,2),listOf(Fachattribute.Orchidee)))
        fächer.add(Fach("Darstellende Geometrie",Aufgabenfeld.III,listOf(0,0,2),listOf(Fachattribute.Orchidee)))
        fächer.add(Fach("Geologie",Aufgabenfeld.III,listOf(0,0,2),listOf(Fachattribute.Orchidee)))
        fächer.add(Fach("Seminarfach I",Aufgabenfeld.I,listOf(0,3,0),listOf(Fachattribute.Seminarfach)))
        fächer.add(Fach("Seminarfach II",Aufgabenfeld.II,listOf(0,3,0),listOf(Fachattribute.Seminarfach)))
        fächer.add(Fach("Seminarfach III",Aufgabenfeld.III,listOf(0,3,0),listOf(Fachattribute.Seminarfach)))


        Belegung.generiereFächer(fächer)


        var aktuelleBelegung=Belegung("Belegung 1")
        aktuelleBelegung.action(Belegung.Companion.Aktion.NEU,"Mathematik", Belegung.Companion.Kursart.LF)
        aktuelleBelegung.action(Belegung.Companion.Aktion.NEU,"Englisch", Belegung.Companion.Kursart.LF)
        aktuelleBelegung.action(Belegung.Companion.Aktion.NEU,"Informatik", Belegung.Companion.Kursart.LF)
        aktuelleBelegung.action(Belegung.Companion.Aktion.NEU,"Geschichte", Belegung.Companion.Kursart.BF)
        aktuelleBelegung.action(Belegung.Companion.Aktion.NEU,"Religionslehre", Belegung.Companion.Kursart.BF)
        aktuelleBelegung.action(Belegung.Companion.Aktion.TOGGLEMÜNDLICH,"Geschichte", Belegung.Companion.Kursart.BF)
        aktuelleBelegung.action(Belegung.Companion.Aktion.TOGGLEMÜNDLICH,"Religionslehre", Belegung.Companion.Kursart.BF)

        // aktuelleBelegung.action(Belegung.Companion.Aktion.NEU,"Chemie", Belegung.Companion.Kursart.BF)
        aktuelleBelegung.action(Belegung.Companion.Aktion.NEU,"Deutsch", Belegung.Companion.Kursart.BF)

        println("\n"+aktuelleBelegung)
        aktuelleBelegung.action(Belegung.Companion.Aktion.CHECK)

        erstelleRaster(aktuelleBelegung)
        visualisiereBelegung(aktuelleBelegung)
        eventsAnhängen(aktuelleBelegung)
        return 42

    }
}

fun erstelleRaster(aktuelleBelegung:Belegung){
    val darstellung=aktuelleBelegung.holeDarstellung()
    val fächerauswahl=aktuelleBelegung.getFächer().groupBy { it.aufgabenfeld }
    val myDiv=document.create.div("panel") {
        table {

            for (zeile in darstellung) {
                if (zeile is Belegung.Überschrift) {
                    tr {
                        td {
                            classes = setOf("fett")
                            +zeile.text
                        }
                        for (i in 0..5){
                            td {} //Leere Felder
                        }
                    }
                } else if (zeile is Belegung.Summe){
                    tr {
                        td {
                            classes = setOf("fett")
                            +"Wochenstunden"
                        }
                        for (i in 0..2){
                            td {} //Leere Felder
                        }
                        for (i in 0..3){
                            td{
                                + zeile.stunden[i].toString()
                                classes = setOf("fett")
                            }
                        }
                    }
            }else if (zeile is Belegung.ZeileDarstellung){
                    tr {
                        td{
                            + zeile.name
                        }
                        td{
                            var klassen=mutableSetOf<String>()
                            if (zeile.klickbar.contains(Belegung.Companion.Kursart.LF)){
                                +"LF"
                                klassen.add("klickbar")
                                id = zeile.name + "_LF"
                            }
                            if (zeile.gewählt==Belegung.Companion.Kursart.LF){
                                klassen.add("belegt_LF")
                            }

                            classes=klassen
                        }
                        td{
                            var klassen=mutableSetOf<String>()
                            if (zeile.klickbar.contains(Belegung.Companion.Kursart.BF)) {
                                +"BF"
                                klassen.add("klickbar")
                                id = zeile.name + "_BF"

                                if (zeile.gewählt == Belegung.Companion.Kursart.BF) {
                                    klassen.add("belegt_BF")
                                }
                            } else if (zeile.klickbar.contains(Belegung.Companion.Kursart.WF)) {
                                +"WF"
                                klassen.add("klickbar")
                                id = zeile.name + "_WF"

                                if (zeile.gewählt == Belegung.Companion.Kursart.WF) {
                                    klassen.add("belegt_WF")
                                }
                            }
                            classes=klassen
                        }
                        td {
                            var klassen=mutableSetOf<String>()
                            if (zeile.mündlichKlickbar){
                                klassen.add("klickbar")
                                val gewählt=zeile.gewählt?:""
                                if (gewählt is Belegung.Companion.Kursart){
                                    if (gewählt==Belegung.Companion.Kursart.BF){
                                        id = zeile.name + "_mBF"
                                    } else if (gewählt==Belegung.Companion.Kursart.WF){
                                        id=zeile.name+"_mWF"
                                    }
                                }

                            }
                            classes=klassen
                        }

                        val gewählt=zeile.gewählt?:""

                           for (i in 0..3) {
                                td {
                                    var klassen= mutableSetOf<String>()
                                    if (gewählt is Belegung.Companion.Kursart) {
                                        if (zeile.stunden[i]!=0) {
                                            +zeile.stunden[i].toString()

                                            println("Stunden $i ${zeile.stunden[i]}")
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
                                        + " "
                                    }
                                    classes=klassen
                                }

                        }

                    }
                }
            }
        }
        div{
            val meldungen=aktuelleBelegung.holeFehler()
            meldungen.forEach {
                div {
                    if (it.kommentarart==Belegung.Kommentarart.SCHLECHT){
                        classes=setOf("rot")

                    } else  if (it.kommentarart==Belegung.Kommentarart.GUT){
                        classes=setOf("grün")

                    } else {
                        classes=setOf()
                    }
                    +it.text

                }
            }
        }
    }


    println("div erstellt")

    val con=document.getElementById("container")
    con!!.innerHTML=""
    println("Container: "+con)
    document.getElementById("container")!!.appendChild(myDiv)

    println("div an container angehängt")
    document.getElementById("container")!!.append {

    }


}

fun eventsAnhängen(aktuelleBelegung: Belegung){
    val elemente=document.getElementsByClassName("klickbar")
    for (i in 0..elemente.length){
        if (elemente[i]!=null) {

            elemente[i]!!.addEventListener("click",
                { event ->
                    val id=elemente[i]?.id?:""
                    val typEvent=id.split("_")
                    var refresh=false
                    if (typEvent.size==2){
                        if (typEvent[1].startsWith("m")){
                            aktuelleBelegung.action(Belegung.Companion.Aktion.TOGGLEMÜNDLICH,typEvent[0],if (typEvent[1].substring(1)=="BF") Belegung.Companion.Kursart.BF else Belegung.Companion.Kursart.WF )
                            refresh=true
                        } else if (typEvent[1]=="LF"){
                            aktuelleBelegung.action(Belegung.Companion.Aktion.TOGGLE,typEvent[0],Belegung.Companion.Kursart.LF)
                            refresh=true
                        } else if (typEvent[1]=="BF"){
                            aktuelleBelegung.action(Belegung.Companion.Aktion.TOGGLE,typEvent[0],Belegung.Companion.Kursart.BF)
                            refresh=true
                        }else if (typEvent[1]=="WF"){
                            aktuelleBelegung.action(Belegung.Companion.Aktion.TOGGLE,typEvent[0],Belegung.Companion.Kursart.WF)
                            refresh=true
                        } else if (typEvent[1].startsWith("stunden")) {
                            aktuelleBelegung.action(
                                Belegung.Companion.Aktion.TOGGLESTUNDEN,
                                typEvent[0],
                                if (typEvent[1].substring(7) == "BF") Belegung.Companion.Kursart.BF else Belegung.Companion.Kursart.WF
                            )
                            refresh = true
                        }
                    }
                    if (refresh==true){

                        erstelleRaster(aktuelleBelegung)
                        visualisiereBelegung(aktuelleBelegung)
                        eventsAnhängen(aktuelleBelegung)
                        aktuelleBelegung.action(Belegung.Companion.Aktion.CHECK)
                    }
                    //window.alert(elemente[i]?.id?:"")
                }

            )
        }
    }
}

fun visualisiereBelegung(aktuelleBelegung:Belegung){
    val belegung=aktuelleBelegung.getBelegung()
    belegung.forEach {
        val id=it.name+"_"+it.typ
        val id_mündlich=it.name+"_m"+if (it.typ==Belegung.Companion.Kursart.BF) "BF" else if (it.typ==Belegung.Companion.Kursart.WF) "WF" else ""
        val typ=it.typ
        val zelle=document.getElementById(id)
        if (aktuelleBelegung.getBelegung().filter { it.attribute.contains(Fachattribute.mündlichePrüfung) }.count()<2) {
            if (it.typ == Belegung.Companion.Kursart.BF || it.typ == Belegung.Companion.Kursart.WF) {
                document.getElementById(id_mündlich)?.addClass("klickbar")

            }
        } else {
            if (it.attribute.contains(Fachattribute.mündlichePrüfung)) {
                document.getElementById(id_mündlich)?.addClass("klickbar")

            }
        }

        zelle?.let{
            it.addClass("belegt_"+typ)
        }
        if (it.attribute.contains(Fachattribute.mündlichePrüfung)){
            document.getElementById(id_mündlich)?.innerHTML="X"

        } else {
            document.getElementById(id_mündlich)?.innerHTML=" "
        }
    }
}

actual object Platform {
    actual val name: String = "JS"
}

