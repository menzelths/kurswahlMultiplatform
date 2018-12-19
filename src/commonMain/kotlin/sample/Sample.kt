package sample

expect class Sample() {
    fun checkMe(): Int
}

expect object Platform {
    val name: String
}





fun main() {

    println("Hallo")
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
    fächer.add(Fach("Geographie/Gemeinschaftskunde",Aufgabenfeld.II,listOf(0,2,0), listOf(Fachattribute.GeGe)))
    fächer.add(Fach("Geographie",Aufgabenfeld.II,listOf(5,0,0), listOf()))
    fächer.add(Fach("Gemeinschaftskunde",Aufgabenfeld.II,listOf(5,0,0), listOf()))

    fächer.add(Fach("Religionslehre",Aufgabenfeld.II,listOf(5,2,0), listOf()))
    fächer.add(Fach("Ethik",Aufgabenfeld.II,listOf(5,2,0), listOf()))
    fächer.add(Fach("Wirtschaft",Aufgabenfeld.II,listOf(5,2,0), listOf()))
    fächer.add(Fach("Mathematik",Aufgabenfeld.III,listOf(5,3,0),listOf(Fachattribute.Mathematik)))
    fächer.add(Fach("Biologie",Aufgabenfeld.III,listOf(5,3,0),listOf(Fachattribute.Naturwissenschaft)))
    fächer.add(Fach("Chemie",Aufgabenfeld.III,listOf(5,3,0),listOf(Fachattribute.Naturwissenschaft)))
    fächer.add(Fach("Physik",Aufgabenfeld.III,listOf(5,3,0),listOf(Fachattribute.Naturwissenschaft)))
    fächer.add(Fach("Informatik",Aufgabenfeld.III,listOf(5,3,0),listOf(Fachattribute.kannNawiErsetzen)))
    fächer.add(Fach("NwT",Aufgabenfeld.III,listOf(5,3,0),listOf(Fachattribute.kannNawiErsetzen)))
    fächer.add(Fach("Sport",Aufgabenfeld.Sport,listOf(5,2,0),listOf()))
    fächer.add(Fach("Seminarfach",Aufgabenfeld.Seminarfach, listOf(0,3,0),listOf(Fachattribute.Seminarfach)))
   /* fächer.add(Fach("Literatur und Theater",Aufgabenfeld.Wahlbereich,listOf(0,0,2),listOf()))
    fächer.add(Fach("VK Mathematik",Aufgabenfeld.Wahlbereich,listOf(0,0,2),listOf()))
    fächer.add(Fach("VK Sprache",Aufgabenfeld.Wahlbereich,listOf(0,0,2),listOf()))
    fächer.add(Fach("Informatik",Aufgabenfeld.Wahlbereich,listOf(0,0,2),listOf()))
    fächer.add(Fach("Literatur",Aufgabenfeld.Wahlbereich,listOf(0,0,2),listOf()))
    fächer.add(Fach("Philosophie",Aufgabenfeld.Wahlbereich,listOf(0,0,2),listOf()))
    fächer.add(Fach("Psychologie",Aufgabenfeld.Wahlbereich,listOf(0,0,2),listOf()))
    fächer.add(Fach("Astronomie",Aufgabenfeld.Wahlbereich,listOf(0,0,2),listOf()))
    fächer.add(Fach("Problemlösen mit CAS",Aufgabenfeld.Wahlbereich,listOf(0,0,2),listOf()))
    fächer.add(Fach("Darstellende Geometrie",Aufgabenfeld.Wahlbereich,listOf(0,0,2),listOf()))
    fächer.add(Fach("Geologie",Aufgabenfeld.Wahlbereich,listOf(0,0,2),listOf()))
*/
    Belegung.generiereFächer(fächer)


    val aktuelleBelegung=Belegung("Belegung 1")
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
    Sample().checkMe()

}

class Belegung(val name:String) {

    abstract class Zeile


    data class Überschrift(
        val text:String
    ):Zeile()

    enum class Kommentarart{
        GUT,SCHLECHT,NEUTRAL
    }

    data class Summe(
        val stunden:List<Int>
    ):Zeile()

    data class Kommentar(

    val kommentarart: Kommentarart,
    val text: String
    ) : Zeile()

     data class ZeileDarstellung(
        val name:String,
        val aufgabenfeld:Aufgabenfeld,
        val gewählt: Kursart?,
        val klickbar:Set<Kursart>,
        val mündlich:Boolean,
        val mündlichKlickbar:Boolean,
        val stunden:List<Int>,
        val stundenAlternativVorhanden:Boolean,
        val fachnameOriginal:String

    ) : Zeile()

    private fun anzahlLeistungsfächer()= aktuelleBelegung.filter{it.typ==Kursart.LF}.count()
    private fun anzahlMündlichePrüfungen()=aktuelleBelegung.filter{it.attribute.contains(Fachattribute.mündlichePrüfung)}.count()
    private fun seminarFachGewählt():Aufgabenfeld?{
        val sf=aktuelleBelegung.filter{it.attribute.contains(Fachattribute.Seminarfach)}.firstOrNull()
        if (sf!=null){
            return sf.aufgabenfeld
        }
        return null
    }
    private fun fachAlsBasisfachOderWahlfachGewählt(fach:String):Boolean{

        return aktuelleBelegung.filter { it.name==fach }.filter{it.typ==Kursart.BF || it.typ==Kursart.WF}.count()>0
    }
    private fun alleHalbjahreBelegt(fach:String,typ:Kursart):Boolean {
        val fach=aktuelleBelegung.filter { it.name == fach && it.typ == typ }.firstOrNull()
        if (fach!=null){

                if (fach.alternativStunden) {
                    return fach.stundenAlternativ.filter { it != 0 }.count()==4
                }else{
                    return fach.stunden.filter { it != 0 }.count()==4
                }
            } else {
            return false
        }

    }


    public fun holeFehler():List<Kommentar>{
        this.action(Aktion.CHECK)
        return fehlerMeldungen.toList()
    }

    public fun holeDarstellung():List<Zeile>{
        var text= mutableSetOf<Zeile>()
        val bereiche=fächerauswahl.groupBy { it.aufgabenfeld }


        for (bereich in bereiche){
            text.add(Überschrift("Bereich "+bereich.key))
            val fächer=bereich.value.groupBy { it.name }
            for (f in fächer){
                val aufgabenfeld=bereich.key

                lateinit var name:String
                var gewählt:Kursart?=null
                var mündlich=false
                var mündlichKlickbar=false
                var klickbarWahl=mutableSetOf<Kursart>()
                var stunden=mutableListOf<Int>()
                var stundenAlternativVorhanden=false

                name=f.key
                val fachnameOriginal=f.key



                val varianten=f.value
                for (v in varianten){

                    if (anzahlLeistungsfächer()<3
                        &&!v.attribute.contains(Fachattribute.Orchidee) // Wahlfach hat kein LF
                        &&!v.attribute.contains(Fachattribute.Seminarfach) // Seminarfach ist kein LF
                        &&!v.attribute.contains(Fachattribute.GeGe)){ // GeGe gibt es nicht als LF
                        klickbarWahl.add(Kursart.LF)
                    }
                    if (aktuelleBelegung.contains(v)){
                        gewählt=v.typ
                        if (v.attribute.contains(Fachattribute.Seminarfach)){

                        }
                        klickbarWahl.add(v.typ)
                        stunden=if (v.alternativStunden==false) v.stunden else v.stundenAlternativ
                        if (v.typ==Kursart.WF){
                            stundenAlternativVorhanden=true
                        }
                        if (v.attribute.contains(Fachattribute.spätbeginnend)){
                            stundenAlternativVorhanden=true
                        }
                        if (v.attribute.contains(Fachattribute.GeGe)){
                            v.stunden= mutableListOf(2,2,2,2)

                        if (aktuelleBelegung.filter { it.name=="Wirtschaft" && it.typ==Kursart.LF }.count()>0) {
                            stundenAlternativVorhanden=true
                        }
                            if (aktuelleBelegung.filter { it.name == "Gemeinschaftskunde" && it.typ == Kursart.LF }.count() > 0) {
                                stundenAlternativVorhanden = false
                                v.stunden = mutableListOf(2, 0, 0, 2)
                                name = "Geographie"
                                stunden = v.stunden

                            }
                            if (aktuelleBelegung.filter { it.name == "Geographie" && it.typ == Kursart.LF }.count() > 0) {
                                stundenAlternativVorhanden = false
                                v.stunden = mutableListOf(0, 2, 2, 0)
                                stunden = v.stunden
                                name = "Gemeinschaftskunde"
                            }



                        }

                    }

                    // falls Gemeinschaftskunde oder Geographie als LK, dann Geo/Gk zu geo bzw. gk
                    if (v.attribute.contains(Fachattribute.GeGe)) {

                        if (aktuelleBelegung.filter { it.name == "Gemeinschaftskunde" && it.typ == Kursart.LF }.count() > 0) {

                            name = "Geographie"


                        }
                        if (aktuelleBelegung.filter { it.name == "Geographie" && it.typ == Kursart.LF }.count() > 0) {

                            name = "Gemeinschaftskunde"
                        }
                    }


                    if (v.typ==Kursart.BF || v.typ==Kursart.WF){
                        if (v.attribute.contains(Fachattribute.Seminarfach)&&seminarFachGewählt()==v.aufgabenfeld){
                            klickbarWahl.add(v.typ)
                        } else if (v.attribute.contains(Fachattribute.Seminarfach)&& seminarFachGewählt()!=null && seminarFachGewählt()!=v.aufgabenfeld){
                            klickbarWahl.remove(v.typ)
                        } else {
                            klickbarWahl.add(v.typ)
                        }
                        if (anzahlMündlichePrüfungen()<2 && fachAlsBasisfachOderWahlfachGewählt(v.name) && alleHalbjahreBelegt(v.name,v.typ) ){
                            mündlichKlickbar=true
                        }
                        if ( v.attribute.contains(Fachattribute.mündlichePrüfung)){
                            mündlichKlickbar=true
                            mündlich=true
                        }

                    }




                }


                text.add(ZeileDarstellung(name,aufgabenfeld,gewählt,klickbarWahl,mündlich,mündlichKlickbar,stunden,stundenAlternativVorhanden,fachnameOriginal))


            }

        }
        text.add(Summe(holeWochenStunden()))
        return text.toList()
    }

    public fun getBelegung():MutableList<Belegfach>{
        return aktuelleBelegung
    }

    public fun getFächer():List<Belegfach>{
        return fächerauswahl
    }


    override fun toString(): String {
        return "\n\nAktuelleBelegung:\n"+aktuelleBelegung.map { it -> "${it.name} ${it.typ} ${it.attribute}" }.joinToString(separator = "\n")

    }

    private val aktuelleBelegung: MutableList<Belegfach> = mutableListOf()

    private fun testeMehrfach():Boolean {
        val mehrfach = aktuelleBelegung.groupBy { it: Belegfach -> it.name }.filterValues { it.size > 1 }.keys.toList()
        if (mehrfach.size>0) {
            println("Die folgenden Fächer sind mehrfach belegt: ${mehrfach.joinToString ( separator="," )}")
            return false
        } else {
            return true
        }
    }

    private fun testeSprachenOderNaturwissenschaft():Boolean {
        // Es müssen zwei Sprachen oder zwei Naturwissenschaften abgedeckt sein
        val sprachen=aktuelleBelegung.filter{it.attribute.contains(Fachattribute.Fremdsprache)}
        val naturwissenschaften=aktuelleBelegung.filter{it.attribute.contains(Fachattribute.Naturwissenschaft) || it.attribute.contains(Fachattribute.kannNawiErsetzen )}
        val naturwissenschaftersatz=aktuelleBelegung.filter{it.attribute.contains(Fachattribute.kannNawiErsetzen)}
        println("${sprachen.count()} Sprache(n) und ${naturwissenschaften.count()} Naturwissenschaft(en) gewählt.")
        fehlerMeldungen.add(Kommentar(Kommentarart.NEUTRAL,"${sprachen.count()} Sprache(n) und ${naturwissenschaften.count()} Naturwissenschaft(en) gewählt."))


        if (sprachen.count()==0 || naturwissenschaften.count()==0){
            println("Es wurde noch keine Fremdsprache gewählt.")
            if (naturwissenschaften.count()-naturwissenschaftersatz.count()==0){
                fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Es wurde noch keine klassische Naturwissenschaft gewählt."))
            }
            if (sprachen.count()==0){
                fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Es wurde noch keine Fremdsprache gewählt."))
            }
            return false

        }

        if (sprachen.count()<2 && naturwissenschaften.count()<2){
            println("Es müssen entweder mindestens 2 Naturwissenschaften und 1 Sprache belegt werden oder umgekehrt.")
            fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Es müssen entweder mindestens 2 Naturwissenschaften und 1 Sprache belegt werden oder umgekehrt."))

            return false
        } else if (sprachen.count()<2 && naturwissenschaften.count()>=2) {
            // es müssen zwei Naturwissenschaften dabei sein
            val anzahlKlassischeNaturwissenschaften=naturwissenschaften.count()-naturwissenschaftersatz.count()
            if (anzahlKlassischeNaturwissenschaften==0){
                println("Es muss mindestens eine klassische Naturwissenschaft belegt werden.")
                fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Es muss mindestens eine klassische Naturwissenschaft belegt werden."))

                return false
            } else if (anzahlKlassischeNaturwissenschaften==1){
                val anzahlLeistungsfächer=naturwissenschaften.filter { it.typ==Kursart.LF }.count()
                if (anzahlLeistungsfächer>0){
                    println("Gültige Kombination für Naturwissenschaften")
                    fehlerMeldungen.add(Kommentar(Kommentarart.GUT,"Gültige Kombination für Naturwissenschaften"))

                    return true
                } else {
                    println("Bei der Ersetzung einer klassischen Naturwissenschaft durch Informatik oder NwT muss mindestens eines dieser Fächer als Leistungsfach belegt werden.")
                    fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Bei der Ersetzung einer klassischen Naturwissenschaft durch Informatik oder NwT muss mindestens eines dieser Fächer als Leistungsfach belegt werden."))

                    return false
                }
            } else {
                return true
            }
        } else {
            return true
        }
    }

    private fun testeObFachSchonVorhanden(name:String):Boolean {
        val anzahl=aktuelleBelegung.filter{it.name==name}.count()
        return anzahl>0
    }

    private fun testeBereichsabdeckungPrüfung(): Boolean {
        var rueckgabe = false
        val prüfungsfächer=aktuelleBelegung.filter{it.attribute.contains(Fachattribute.mündlichePrüfung) || it.typ==Kursart.LF}
        if ((prüfungsfächer.filter{it.attribute.contains(Fachattribute.Deutsch) || it.attribute.contains(Fachattribute.Mathematik)}.count()<2)){
            println("Mathematik und Deutsch müssen Prüfungsfächer im Abitur sein.")
            fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Mathematik und Deutsch müssen Prüfungsfächer im Abitur sein."))

            return false

        } else {
            print("Mathematik und Deutsch sind in den Prüfungsfächern enthalten. ")
            fehlerMeldungen.add(Kommentar(Kommentarart.GUT,"Mathematik und Deutsch sind in den Prüfungsfächern enthalten. "))
rueckgabe=true

        }
        if (prüfungsfächer.count()<5) {
            println("Es müssen drei Leistungsfächer für die schriftliche und zwei Basisfächer für die mündliche Prüfung gewählt werden")
            fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Es müssen drei Leistungsfächer für die schriftliche und zwei Basisfächer für die mündliche Prüfung gewählt werden"))

            return false
        } else {
            println("Es sind drei Leistungsfächer und für die mündliche Prüfung zwei Basisfächer gewählt")
            fehlerMeldungen.add(Kommentar(Kommentarart.GUT,"Es sind drei Leistungsfächer und für die mündliche Prüfung zwei Basisfächer gewählt"))
    rueckgabe=true


        }
        val bereiche=prüfungsfächer.map{it->it.aufgabenfeld}.toSet()
        val fehlendeBereiche=setOf(Aufgabenfeld.I,Aufgabenfeld.II,Aufgabenfeld.III).minus(bereiche)
        if (fehlendeBereiche.size>0){
            println("Die folgenden Aufgabenfelder sind noch nicht in der Abiturprüfung abgedeckt: ${fehlendeBereiche.map{Text[it]}.joinToString ( separator="," )}")
            fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Die folgenden Aufgabenfelder sind noch nicht in der Abiturprüfung abgedeckt: ${fehlendeBereiche.map{Text[it]}.joinToString ( separator="," )}"))
            return false
        }

        return rueckgabe
    }


    private fun testePflichtbelegungRest():Boolean {
        var pflichtfächer = mutableListOf<Int>()
        val Bereichsnamen=listOf("Geschichte","Geographie und Gemeinschaftskunde","Religion oder Ethik","Bildende Kunst oder Musik","Sport")
        with(aktuelleBelegung) {
            pflichtfächer.add(filter { it.name == "Geschichte" }.count())
            pflichtfächer.add(filter{it.attribute.contains(Fachattribute.GeGe)}.count())
            pflichtfächer.add(filter{it.name=="Religionslehre"||it.name=="Ethik"}.count())
            pflichtfächer.add(filter{it.name=="Bildende Kunst"||it.name=="Musik"}.count())
            pflichtfächer.add(filter{it.name=="Sport"}.count())
        }
        var fehlendeFächer=mutableListOf<String>()
        for ((index,pf) in pflichtfächer.withIndex()){
            if (pf==0){
                fehlendeFächer.add(Bereichsnamen[index])
            }
        }
        if (fehlendeFächer.size>0){
            println("Folgende Fächer fehlen noch: ${fehlendeFächer.joinToString ( separator=", " )}")
            fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Folgende Fächer fehlen noch: ${fehlendeFächer.joinToString ( separator=", " )}"))
        }
        return fehlendeFächer.size==0
    }



    private fun testeMindestens42Kurse():Boolean {
        var kurssumme=0
        for (fach in aktuelleBelegung){
            kurssumme += if (fach.alternativStunden==false) fach.stunden.filter { it!=0 }.count() else fach.stundenAlternativ.filter { it!=0 }.count()
        }
        println("Anzahl der gewählten Kurse: $kurssumme")
        fehlerMeldungen.add(Kommentar(Kommentarart.NEUTRAL,"Anzahl der gewählten Kurse: $kurssumme"))
        if (kurssumme<42){
            println("Es müssen mindestens 42 Kurse gewählt werden")
            fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Es müssen mindestens 42 Kurse gewählt werden"))
        }
        return kurssumme>=42
    }

    private fun testeAnrechnungspflichtigeStunden():Boolean{
        var mukuSchonGeprüft=false
        var kurssumme=0
        for (f in aktuelleBelegung){

            if (f.typ==Kursart.LF) {
                kurssumme += 4

            } else if (f.typ== Kursart.BF){
                if (f.attribute.contains(Fachattribute.Geschichte)){
                    kurssumme+=4
                } else if (f.attribute.contains(Fachattribute.MuKu)&& !mukuSchonGeprüft) {
                    kurssumme += 2
                    mukuSchonGeprüft = true
                } else if (f.attribute.contains(Fachattribute.Naturwissenschaft) ||f.attribute.contains(Fachattribute.kannNawiErsetzen)) {
                    kurssumme += 4
                } else if (f.attribute.contains(Fachattribute.Fremdsprache)){
                    if (f.alternativStunden){
                        kurssumme+=2
                    } else {
                        kurssumme+=4
                    }
                } else if (f.attribute.contains(Fachattribute.GeGe)){
                    if (aktuelleBelegung.filter { it.name == "Gemeinschaftskunde" && it.typ == Kursart.LF }.count() > 0) {
                        kurssumme+=2

                    } else if (aktuelleBelegung.filter { it.name == "Geographie" && it.typ == Kursart.LF }.count() > 0) {
                        kurssumme+=2
                    } else if (aktuelleBelegung.filter { it.name=="Wirtschaft" && it.typ==Kursart.LF }.count()>0) {
                        kurssumme+=2
                    } else {
                        kurssumme+=4
                    }
                } else if (f.attribute.contains(Fachattribute.mündlichePrüfung)) { // andere Basisfächer als mündliche Prüfung
                    kurssumme += 4
                }

            } else if (f.attribute.contains(Fachattribute.mündlichePrüfung)) { //WF in mündlicher Prüfung
                kurssumme += 4
            }
            }

        if (kurssumme==40){
            fehlerMeldungen.add(Kommentar(Kommentarart.GUT,"Es sind 40 anrechnungspflichtige Kurse in der Belegung vorhanden." ))
    } else if (kurssumme<40)
    {
        fehlerMeldungen.add(Kommentar(Kommentarart.GUT,"Es sind mit $kurssumme weniger als 40 anrechnungspflichtige Kurse in der Belegung vorhanden." ))

    } else if (kurssumme>40){
            fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Es sind mit $kurssumme mehr als 40 anrechnungspflichtige Kurse in der Belegung vorhanden." ))

        }

        return kurssumme==40
    }

    private fun holeWochenStunden():List<Int>{
        var stundensumme=mutableListOf<Int>(0,0,0,0)
        var zeilenStunden=mutableListOf<Int>()
        for (fach in aktuelleBelegung){

            zeilenStunden= if (fach.alternativStunden==false) fach.stunden else fach.stundenAlternativ
            for (i in 0..3){
                stundensumme[i] += zeilenStunden[i]
            }
        }
        return stundensumme.toList()
    }

    private fun testeMindestens32Wochenstunden():Boolean{
        var stundensumme=0
        for (fach in aktuelleBelegung){
            stundensumme += if (fach.alternativStunden==false) fach.stunden.sum() else fach.stundenAlternativ.sum()
        }
        val durchschnitt=stundensumme.toDouble()/4.0
        println("Durchschnittlich $durchschnitt Wochenstunden pro Halbjahr.")
        fehlerMeldungen.add(Kommentar(Kommentarart.NEUTRAL,"Durchschnittlich $durchschnitt Wochenstunden pro Halbjahr."))

        if (durchschnitt<32){
            fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Es müssen im Durchschnitt mindestens 32 Wochenstunden pro Halbjahr sein.\nSomit müssen noch Kurse im Gesamtwochenstundenumfang von mindestens ${(32 - durchschnitt) * 4} Stunden belegt werden."))
            println("\nEs müssen im Durchschnitt mindestens 32 Wochenstunden pro Halbjahr sein.")
            println("\nSomit müssen noch Kurse im Gesamtwochenstundenumfang von mindestens ${(32-durchschnitt)*4} Stunden belegt werden.")
        }
        return durchschnitt>=32
    }

    private fun testeLeistungsfächer(): Boolean {
        val leistungsfächer = aktuelleBelegung.filter { it.typ == Kursart.LF }
        var rückgabe = false
        if (leistungsfächer.size < 3) {
            println("Zu wenige Leistungsfächer gewählt!")
            fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Zu wenige Leistungsfächer gewählt!"))
        } else if (leistungsfächer.size > 3) {
            println("Zu viele Leistungsfächer gewählt!")
            fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Zu viele Leistungsfächer gewählt!"))
        } else { // genau drei Leistungsfächer
            val lfAuswahl = leistungsfächer.groupBy { it.attribute }.keys.flatten().toSet()

            if ((leistungsfachBereiche.minus(lfAuswahl).size) <= 2) {
                println("Leistungsfachkombination gültig")
                fehlerMeldungen.add(Kommentar(Kommentarart.GUT,"Leistungsfachkombination gültig"))
                rückgabe = true
            } else {
                println("Leistungsfachkombination ungültig: zwei der drei Leistungsfächer müssen aus D, M, FS, Nawi sein")
                fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Leistungsfachkombination ungültig: zwei der drei Leistungsfächer müssen aus D, M, FS, Nawi sein"))
            }
        }

        return rückgabe
    }

    fun serialisiere(){
        var kodierung=""
        var schonErledigt=mutableListOf<Belegfach>()
        // Bit 1: Mathematik als Basisfach (0) oder Leistungsfach (1)
        kodierung+=aktuelleBelegung.filter{it.attribute.contains(Fachattribute.Mathematik) && it.typ==Kursart.LF}.count()
        // Bit 2: Deutsch als Basisfach (0) oder Leistungsfach (1)
        kodierung+=aktuelleBelegung.filter{it.attribute.contains(Fachattribute.Deutsch) && it.typ==Kursart.LF}.count()

        schonErledigt.add(aktuelleBelegung.filter{it.attribute.contains(Fachattribute.Mathematik)}.first())
        schonErledigt.add(aktuelleBelegung.filter{it.attribute.contains(Fachattribute.Deutsch)}.first())
        // Bit 3,4,5: gewählte Sprache
        var sprache=""
        for ((index, s) in sprachen.withIndex()){
            if (aktuelleBelegung.filter{it.name==s}.count()>0){
                sprache=s
                kodierung+= binär3[index]
                break
            }
        }
         // Bit 6: Sprache als Basisfach (0) oder Leistungsfach (1)
        var fachAktuell=aktuelleBelegung.filter{it.name == sprache}.first()
        schonErledigt.add(fachAktuell)
         if (fachAktuell.typ== Kursart.LF){
             kodierung+="1"

         } else {
             kodierung+="0"
             // falls Basisfach: dreistündig (0) oder vierstündig (1)
             if (fachAktuell.alternativStunden==true){
                 kodierung+="1"
             } else {
                 kodierung+="0"
             }
             // mündliche Prüfung: nein (0) oder ja (1)
             if (fachAktuell.attribute.contains(Fachattribute.mündlichePrüfung)) {
                 kodierung += "1"
             } else {
                 kodierung +="0"
             }
         }

        var naturwissenschaft=""
        for ((index, s) in naturwissenschaften.withIndex()){
            if (aktuelleBelegung.filter{it.name==s}.count()>0){
                naturwissenschaft=s
                kodierung+= binär2[index]
                break
            }
        }
        // erste Naturwissenschaft
        fachAktuell=aktuelleBelegung.filter{it.name == naturwissenschaft}.first()
        schonErledigt.add(fachAktuell)
        kodierung+=fachBFoderLF(fachAktuell)

        // Geschichte
        fachAktuell=aktuelleBelegung.filter{it.name=="Geschichte"}.first()
        schonErledigt.add(fachAktuell)
        kodierung+=fachBFoderLF(fachAktuell)





    }

    private fun fachBFoderLF(fachAktuell:Belegfach):String{
        var kodierung=""
        if (fachAktuell.typ== Kursart.LF){
            kodierung+="1"

        } else {
            kodierung+="0"
            // mündliche Prüfung: nein (0) oder ja (1)
            if (fachAktuell.attribute.contains(Fachattribute.mündlichePrüfung)) {
                kodierung += "1"
            } else {
                kodierung +="0"
            }
        }
        return kodierung
    }

    fun MutableList<Belegfach>.mehrfach(): List<String> {
        val fachMap: MutableMap<String, Int> = mutableMapOf<String, Int>()
        val mehrfach = this.groupBy { it: Belegfach -> it.name }.filterValues { it.size > 1 }.keys.toList()
        println(this.groupBy{ it: Belegfach -> it.name })
        return mehrfach
    }


    fun action(command: Aktion, vararg parameter: Any) {
        when (command) {
            Aktion.NEU -> {
                val name = parameter[0] as String // Name des Fachs
                val typ = parameter[1] as Kursart // LF, BF oder WF?
                val fach = fächerauswahl.filter { it.name == name && it.typ == typ }.firstOrNull()

                if (!testeObFachSchonVorhanden(name)) {
                    if (fach != null) {
                        if (!aktuelleBelegung.contains(fach)) {
                            aktuelleBelegung.add(fach)
                        } else {
                            println("Fach $name bereits enthalten")
                           // fehlerMeldungen.add(Kommentar(true,"Fach $name bereits enthalten"))
                        }
                    } else {
                        println("Fach existiert so nicht")
                        //fehlerMeldungen.add(Kommentar(true,"Fach existiert so nicht"))
                    }
                } else {
                    println("Fach $name ist bereits in der Belegung vorhanden")
                    //fehlerMeldungen.add(Kommentar(true,"Fach $name ist bereits in der Belegung vorhanden"))
                }
            }

            Aktion.LÖSCHE -> {
                val name = parameter[0] as String // Name des Fachs
                aktuelleBelegung.removeAll { it.name == name }
            }

            Aktion.TOGGLESTUNDEN -> {
                val name = parameter[0] as String // Name des Fachs
                val typ = parameter[1] as Kursart // LF, BF oder WF?
                val fach=aktuelleBelegung.filter{it.name==name && it.typ==typ}.firstOrNull()
               if (fach!=null) {
                   fach.alternativStunden = !(fach.alternativStunden)
                   if (fach.alternativStunden && fach.stundenAlternativ.filter{it>0}.count()<4){
                       fach.attribute.remove(Fachattribute.mündlichePrüfung)
                   }

               }

            }

            Aktion.CHECK -> {
                // 2 aus den LF aus Deutsch, Fremdsprache, Mathematik oder klassische Naturwissenschaft
                fehlerMeldungen= mutableListOf()

                var fehlerListe= mutableListOf<Boolean>()
                fehlerListe.add(testeMehrfach())
                fehlerListe.add(testeLeistungsfächer())
                fehlerListe.add(testeBereichsabdeckungPrüfung())
                fehlerListe.add(testeSprachenOderNaturwissenschaft())
                fehlerListe.add(testePflichtbelegungRest())
                fehlerListe.add(testeMindestens42Kurse())
                if (fehlerListe.filter{it==false}.count()==0){
                    testeAnrechnungspflichtigeStunden()
                }
                /*testeAnrechnungspflichtigeStunden()
                println("Fehler: ${fehlerListe.filter{it==false}.count()}")
                fehlerListe.forEach { println(it) }*/
                //testeMindestens32Wochenstunden()


            }

            Aktion.TOGGLEMÜNDLICH -> {
                val name = parameter[0] as String // Name des Fachs
                val typ = parameter[1] as Kursart // LF, BF oder WF?
                val anzahlPrüfungsfächer =
                    aktuelleBelegung.filter { it.attribute.contains(Fachattribute.mündlichePrüfung) }.count()
                val schriftlichIndex=aktuelleBelegung.indexOfFirst{it.name==name && it.typ==typ}
                if (schriftlichIndex>=0) {
                    with(aktuelleBelegung[schriftlichIndex].attribute) {
                        if (contains(Fachattribute.mündlichePrüfung)) {
                            remove(Fachattribute.mündlichePrüfung)
                        } else {
                            if (anzahlPrüfungsfächer < 2) {
                                add(Fachattribute.mündlichePrüfung)
                            } else {
                                fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT,"Maximal drei mündliche Prüfungsfächer erlaubt."))
                                println("Maximal drei mündliche Prüfungsfächer erlaubt.")
                            }
                        }
                    }
                }

            }

            Aktion.TOGGLE -> {
                val name = parameter[0] as String // Name des Fachs
                val typ = parameter[1] as Kursart // LF, BF oder WF?
                val fach = fächerauswahl.filter { it.name == name && it.typ == typ }.firstOrNull()

                if (fach != null) {
                    with(aktuelleBelegung) {
                        if (contains(fach)) { // Fach selber wird gelöscht
                            fach.attribute.remove(Fachattribute.mündlichePrüfung)

                            removeAll { it.name == name }

                            if (fach.name=="Wirtschaft" && fach.typ==Kursart.LF){
                                val gege=fächerauswahl.filter { it.attribute.contains(Fachattribute.GeGe) }.firstOrNull()
                                if (gege!=null){
                                    gege.alternativStunden=false
                                    gege.attribute.remove(Fachattribute.mündlichePrüfung)
                                } else {

                                }

                            } else {

                            }
                            fach.alternativStunden=false

                        } else if (map { it -> it.name }.contains(name)) {
                            fächerauswahl.filter{it.name==name}.forEach {
                                it.attribute.remove(Fachattribute.mündlichePrüfung)
                            }

                            removeAll { it.name == name }
                            fach.alternativStunden=false
                            add(fach)
                        } else {
                            add(fach)
                            fach.alternativStunden=false
                        }
                    }
                }
            }
        }

        //aktuelleBelegung.mehrfach().forEach(System.out::println)

    }


    companion object {



        val binär2=listOf<String>("00","01","10","11")
        val binär3=listOf<String>("000","001","010","011","100","101","110","111")
        val naturwissenschaften=listOf<String>("Physik", "Chemie", "Biologie")
        val sprachen=listOf<String>("Englisch","Französisch","Latein", "Griechisch", "Russisch","Spanisch","Italienisch","Portugiesisch")
        val lfOderBfOderBfMündlich=hashMapOf<String,String>("LF" to "10", "BF" to "01", "BFmündlich" to "11")
        var fehlerMeldungen= mutableListOf<Kommentar>()
        val Text= hashMapOf<Any,String>(
            Kursart.BF to "Basisfach",
            Aufgabenfeld.I to "Sprachlich",
            Aufgabenfeld.II to "Gesellschaftswissenschaften",
            Aufgabenfeld.III to "Mathematik und Naturwissenschaften"

        )
        enum class Kursart { LF, BF, WF }



        val leistungsfachBereiche = setOf(
            Fachattribute.Mathematik,
            Fachattribute.Fremdsprache,
            Fachattribute.Naturwissenschaft,
            Fachattribute.Deutsch
        )

        enum class Aktion { NEU, LÖSCHE, TOGGLE, CHECK, TOGGLEMÜNDLICH ,TOGGLESTUNDEN}
        data class Belegfach(
            val name: String,
            val typ: Kursart,
            var aufgabenfeld: Aufgabenfeld,
            var stunden: MutableList<Int>,
            val stundenAlternativ:MutableList<Int>,
            var alternativStunden:Boolean,
            var attribute: MutableList<Fachattribute>
        )





        lateinit var fächerauswahl: List<Belegfach>

        fun generiereFächer(listeMitFächern: List<Fach>) {
            val liste = mutableListOf<Belegfach>()
            for (fach in listeMitFächern) {
                for (index in 0 until fach.stunden.size) {
                    var stundenbelegung = mutableListOf<Int>()
                    var stundenbelegungAlternativ=mutableListOf<Int>()
                    if (fach.stunden.get(index) > 0) {
                        for (i in 0..3) {
                            stundenbelegung.add(fach.stunden.get(index))

                        }


                        val art = when (index) {
                            0 -> Kursart.LF
                            1 -> Kursart.BF
                            else -> Kursart.WF
                        }

                        if (fach.attribute.contains(Fachattribute.Fremdsprache) && art== Kursart.BF){
                            stundenbelegungAlternativ= mutableListOf<Int>(4,4,4,4) // spätbeginnende Fremdsprache
                            val attr2=fach.attribute.toMutableList()
                            attr2.add(Fachattribute.spätbeginnend)
                            fach.attribute=attr2.toList()
                        }
                        if (fach.attribute.contains(Fachattribute.GeGe)){
                            stundenbelegungAlternativ=mutableListOf<Int>(2,0,2,0) // falls Geschichte LF
                        }
                        if (fach.attribute.contains(Fachattribute.Seminarfach)){
                            stundenbelegung= mutableListOf(3,3,0,0)
                        }

                        if (art== Kursart.WF){
                            stundenbelegungAlternativ=mutableListOf<Int>(2,2,0,0) // falls Geschichte LF
                        }

                        liste.add(Belegfach(fach.name, art, fach.aufgabenfeld, stundenbelegung,stundenbelegungAlternativ,false, fach.attribute.toMutableList()))
                    }
                }
            }
            liste.forEachIndexed { index, belegfach -> println("$index, $belegfach") }
            fächerauswahl = liste.toList()
        }
    }
}



enum class Aufgabenfeld { I, II, III, Sport, Seminarfach }

enum class Fachattribute { Naturwissenschaft, NawiFe, Deutsch, Fremdsprache, Mathematik, kannNawiErsetzen, Seminarfach, GeGe, Geschichte, MuKu, mündlichePrüfung,spätbeginnend,Orchidee }


val anrechnungspflichtigeKurse=listOf<Fachattribute>(
    Fachattribute.NawiFe,
    Fachattribute.Mathematik,
    Fachattribute.Deutsch,
    Fachattribute.Geschichte,
    Fachattribute.GeGe,
    Fachattribute.MuKu
)

data class Fach(
    val name: String,
    val aufgabenfeld: Aufgabenfeld,
    val stunden: List<Int>,
    var attribute: List<Fachattribute>
)






