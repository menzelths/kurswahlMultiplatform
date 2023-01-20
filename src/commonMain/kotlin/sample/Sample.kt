package sample

expect class Sample() {
    fun checkMe(): Int
}

expect object Platform {
    val name: String
}

expect object Variablen {
    var excludedList: MutableList<Int>

}


fun main() {

    Belegung.initialisiereFächer()

    var aktuelleBelegung = Belegung("Belegung")
    aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Mathematik", Belegung.Companion.Kursart.LF)
    aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Englisch", Belegung.Companion.Kursart.LF)
    //aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Informatik", Belegung.Companion.Kursart.LF)
    aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Geschichte", Belegung.Companion.Kursart.BF)
    aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Geographie", Belegung.Companion.Kursart.BF)

    //aktuelleBelegung.action(Belegung.Companion.Aktion.TOGGLESTUNDEN, "Geographie", Belegung.Companion.Kursart.BF)
    aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Gemeinschaftskunde", Belegung.Companion.Kursart.BF)
    //aktuelleBelegung.action(Belegung.Companion.Aktion.TOGGLESTUNDEN, "Gemeinschaftskunde", Belegung.Companion.Kursart.BF)
    aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Religionslehre", Belegung.Companion.Kursart.BF)
    aktuelleBelegung.action(Belegung.Companion.Aktion.TOGGLEMÜNDLICH, "Religionslehre", Belegung.Companion.Kursart.BF)
    aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Deutsch", Belegung.Companion.Kursart.BF)
    aktuelleBelegung.action(Belegung.Companion.Aktion.TOGGLEMÜNDLICH, "Deutsch", Belegung.Companion.Kursart.BF)
    //aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Geo/Gk", Belegung.Companion.Kursart.BF)
    aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Sport", Belegung.Companion.Kursart.BF)
    aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Physik", Belegung.Companion.Kursart.LF)
    aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Biologie", Belegung.Companion.Kursart.BF)
    aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Chemie", Belegung.Companion.Kursart.BF)
    aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Bildende Kunst", Belegung.Companion.Kursart.BF)
    //aktuelleBelegung.action(Belegung.Companion.Aktion.NEU, "Wahlfach Informatik", Belegung.Companion.Kursart.WF)
    //aktuelleBelegung.action(Belegung.Companion.Aktion.TOGGLESTUNDEN, "Wahlfach Informatik", Belegung.Companion.Kursart.WF)


    aktuelleBelegung.action(Belegung.Companion.Aktion.CHECK)

    Belegung.belegungsObjekt = aktuelleBelegung



    Sample().checkMe() // starte das Programm, das die Website aufbaut

}

class Belegung(val name: String) {

    abstract class Zeile

    data class Überschrift(
        val text: String
    ) : Zeile()

    enum class Kommentarart {
        GUT, SCHLECHT, NEUTRAL
    }

    data class Summe(
        val stunden: List<Int>
    ) : Zeile()

    data class Kommentar(

        val kommentarart: Kommentarart,
        val text: String
    ) : Zeile()

    data class ZeileDarstellung(
        val name: String,
        val aufgabenfeld: Aufgabenfeld,
        val gewählt: Kursart?,
        val klickbar: Set<Kursart>,
        val mündlich: Boolean,
        val mündlichKlickbar: Boolean,
        val stunden: List<Int>,
        val stundenAlternativVorhanden: Boolean,
        val fachnameOriginal: String,
        val anrechnungspflichtig: List<Int>

    ) : Zeile()

    private fun anzahlLeistungsfächer() = aktuelleBelegung.filter { it.typ == Kursart.LF }.count()
    private fun anzahlMündlichePrüfungen() =
        aktuelleBelegung.filter { it.attribute.contains(Fachattribute.muendlichePruefung) }.count()

    private fun seminarFachGewählt(): Aufgabenfeld? {
        val sf = aktuelleBelegung.filter { it.attribute.contains(Fachattribute.Seminarfach) }.firstOrNull()
        if (sf != null) {
            return sf.aufgabenfeld
        }
        return null
    }

    private fun fachAlsBasisfachOderWahlfachGewählt(fach: String): Boolean {
        return aktuelleBelegung.filter { it.name == fach }.filter { it.typ == Kursart.BF || it.typ == Kursart.WF }
            .count() > 0
    }

    private fun alleHalbjahreBelegt(fach: String, typ: Kursart): Boolean {
        val fach = aktuelleBelegung.filter { it.name == fach && it.typ == typ }.firstOrNull()
        if (fach != null) {

            if (fach.alternativStunden) {
                return fach.stundenAlternativ.filter { it != 0 }.count() >= 3 //für Geo und Gk bei Wirtschaft-LF
            } else {
                return fach.stunden.filter { it != 0 }.count() >= 3 // für Geo und Gk bei Wirtschaft-LF
            }
        } else {
            return false
        }

    }


    public fun holeFehler(): List<Kommentar> {
        this.action(Aktion.CHECK)
        return fehlerMeldungen.toList()
    }

    public fun getBelegung(): MutableList<Belegfach> {
        return aktuelleBelegung
    }

    public fun deleteBelegung(): Unit {

        /*  aktuelleBelegung.filter { it.attribute.contains(Fachattribute.mündlichePrüfung) }.forEach {
              it.attribute.remove(Fachattribute.mündlichePrüfung)
              it.alternativStunden=false

          }*/
        aktuelleBelegung.clear()
        Belegung.initialisiereFächer()
    }

    public fun holeDarstellung(): List<Zeile> {
        var text = mutableSetOf<Zeile>()
        val bereiche = fächerauswahl.filter { !Variablen.excludedList.contains(it.id) }.groupBy { it.aufgabenfeld }

        for (bereich in bereiche) {
            text.add(Überschrift("Bereich " + bereich.key))
            val fächer = bereich.value.groupBy { it.name }
            for (f in fächer) {
                val aufgabenfeld = bereich.key

                lateinit var name: String
                var gewählt: Kursart? = null
                var mündlich = false
                var mündlichKlickbar = false
                var klickbarWahl = mutableSetOf<Kursart>()
                var stunden = mutableListOf<Int>()
                var stundenAlternativVorhanden = false
                var anrechnung = mutableListOf<Int>(0, 0, 0, 0)
                name = f.key
                val fachnameOriginal = f.key
                val varianten = f.value
                for (v in varianten) {
                    if (anzahlLeistungsfächer() < 3
                        && !v.attribute.contains(Fachattribute.Orchidee) // Wahlfach hat kein LF
                        && !v.attribute.contains(Fachattribute.Seminarfach) // Seminarfach ist kein LF
                        && !v.attribute.contains(Fachattribute.GeGe)
                    ) { // GeGe gibt es nicht als LF
                        klickbarWahl.add(Kursart.LF)
                    }
                    if (aktuelleBelegung.contains(v)) {
                        gewählt = v.typ
                        if (v.attribute.contains(Fachattribute.Seminarfach)) {

                        }
                        klickbarWahl.add(v.typ)
                        stunden = if (v.alternativStunden == false) v.stunden else v.stundenAlternativ
                        if (v.typ == Kursart.WF && !v.stundenAlternativ.isEmpty()) {
                            stundenAlternativVorhanden = true
                        }
                        if (v.typ == Kursart.BF && v.attribute.contains(Fachattribute.spaetbeginnend)) {
                            stundenAlternativVorhanden = true
                        }
                        if (v.typ == Kursart.BF && v.attribute.contains(Fachattribute.Geo)) {
                            stundenAlternativVorhanden = true
                        }
                        if (v.typ == Kursart.BF && v.attribute.contains(Fachattribute.Gk)) {
                            stundenAlternativVorhanden = true
                        }
                        if (v.attribute.contains(Fachattribute.GeGe) && v.typ == Kursart.BF) {
                            v.stunden = mutableListOf(2, 2, 2, 2)

                            if (aktuelleBelegung.filter { it.name == "Wirtschaft" && it.typ == Kursart.LF }
                                    .count() > 0) {
                                stundenAlternativVorhanden = true
                            }
                            if (aktuelleBelegung.filter { it.name == "Gemeinschaftskunde" && it.typ == Kursart.LF }
                                    .count() > 0) {
                                stundenAlternativVorhanden = false
                                v.stunden = mutableListOf(0, 2, 2, 0)
                                name = "Geographie"
                                stunden = v.stunden

                            }
                            if (aktuelleBelegung.filter { it.name == "Geographie" && it.typ == Kursart.LF }
                                    .count() > 0) {
                                stundenAlternativVorhanden = false
                                v.stunden = mutableListOf(2, 0, 0, 2)
                                stunden = v.stunden
                                name = "Gemeinschaftskunde"
                            }
                        }

                        if (Belegung.holeKurswahlKorrekt()) {
                            val stelle = Belegung.anrechnungspflichtig.filter { it.id == v.id }.firstOrNull()
                            if (stelle != null) {
                                anrechnung = stelle.stunden.toMutableList()
                            }
                        }

                    }

                    // falls Gemeinschaftskunde oder Geographie als LK, dann Geo/Gk zu geo bzw. gk
                    if (v.attribute.contains(Fachattribute.GeGe)) {
                        if (aktuelleBelegung.filter { it.name == "Gemeinschaftskunde" && it.typ == Kursart.LF }
                                .count() > 0) {
                            name = "Geographie"
                        }
                        if (aktuelleBelegung.filter { it.name == "Geographie" && it.typ == Kursart.LF }.count() > 0) {
                            name = "Gemeinschaftskunde"
                        }
                    }

                    if (v.typ == Kursart.BF || v.typ == Kursart.WF) {
                        if (v.attribute.contains(Fachattribute.Seminarfach) && seminarFachGewählt() == v.aufgabenfeld) {
                            klickbarWahl.add(v.typ)
                        } else if (v.attribute.contains(Fachattribute.Seminarfach) && seminarFachGewählt() != null && seminarFachGewählt() != v.aufgabenfeld) {
                            klickbarWahl.remove(v.typ)
                        } else {
                            klickbarWahl.add(v.typ)
                        }
                        if (anzahlMündlichePrüfungen() < 2 && fachAlsBasisfachOderWahlfachGewählt(v.name) && alleHalbjahreBelegt(
                                v.name,
                                v.typ
                            )
                        ) {
                            if (v.typ == Kursart.BF) {
                                mündlichKlickbar = true
                            } else if (v.typ == Kursart.WF && v.mündlichMöglich) {
                                mündlichKlickbar = true
                            }
                        }
                        if (v.attribute.contains(Fachattribute.muendlichePruefung)) {
                            mündlichKlickbar = true
                            mündlich = true
                        }
                    }
                }





                text.add(
                    ZeileDarstellung(
                        name,
                        aufgabenfeld,
                        gewählt,
                        klickbarWahl,
                        mündlich,
                        mündlichKlickbar,
                        stunden,
                        stundenAlternativVorhanden,
                        fachnameOriginal,
                        anrechnung
                    )
                )
            }
        }
        text.add(Summe(holeWochenStunden()))
        return text.toList()
    }

    public fun getFächer(): List<Belegfach> {
        return fächerauswahl
    }

    override fun toString(): String {
        return "\n\nAktuelleBelegung:\n" + aktuelleBelegung.map { it -> "${it.name} ${it.typ} ${it.attribute}" }
            .joinToString(
                separator = "\n"
            )
    }

    private val aktuelleBelegung: MutableList<Belegfach> = mutableListOf()

    private fun testeMehrfach(): Boolean {
        val mehrfach = aktuelleBelegung.groupBy { it: Belegfach -> it.name }.filterValues { it.size > 1 }.keys.toList()
        if (mehrfach.size > 0) {
            println("Die folgenden Fächer sind mehrfach belegt: ${mehrfach.joinToString(separator = ",")}")
            return false
        } else {
            return true
        }
    }

    private fun testeSprachenOderNaturwissenschaft(): Boolean {
        // Es müssen zwei Sprachen oder zwei Naturwissenschaften abgedeckt sein
        val sprachen = aktuelleBelegung.filter { it.attribute.contains(Fachattribute.Fremdsprache) }
        val naturwissenschaften = aktuelleBelegung.filter {
            it.attribute.contains(Fachattribute.Naturwissenschaft) || it.attribute.contains(Fachattribute.kannNawiErsetzen)
        }
        val naturwissenschaftersatz = aktuelleBelegung.filter { it.attribute.contains(Fachattribute.kannNawiErsetzen) }
        val kommentarart =
            if (sprachen.count() > 0 && naturwissenschaften.count() > 0 && sprachen.count() + naturwissenschaften.count() > 2) Kommentarart.GUT else Kommentarart.SCHLECHT
        //"${sprachen.count()} Fremdsprache${if (sprachen.count()!=1) "n" else ""} und ${naturwissenschaften.count()} Naturwissenschaft${if (naturwissenschaften.count()!=1) "en" else ""} gewählt."
        fehlerMeldungen.add(
            Kommentar(
                kommentarart,
                "${sprachen.count()} Fremdsprache${if (sprachen.count() != 1) "n" else ""} und ${naturwissenschaften.count()} Naturwissenschaft${if (naturwissenschaften.count() != 1) "en" else ""} gewählt."
            )
        )

        if (sprachen.count() == 0 || naturwissenschaften.count() == 0) {
            println("Es wurde noch keine Fremdsprache gewählt.")
            if (naturwissenschaften.count() - naturwissenschaftersatz.count() == 0) {
                fehlerMeldungen.add(
                    Kommentar(
                        Kommentarart.SCHLECHT,
                        "Es wurde noch keine klassische Naturwissenschaft gewählt."
                    )
                )
            }
            if (sprachen.count() == 0) {
                fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT, "Es wurde noch keine Fremdsprache gewählt."))
            }
            return false
        }

        if (sprachen.count() < 2 && naturwissenschaften.count() < 2) {
            println("Es müssen entweder mindestens 2 Naturwissenschaften und 1 Sprache belegt werden oder umgekehrt.")
            fehlerMeldungen.add(
                Kommentar(
                    Kommentarart.SCHLECHT,
                    "Es müssen entweder mindestens 2 Naturwissenschaften und 1 Sprache belegt werden oder umgekehrt."
                )
            )
            return false
        } else if (sprachen.count() < 2 && naturwissenschaften.count() >= 2) {
            // es müssen zwei Naturwissenschaften dabei sein
            val anzahlKlassischeNaturwissenschaften = naturwissenschaften.count() - naturwissenschaftersatz.count()
            if (anzahlKlassischeNaturwissenschaften == 0) {
                println("Es muss mindestens eine klassische Naturwissenschaft belegt werden.")
                fehlerMeldungen.add(
                    Kommentar(
                        Kommentarart.SCHLECHT,
                        "Es muss mindestens eine klassische Naturwissenschaft (Biologie, Chemie, Physik) belegt werden."
                    )
                )
                return false
            } else if (anzahlKlassischeNaturwissenschaften == 1) {
                val anzahlLeistungsfächer = naturwissenschaften.filter { it.typ == Kursart.LF }.count()
                /* Neue Regelung ab 2020/2021: zweite Naturwissenschaft kann auch ersetzt werden, wenn Nawi und Informatik BF sind
                if (anzahlLeistungsfächer > 0) {
                */
                println("Gültige Ersetzung der zweiten Naturwissenschaft")
                fehlerMeldungen.add(Kommentar(Kommentarart.GUT, "Gültige Ersetzung der zweiten Naturwissenschaft."))
                return true
                /*
                } else {
                    println("Bei der Ersetzung einer klassischen Naturwissenschaft durch Informatik oder NwT muss mindestens eines dieser Fächer als Leistungsfach belegt werden.")
                    fehlerMeldungen.add(
                        Kommentar(
                            Kommentarart.SCHLECHT,
                            "Bei der Ersetzung einer klassischen Naturwissenschaft durch Informatik oder NwT muss mindestens eines dieser Fächer als Leistungsfach belegt werden."
                        )
                    )
                    return false
                }*/
            } else {
                return true
            }
        } else if (sprachen.count() >= 2 && naturwissenschaften.count() <= 2) {
            val anzahlKlassischeNaturwissenschaften = naturwissenschaften.count() - naturwissenschaftersatz.count()
            if (anzahlKlassischeNaturwissenschaften == 0) {
                fehlerMeldungen.add(
                    Kommentar(
                        Kommentarart.SCHLECHT,
                        "Es muss mindestens eine klassische Naturwissenschaft (Biologie, Chemie, Physik) belegt werden."
                    )
                )
                return false
            } else {
                return true
            }
        } else {
            return true
        }
    }

    private fun testeObFachSchonVorhanden(name: String): Boolean {
        val anzahl = aktuelleBelegung.filter { it.name == name }.count()
        return anzahl > 0
    }

    private fun testeBereichsabdeckungPrüfung(): Boolean {
        var rueckgabe = false
        val prüfungsfächer =
            aktuelleBelegung.filter { it.attribute.contains(Fachattribute.muendlichePruefung) || it.typ == Kursart.LF }
        if ((prüfungsfächer.filter { it.attribute.contains(Fachattribute.Deutsch) || it.attribute.contains(Fachattribute.Mathematik) }
                .count() < 2)) {
            println("Mathematik und Deutsch müssen Prüfungsfächer im Abitur sein.")
            fehlerMeldungen.add(
                Kommentar(
                    Kommentarart.SCHLECHT,
                    "Mathematik und Deutsch müssen Prüfungsfächer im Abitur sein."
                )
            )
            return false
        } else {
            print("Mathematik und Deutsch sind in den Prüfungsfächern enthalten. ")
            fehlerMeldungen.add(
                Kommentar(
                    Kommentarart.GUT,
                    "Mathematik und Deutsch sind in den Prüfungsfächern enthalten. "
                )
            )
            rueckgabe = true
        }
        if (prüfungsfächer.count() < 5) {
            println("Es müssen drei Leistungsfächer für die schriftliche und zwei Basisfächer für die mündliche Prüfung gewählt werden")
            fehlerMeldungen.add(
                Kommentar(
                    Kommentarart.SCHLECHT,
                    "Es müssen drei Leistungsfächer für die schriftliche und zwei Basisfächer für die mündliche Prüfung gewählt werden."
                )
            )
            return false
        } else {
            println("Es sind drei Leistungsfächer und für die mündliche Prüfung zwei Basisfächer gewählt")
            fehlerMeldungen.add(
                Kommentar(
                    Kommentarart.GUT,
                    "Es sind für die Abiturprüfung drei Leistungsfächer und zwei mündliche Prüfungsfächer gewählt."
                )
            )
            rueckgabe = true
        }

        val bereiche = prüfungsfächer.map { it -> it.aufgabenfeld }.toSet()
        val fehlendeBereiche = setOf(Aufgabenfeld.I, Aufgabenfeld.II, Aufgabenfeld.III).minus(bereiche)
        if (fehlendeBereiche.size > 0) {
            println(
                "Die folgenden Aufgabenfelder sind noch nicht in der Abiturprüfung abgedeckt: ${
                    fehlendeBereiche.map { Text[it] }.joinToString(
                        separator = ","
                    )
                }."
            )
            fehlerMeldungen.add(
                Kommentar(
                    Kommentarart.SCHLECHT,
                    "Die folgenden Aufgabenfelder sind noch nicht in der Abiturprüfung abgedeckt: ${
                        fehlendeBereiche.map { Text[it] }.joinToString(
                            separator = ","
                        )
                    }."
                )
            )
            return false
        }
        return rueckgabe
    }


    private fun testePflichtbelegungRest(): Boolean {
        var pflichtfächer = mutableListOf<Int>()
        val Bereichsnamen = listOf(
            "Geschichte",
            "Geographie",
            "Gemeinschaftskunde",
            "Religion oder Ethik",
            "Bildende Kunst oder Musik",
            "Sport"
        )
        with(aktuelleBelegung) {
            pflichtfächer.add(filter { it.name == "Geschichte" }.count())
            pflichtfächer.add(filter { it.attribute.contains(Fachattribute.Geo) }.count())
            pflichtfächer.add(filter { it.attribute.contains(Fachattribute.Gk) }.count())
            pflichtfächer.add(filter { it.name == "Religionslehre" || it.name == "Ethik" }.count())
            pflichtfächer.add(filter { it.name == "Bildende Kunst" || it.name == "Musik" }.count())
            pflichtfächer.add(filter { it.name == "Sport" }.count())
        }
        var fehlendeFächer = mutableListOf<String>()
        for ((index, pf) in pflichtfächer.withIndex()) {
            if (pf == 0) {
                fehlendeFächer.add(Bereichsnamen[index])
            }
        }
        if (fehlendeFächer.size > 0) {
            println("Folgende Fächer fehlen noch: ${fehlendeFächer.joinToString(separator = ", ")}.")
            fehlerMeldungen.add(
                Kommentar(
                    Kommentarart.SCHLECHT,
                    "Folgende Fächer fehlen noch: ${fehlendeFächer.joinToString(separator = ", ")}."
                )
            )
        }
        return fehlendeFächer.size == 0
    }


    private fun testeMindestens42Kurse(): Boolean {
        var kurssumme = 0
        for (fach in aktuelleBelegung) {
            kurssumme += if (fach.alternativStunden == false) fach.stunden.filter { it != 0 }
                .count() else fach.stundenAlternativ.filter { it != 0 }.count()
        }
        println("Anzahl der gewählten Kurse: $kurssumme")
        if (kurssumme < 42) {
            fehlerMeldungen.add(
                Kommentar(
                    Kommentarart.SCHLECHT,
                    "Anzahl der gewählten Kurse: $kurssumme. Es müssen jedoch mindestens 42 Kurse gewählt werden."
                )
            )
        }
        if (kurssumme >= 42) {
            fehlerMeldungen.add(
                Kommentar(
                    Kommentarart.GUT,
                    "Mit $kurssumme belegten Kursen ist die Bedingung von mindestens 42 belegten Kursen erfüllt."
                )
            )
        }
        return kurssumme >= 42
    }

    private fun testeAnrechnungspflichtigeStunden(): Boolean {
        var mukuSchonGeprüft = false
        var kurssumme = 0
        var nawiSprZähler = 0
        var nawiZähler = 0
        var fsZähler = 0
        var reliZähler=0


        Belegung.anrechnungspflichtig = mutableListOf()

        if (aktuelleBelegung.filter { it.attribute.contains(Fachattribute.MuKu) && it.typ == Kursart.LF }.count() > 0) {
            mukuSchonGeprüft = true
        }
        if (aktuelleBelegung.filter { it.attribute.contains(Fachattribute.MuKu) && it.attribute.contains(Fachattribute.muendlichePruefung) }
                .count() > 0) {
            mukuSchonGeprüft = true
        }

        for (f in aktuelleBelegung) {
            val anzahlKurse = if (f.alternativStunden) f.stundenAlternativ.filter { it != 0 }
                .count() else f.stunden.filter { it != 0 }.count()

            println(
                "Anrechnungübersicht:  Fach: ${f.name}, ${if (f.alternativStunden) f.stundenAlternativ else f.stunden}, ${f.attribute}, $anzahlKurse, Geo oder Gk: ${
                    f.attribute.contains(
                        Fachattribute.Gk
                    ) || f.attribute.contains(Fachattribute.Geo)
                }, Typ: ${f.typ}"
            )


            if (f.typ == Kursart.LF) {
                println("Anrechnung LF:  Fach: ${f.name}, ${if (f.alternativStunden) f.stundenAlternativ else f.stunden}, $anzahlKurse")

                kurssumme += 4
                Belegung.anrechnungspflichtig.add(Anrechnung(f.id, mutableListOf(1, 1, 1, 1)))
                if (f.attribute.contains(Fachattribute.Naturwissenschaft) || f.attribute.contains(Fachattribute.kannNawiErsetzen)) {
                    nawiSprZähler += 1
                    nawiZähler += 1
                }
                if (f.attribute.contains(Fachattribute.Fremdsprache)) {
                    nawiSprZähler += 1
                    fsZähler += 1
                }

            /*} else if (f.attribute.contains(Fachattribute.muendlichePruefung)) {
                kurssumme += 4
                Belegung.anrechnungspflichtig.add(Anrechnung(f.id, mutableListOf(1, 1, 1, 1)))
*/
            } else if (f.typ == Kursart.BF) {
                println(
                    "Anrechnungübersicht BF:  Fach: ${f.name}, ${if (f.alternativStunden) f.stundenAlternativ else f.stunden}, ${f.attribute}, $anzahlKurse, Geo oder Gk: ${
                        f.attribute.contains(
                            Fachattribute.Gk
                        ) || f.attribute.contains(Fachattribute.Geo)
                    }"
                )

                if (f.attribute.contains(Fachattribute.Geschichte)) {
                    println("Anrechnung Geschichte:  Fach: ${f.name}, ${if (f.alternativStunden) f.stundenAlternativ else f.stunden}, $anzahlKurse")

                    kurssumme += 4
                    Belegung.anrechnungspflichtig.add(Anrechnung(f.id, mutableListOf(1, 1, 1, 1)))
                } else if (f.attribute.contains(Fachattribute.ReliEthik)){
                    val leistungsfachEthikReli= aktuelleBelegung.filter { it.attribute.contains(Fachattribute.ReliEthik) &&it.typ==Kursart.LF}
                    if (leistungsfachEthikReli.isEmpty()){ // weder Ethik noch Reli Leistungsfach
                        if (reliZähler==0){
                            kurssumme += 4
                            Belegung.anrechnungspflichtig.add(Anrechnung(f.id, mutableListOf(1, 1, 1, 1)))
                            reliZähler +=1
                        }
                    }
                } else if (f.attribute.contains(Fachattribute.MuKu) && !mukuSchonGeprüft) {
                    kurssumme += 2
                    Belegung.anrechnungspflichtig.add(Anrechnung(f.id, mutableListOf(1, 1, 0, 0)))
                    mukuSchonGeprüft = true
                } else if (f.attribute.contains(Fachattribute.Naturwissenschaft) || f.attribute.contains(Fachattribute.kannNawiErsetzen)) {

                    if (nawiSprZähler < 3 && nawiZähler < 2 && fsZähler < 2) {
                        kurssumme += 4
                        Belegung.anrechnungspflichtig.add(Anrechnung(f.id, mutableListOf(1, 1, 1, 1)))
                        nawiSprZähler += 1
                        nawiZähler += 1
                    }
                } else if (f.attribute.contains(Fachattribute.Fremdsprache)) {
                    if (f.alternativStunden) {
                        kurssumme += 2
                        Belegung.anrechnungspflichtig.add(Anrechnung(f.id, mutableListOf(1, 1, 0, 0)))
                    } else {
                        if (nawiSprZähler < 3 && nawiZähler < 2 && fsZähler < 2) {
                            kurssumme += 4
                            Belegung.anrechnungspflichtig.add(Anrechnung(f.id, mutableListOf(1, 1, 1, 1)))
                            nawiSprZähler += 1
                            fsZähler += 1
                        }
                    }

                } else if (f.attribute.contains(Fachattribute.Gk) || f.attribute.contains(Fachattribute.Geo)) {
                    println("Anrechnung Gk/Geo:  Fach: ${f.name}, ${if (f.alternativStunden) f.stundenAlternativ else f.stunden}, $anzahlKurse")
                    var anrechnungskurse = mutableListOf(0, 0, 0, 0)
                    if (anzahlKurse == 1) {
                        kurssumme += 1
                        anrechnungskurse = mutableListOf(1, 0, 0, 0)
                    } else if (anzahlKurse == 2) {
                        kurssumme += 2
                        anrechnungskurse = mutableListOf(1, 1, 0, 0)
                    } else if (anzahlKurse == 3) {
                        if (f.attribute.contains(Fachattribute.muendlichePruefung)) {
                            kurssumme += 3
                            anrechnungskurse = mutableListOf(1, 0, 1, 1)
                        } else {
                            kurssumme += 1
                            anrechnungskurse = mutableListOf(1, 0, 0, 0)
                        }
                    } else if (anzahlKurse == 4) {
                        if (f.attribute.contains(Fachattribute.muendlichePruefung)) {
                            kurssumme += 4
                            anrechnungskurse = mutableListOf(1, 1, 1, 1)
                        } else {
                            kurssumme += 2
                            anrechnungskurse = mutableListOf(1, 1, 0, 0)
                        }
                    }



                    Belegung.anrechnungspflichtig.add(Anrechnung(f.id, anrechnungskurse))


                } else if (f.attribute.contains(Fachattribute.muendlichePruefung)) { // andere Basisfächer als mündliche Prüfung
                    println("Anrechnung anderes Fach mündliche Prüfung:  Fach: ${f.name}, ${if (f.alternativStunden) f.stundenAlternativ else f.stunden}, $anzahlKurse")

                    kurssumme += 4
                    Belegung.anrechnungspflichtig.add(Anrechnung(f.id, mutableListOf(1, 1, 1, 1)))
                } else {
                    println("Anrechnung Sonstige:  Fach: ${f.name}, ${if (f.alternativStunden) f.stundenAlternativ else f.stunden}, $anzahlKurse")

                }

            } else if (f.attribute.contains(Fachattribute.muendlichePruefung)) { //WF in mündlicher Prüfung
                kurssumme += 4
                Belegung.anrechnungspflichtig.add(Anrechnung(f.id, mutableListOf(1,1,1,1)))
            }
        }

        if (kurssumme == 40) {
            fehlerMeldungen.add(
                Kommentar(
                    Kommentarart.GUT,
                    "Es sind genau 40 anrechnungspflichtige Kurse in der Belegung vorhanden."
                )
            )
        } else if (kurssumme < 40) {
            fehlerMeldungen.add(
                Kommentar(
                    Kommentarart.GUT,
                    "Es sind mit $kurssumme weniger als 40 anrechnungspflichtige Kurse in der Belegung vorhanden. Somit können neben den anrechnungspflichtigen Kursen noch ${40 - kurssumme} Kurse aus der aktuellen Auswahl angerechnet werden."
                )
            )

        } else if (kurssumme > 40) {
            fehlerMeldungen.add(
                Kommentar(
                    Kommentarart.SCHLECHT,
                    "Es sind mit $kurssumme mehr als 40 anrechnungspflichtige Kurse in der Belegung vorhanden."
                )
            )
        }
        Belegung.anrechnungspflichtig.forEach {
            val wert = it
            val fachname = fächer.filter { it.id == wert.id }.first().name
            println("$fachname ${it.stunden}")
        }
        return kurssumme <= 40
    }

    private fun holeWochenStunden(): List<Int> {
        var stundensumme = mutableListOf<Int>(0, 0, 0, 0)
        var zeilenStunden = mutableListOf<Int>()
        for (fach in aktuelleBelegung) {
            zeilenStunden = if (fach.alternativStunden == false) fach.stunden else fach.stundenAlternativ
            for (i in 0..3) {
                stundensumme[i] += zeilenStunden[i]
            }
        }
        return stundensumme.toList()
    }

    private fun testeMindestens32Wochenstunden(): Boolean {
        var stundensumme = 0
        for (fach in aktuelleBelegung) {
            stundensumme += if (fach.alternativStunden == false) fach.stunden.sum() else fach.stundenAlternativ.sum()
        }
        val durchschnitt = stundensumme.toDouble() / 4.0
        println("Durchschnittlich $durchschnitt Wochenstunden pro Halbjahr.")
        fehlerMeldungen.add(
            Kommentar(
                Kommentarart.NEUTRAL,
                "Durchschnittlich $durchschnitt Wochenstunden pro Halbjahr."
            )
        )

        if (durchschnitt < 32) {
            fehlerMeldungen.add(
                Kommentar(
                    Kommentarart.SCHLECHT,
                    "Es müssen im Durchschnitt mindestens 32 Wochenstunden pro Halbjahr sein.\nSomit müssen noch Kurse im Gesamtwochenstundenumfang von mindestens ${(32 - durchschnitt) * 4} Stunden belegt werden."
                )
            )
            println("\nEs müssen im Durchschnitt mindestens 32 Wochenstunden pro Halbjahr sein.")
            println("\nSomit müssen noch Kurse im Gesamtwochenstundenumfang von mindestens ${(32 - durchschnitt) * 4} Stunden belegt werden.")
        }
        return durchschnitt >= 32
    }

    private fun testeLeistungsfächer(): Boolean {
        val leistungsfächer = aktuelleBelegung.filter { it.typ == Kursart.LF }
        var rückgabe = false
        if (leistungsfächer.size < 3) {
            println("Zu wenige Leistungsfächer gewählt!")
            fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT, "Zu wenige Leistungsfächer gewählt."))
        } else if (leistungsfächer.size > 3) {
            println("Zu viele Leistungsfächer gewählt!")
            fehlerMeldungen.add(Kommentar(Kommentarart.SCHLECHT, "Zu viele Leistungsfächer gewählt."))
        } else { // genau drei Leistungsfächer
            val lfAuswahl = leistungsfächer.groupBy { it.attribute }.keys.flatten().toSet()

            if ((leistungsfachBereiche.minus(lfAuswahl).size) <= 2) {
                println("Leistungsfachkombination gültig")
                fehlerMeldungen.add(Kommentar(Kommentarart.GUT, "Leistungsfachkombination gültig."))
                rückgabe = true
            } else {
                println("Leistungsfachkombination ungültig: zwei der drei Leistungsfächer müssen aus D, M, FS, Nawi sein.")
                fehlerMeldungen.add(
                    Kommentar(
                        Kommentarart.SCHLECHT,
                        "Leistungsfachkombination ungültig: zwei der drei Leistungsfächer müssen aus D, M, FS, Nawi sein."
                    )
                )
            }
        }

        return rückgabe
    }

    fun serialisiere(): String {
        var kodierung = ""
        for (f in aktuelleBelegung) {
            var id = f.id.toString(2)
            id = "0".repeat(6 - id.length) + id

            var typ = "00"
            if (f.typ == Kursart.LF) {
                typ = "00"
            } else if (f.typ == Kursart.BF) {
                if (f.attribute.contains(Fachattribute.muendlichePruefung)) {
                    typ = "01"
                } else {
                    typ = "10"
                }
            } else if (f.typ == Kursart.WF && f.attribute.contains(Fachattribute.muendlichePruefung)) {
                typ = "11"
            } else {
                println("Das darf nicht sein!")
            }

            val alternativ = if (f.alternativStunden) "1" else "0"

            kodierung += id + typ + alternativ
        }
        println("Serialisierung: 1" + kodierung)
        return Kodierung.binarystring2Characterstring("1" + kodierung)
    }

    fun deserialisiere(input: String) {
        Belegung.initialisiereFächer()

        while (aktuelleBelegung.size > 0) {
            aktuelleBelegung.removeAt(0)
        }
        Belegung.fächerauswahl = mutableListOf<Belegfach>()

        generiereFächer(Belegung.fächer)

        val kombinationNeu = Kodierung.characterstring2Binarystring(input).drop(1)

        if (!kombinationNeu.trim().equals("")) {
            val kombination = kombinationNeu.cut(9)
            for (k in kombination) {
                println("Kombination: $k")
                val fachnummer = Kodierung.binarystring2Int(k.substring(0..5)).toInt()

                val typ = k.substring(6..7)
                val alternativ = if (k.last().equals('1')) true else false


                println("$fachnummer, $typ, $alternativ")

                val fachname = fächer.filter { it.id == fachnummer }.first().name

                var fachtyp = Kursart.WF


                var mündlich = false
                if (fachnummer < 32) { //BF oder LF
                    if (typ == "00") {
                        fachtyp = Kursart.LF
                        mündlich = false
                    } else if (typ == "10") {
                        fachtyp = Kursart.BF
                        mündlich = false
                    } else if (typ == "01") {
                        fachtyp = Kursart.BF
                        mündlich = true
                    }
                } else { //WF
                    fachtyp = Kursart.WF
                    if (typ == "11") {
                        mündlich = true
                    }
                }
                belegungsObjekt.action(Aktion.NEU, fachname, fachtyp)

                if (mündlich) {
                    belegungsObjekt.action(Aktion.TOGGLEMÜNDLICH, fachname, fachtyp)
                }
                if (alternativ) {
                    belegungsObjekt.action(Aktion.TOGGLESTUNDEN, fachname, fachtyp)
                }
            }
        }
    }

    private fun fachBFoderLF(fachAktuell: Belegfach): String {
        var kodierung = ""
        if (fachAktuell.typ == Kursart.LF) {
            kodierung += "1"

        } else {
            kodierung += "0"
            // mündliche Prüfung: nein (0) oder ja (1)
            if (fachAktuell.attribute.contains(Fachattribute.muendlichePruefung)) {
                kodierung += "1"
            } else {
                kodierung += "0"
            }
        }
        return kodierung
    }

    fun MutableList<Belegfach>.mehrfach(): List<String> {
        val fachMap: MutableMap<String, Int> = mutableMapOf<String, Int>()
        val mehrfach = this.groupBy { it: Belegfach -> it.name }.filterValues { it.size > 1 }.keys.toList()
        println(this.groupBy { it: Belegfach -> it.name })
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
                            fach.attribute.remove(Fachattribute.muendlichePruefung)
                            fach.alternativStunden = false
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
                val fach = aktuelleBelegung.filter { it.name == name && it.typ == typ }.firstOrNull()
                if (fach != null) {
                    fach.alternativStunden = !(fach.alternativStunden)
                    if (fach.alternativStunden && fach.stundenAlternativ.filter { it > 0 }
                            .count() < 3) { // 3 wegen möglicher Kombination mit Wirtschaft
                        fach.attribute.remove(Fachattribute.muendlichePruefung)
                    }
                    if (!fach.alternativStunden && (fach.stunden.filter { it > 0 }.count() < 3)) {
                        fach.attribute.remove(Fachattribute.muendlichePruefung)
                    }
                }
            }

            Aktion.CHECK -> {
                // 2 aus den LF aus Deutsch, Fremdsprache, Mathematik oder klassische Naturwissenschaft
                fehlerMeldungen = mutableListOf()
                Belegung.kurswahlKorrekt = false
                Belegung.anrechnungspflichtig = mutableListOf()
                var fehlerListe = mutableListOf<Boolean>()
                fehlerListe.add(testeMehrfach())
                fehlerListe.add(testeLeistungsfächer())
                fehlerListe.add(testeBereichsabdeckungPrüfung())
                fehlerListe.add(testeSprachenOderNaturwissenschaft())
                fehlerListe.add(testePflichtbelegungRest())
                fehlerListe.add(testeMindestens42Kurse())
                if (fehlerListe.filter { it == false }.count() == 0) {
                    fehlerListe.add(testeAnrechnungspflichtigeStunden())
                    if (fehlerListe.filter { it == false }.count() == 0) {
                        Belegung.kurswahlKorrekt = true
                    }
                }

            }

            Aktion.TOGGLEMÜNDLICH -> {
                val name = parameter[0] as String // Name des Fachs
                val typ = parameter[1] as Kursart // LF, BF oder WF?
                val anzahlPrüfungsfächer =
                    aktuelleBelegung.filter { it.attribute.contains(Fachattribute.muendlichePruefung) }.count()
                val schriftlichIndex = aktuelleBelegung.indexOfFirst { it.name == name && it.typ == typ }
                if (schriftlichIndex >= 0) {
                    with(aktuelleBelegung[schriftlichIndex].attribute) {
                        if (contains(Fachattribute.muendlichePruefung)) {
                            remove(Fachattribute.muendlichePruefung)
                        } else {
                            if (anzahlPrüfungsfächer < 2) {
                                add(Fachattribute.muendlichePruefung)
                            } else {
                                fehlerMeldungen.add(
                                    Kommentar(
                                        Kommentarart.SCHLECHT,
                                        "Maximal drei mündliche Prüfungsfächer erlaubt."
                                    )
                                )
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
                            fach.attribute.remove(Fachattribute.muendlichePruefung)

                            removeAll { it.name == name }

                            if (fach.name == "Wirtschaft" && fach.typ == Kursart.LF) {

                                val gege = fächerauswahl.filter {
                                    it.attribute.contains(Fachattribute.Geo) || it.attribute.contains(Fachattribute.Gk)
                                }
                                gege.forEach {
                                    it.stundenAlternativ = mutableListOf(2, 2, 2, 2)
                                    it.stunden = mutableListOf(2, 2, 0, 0)

                                }


                            }
                            fach.alternativStunden = false

                        } else if (map { it.name }.contains(name)) {
                            fächerauswahl.filter { it.name == name }.forEach {
                                it.attribute.remove(Fachattribute.muendlichePruefung)
                            }
                            removeAll { it.name == name }
                            fach.alternativStunden = false
                            add(fach)
                        } else {
                            add(fach)
                            fach.alternativStunden = false

                            if (fach.name == "Wirtschaft" && fach.typ == Kursart.LF) {
                                fächerauswahl.filter {
                                    it.attribute.contains(Fachattribute.Geo) || it.attribute.contains(
                                        Fachattribute.Gk
                                    )
                                }.forEach {
                                    it.stundenAlternativ = mutableListOf(2, 0, 2, 2)
                                    it.stunden = mutableListOf(2, 0, 0, 0)
                                }
                            }
                            println()
                        }
                    }
                }
            }
        }
    }


    companion object {

        fun initialisiereFächer() {
            val fächer: MutableList<Fach> = mutableListOf()
            fächer.add(Fach("Deutsch", Aufgabenfeld.I, listOf(5, 3, 0), listOf(Fachattribute.Deutsch), 0, true))
            fächer.add(Fach("Englisch", Aufgabenfeld.I, listOf(5, 3, 0), listOf(Fachattribute.Fremdsprache), 1, true))
            fächer.add(
                Fach(
                    "Französisch",
                    Aufgabenfeld.I,
                    listOf(5, 3, 0),
                    listOf(Fachattribute.Fremdsprache),
                    2,
                    false
                )
            )
            fächer.add(Fach("Latein", Aufgabenfeld.I, listOf(5, 3, 0), listOf(Fachattribute.Fremdsprache), 3, false))
            fächer.add(
                Fach(
                    "Griechisch",
                    Aufgabenfeld.I,
                    listOf(5, 3, 0),
                    listOf(Fachattribute.Fremdsprache),
                    4,
                    false
                )
            )
            fächer.add(
                Fach(
                    "Hebräisch",
                    Aufgabenfeld.I,
                    listOf(5, 3, 0),
                    listOf(Fachattribute.Fremdsprache),
                    16,
                    false
                )
            )
            fächer.add(Fach("Russisch", Aufgabenfeld.I, listOf(5, 3, 0), listOf(Fachattribute.Fremdsprache), 5, false))
            fächer.add(Fach("Spanisch", Aufgabenfeld.I, listOf(5, 3, 0), listOf(Fachattribute.Fremdsprache), 6, false))
            fächer.add(
                Fach(
                    "Italienisch",
                    Aufgabenfeld.I,
                    listOf(5, 3, 0),
                    listOf(Fachattribute.Fremdsprache),
                    7,
                    false
                )
            )
            fächer.add(
                Fach(
                    "Portugiesisch",
                    Aufgabenfeld.I,
                    listOf(5, 3, 0),
                    listOf(Fachattribute.Fremdsprache),
                    8,
                    false
                )
            )
            fächer.add(
                Fach(
                    "Chinesisch",
                    Aufgabenfeld.I,
                    listOf(5, 3, 0),
                    listOf(Fachattribute.Fremdsprache),
                    9,
                    false
                )
            )
            fächer.add(Fach("Bildende Kunst", Aufgabenfeld.I, listOf(5, 2, 0), listOf(Fachattribute.MuKu), 10, true))
            fächer.add(Fach("Musik", Aufgabenfeld.I, listOf(5, 2, 0), listOf(Fachattribute.MuKu), 11, true))
            fächer.add(Fach("Geschichte", Aufgabenfeld.II, listOf(5, 2, 0), listOf(Fachattribute.Geschichte), 12, true))
            fächer.add(Fach("Geographie", Aufgabenfeld.II, listOf(5, 2, 0), listOf(Fachattribute.Geo), 13, true))
            fächer.add(Fach("Gemeinschaftskunde", Aufgabenfeld.II, listOf(5, 2, 0), listOf(Fachattribute.Gk), 14, true))
            //fächer.add(Fach("Geo/Gk", Aufgabenfeld.II, listOf(0, 2, 0), listOf(Fachattribute.GeGe), 15,true))
            fächer.add(Fach("Religionslehre", Aufgabenfeld.II, listOf(5, 2, 0), listOf(Fachattribute.ReliEthik), 17, true))
            fächer.add(Fach("Ethik", Aufgabenfeld.II, listOf(5, 2, 0), listOf(Fachattribute.ReliEthik), 18, true))
            fächer.add(Fach("Wirtschaft", Aufgabenfeld.II, listOf(5, 0, 0), listOf(), 19, false))
            fächer.add(
                Fach(
                    "Mathematik",
                    Aufgabenfeld.III,
                    listOf(5, 3, 0),
                    listOf(Fachattribute.Mathematik),
                    20,
                    true
                )
            )
            fächer.add(
                Fach(
                    "Biologie",
                    Aufgabenfeld.III,
                    listOf(5, 3, 0),
                    listOf(Fachattribute.Naturwissenschaft),
                    21,
                    true
                )
            )
            fächer.add(
                Fach(
                    "Chemie",
                    Aufgabenfeld.III,
                    listOf(5, 3, 0),
                    listOf(Fachattribute.Naturwissenschaft),
                    22,
                    true
                )
            )
            fächer.add(
                Fach(
                    "Physik",
                    Aufgabenfeld.III,
                    listOf(5, 3, 0),
                    listOf(Fachattribute.Naturwissenschaft),
                    23,
                    true
                )
            )
            fächer.add(
                Fach(
                    "Schulversuch Informatik",
                    Aufgabenfeld.III,
                    listOf(5, 3, 0),
                    listOf(Fachattribute.kannNawiErsetzen),
                    24,
                    false
                )
            )
            fächer.add(
                Fach(
                    "Schulversuch NwT",
                    Aufgabenfeld.III,
                    listOf(5, 3, 0),
                    listOf(Fachattribute.kannNawiErsetzen),
                    25,
                    false
                )
            )
            fächer.add(Fach("Sport", Aufgabenfeld.Sport, listOf(5, 2, 0), listOf(Fachattribute.Sport), 26, true))
            fächer.add(
                Fach(
                    "Literatur und Theater",
                    Aufgabenfeld.I,
                    listOf(0, 0, 2),
                    listOf(Fachattribute.Orchidee),
                    32,
                    false
                )
            )
            fächer.add(
                Fach(
                    "VK Mathematik",
                    Aufgabenfeld.III,
                    listOf(0, 0, 2),
                    listOf(Fachattribute.Orchidee),
                    33,
                    false
                )
            )
            fächer.add(Fach("VK Sprache", Aufgabenfeld.I, listOf(0, 0, 2), listOf(Fachattribute.Orchidee), 34, false))
            fächer.add(
                Fach(
                    "Wahlfach Informatik",
                    Aufgabenfeld.III,
                    listOf(0, 0, 2),
                    listOf(Fachattribute.Orchidee),
                    35,
                    false
                )
            )
            fächer.add(Fach("Literatur", Aufgabenfeld.I, listOf(0, 0, 2), listOf(Fachattribute.Orchidee), 36, false))
            fächer.add(Fach("Philosophie", Aufgabenfeld.II, listOf(0, 0, 2), listOf(Fachattribute.Orchidee), 37, false))
            fächer.add(Fach("Psychologie", Aufgabenfeld.II, listOf(0, 0, 2), listOf(Fachattribute.Orchidee), 38, false))
            fächer.add(Fach("Astronomie", Aufgabenfeld.III, listOf(0, 0, 2), listOf(Fachattribute.Orchidee), 39, false))
            fächer.add(
                Fach(
                    "Problemlösen mit CAS",
                    Aufgabenfeld.III,
                    listOf(0, 0, 2),
                    listOf(Fachattribute.Orchidee),
                    40,
                    false
                )
            )
            fächer.add(
                Fach(
                    "Darstellende Geometrie",
                    Aufgabenfeld.III,
                    listOf(0, 0, 2),
                    listOf(Fachattribute.Orchidee),
                    41,
                    false
                )
            )
            fächer.add(Fach("Geologie", Aufgabenfeld.III, listOf(0, 0, 2), listOf(Fachattribute.Orchidee), 42, false))
            fächer.add(
                Fach(
                    "Seminarfach I",
                    Aufgabenfeld.I,
                    listOf(0, 3, 0),
                    listOf(Fachattribute.Seminarfach),
                    27,
                    false
                )
            )
            fächer.add(
                Fach(
                    "Seminarfach II",
                    Aufgabenfeld.II,
                    listOf(0, 3, 0),
                    listOf(Fachattribute.Seminarfach),
                    28,
                    false
                )
            )
            fächer.add(
                Fach(
                    "Seminarfach III",
                    Aufgabenfeld.III,
                    listOf(0, 3, 0),
                    listOf(Fachattribute.Seminarfach),
                    29,
                    false
                )
            )

            Belegung.fächer = fächer
            generiereFächer(fächer)

        }

        var kurswahlKorrekt = false

        data class Anrechnung(val id: Int, val stunden: List<Int>)

        var anrechnungspflichtig = mutableListOf<Anrechnung>()

        fun holeKurswahlKorrekt(): Boolean {
            return kurswahlKorrekt
        }

        fun holeFächer(): List<Fach> {
            return fächer
        }

        lateinit var belegungsObjekt: Belegung
        var aktuelleBelegung = mutableListOf<Belegfach>()
        var fächer = listOf<Fach>()

        val binär2 = listOf<String>("00", "01", "10", "11")
        val binär3 = listOf<String>("000", "001", "010", "011", "100", "101", "110", "111")
        val naturwissenschaften = listOf<String>("Physik", "Chemie", "Biologie")
        val sprachen = listOf<String>(
            "Englisch",
            "Französisch",
            "Latein",
            "Griechisch",
            "Russisch",
            "Spanisch",
            "Italienisch",
            "Portugiesisch",
            "Chinesisch",
            "Hebräisch"
        )

        val spätbeginnend = listOf<String>(
            "Französisch",
            "Spanisch",
            "Latein",
            "Hebräisch",
            "Griechisch"

        )


        val lfOderBfOderBfMündlich = hashMapOf<String, String>("LF" to "10", "BF" to "01", "BFmündlich" to "11")
        var fehlerMeldungen = mutableListOf<Kommentar>()
        val Text = hashMapOf<Any, String>(
            Kursart.BF to "Basisfach",
            Aufgabenfeld.I to "Sprachlich",
            Aufgabenfeld.II to "Gesellschaftswissenschaften",
            Aufgabenfeld.III to "Mathematik und Naturwissenschaften"
        )

        enum class Kursart { LF, BF, WF }

        fun getBelegungsobjekt(): Belegung {
            return belegungsObjekt
        }

        val leistungsfachBereiche = setOf(
            Fachattribute.Mathematik,
            Fachattribute.Fremdsprache,
            Fachattribute.Naturwissenschaft,
            Fachattribute.Deutsch
        )

        val wfZweiKursig = setOf(
            "Astronomie",
            "Darstellende Geometrie",
            "Problemlösen mit CAS",
            "Geologie",
            "Literatur",
            "Philosophie",
            "Psychologie"
        )

        enum class Aktion { NEU, LÖSCHE, TOGGLE, CHECK, TOGGLEMÜNDLICH, TOGGLESTUNDEN }
        data class Belegfach(
            val name: String,
            val typ: Kursart,
            var aufgabenfeld: Aufgabenfeld,
            var stunden: MutableList<Int>,
            var stundenAlternativ: MutableList<Int>,
            var alternativStunden: Boolean,
            var attribute: MutableList<Fachattribute>,
            val id: Int,
            val mündlichMöglich: Boolean
        )

        lateinit var fächerauswahl: List<Belegfach>

        fun generiereFächer(listeMitFächern: List<Fach>) {
            val liste = mutableListOf<Belegfach>()

            for (fach in listeMitFächern) {
                for (index in 0 until fach.stunden.size) {
                    var mündlichMöglich = false
                    var stundenbelegung = mutableListOf<Int>()
                    var stundenbelegungAlternativ = mutableListOf<Int>()
                    if (fach.stunden.get(index) > 0) {
                        for (i in 0..3) {
                            stundenbelegung.add(fach.stunden.get(index))
                        }

                        val art = when (index) {
                            0 -> Kursart.LF
                            1 -> Kursart.BF
                            else -> Kursart.WF
                        }

                        if (spätbeginnend.contains(fach.name) && art == Kursart.BF) {
                            stundenbelegungAlternativ = mutableListOf<Int>(4, 4, 4, 4) // spätbeginnende Fremdsprache
                            val attr2 = fach.attribute.toMutableList()
                            if (!attr2.contains(Fachattribute.spaetbeginnend)) {
                                attr2.add(Fachattribute.spaetbeginnend)
                            }
                            fach.attribute = attr2.toList()
                        }
                        if (fach.attribute.contains(Fachattribute.GeGe)) {
                            stundenbelegungAlternativ = mutableListOf<Int>(2, 0, 2, 0) // falls Geschichte LF
                        }
                        if ((fach.attribute.contains(Fachattribute.Geo) || fach.attribute.contains(Fachattribute.Gk)) && art == Kursart.BF) {
                            stundenbelegung = mutableListOf<Int>(2, 2, 0, 0)
                            stundenbelegungAlternativ = mutableListOf<Int>(2, 2, 2, 2)
                        }
                        if (fach.attribute.contains(Fachattribute.Seminarfach)) {
                            stundenbelegung = mutableListOf(3, 3, 0, 0)
                        }

                        if (art == Kursart.WF) {

                            if (setOf(
                                    "VK Mathematik",
                                    "Wahlfach Informatik",
                                    "VK Sprache",
                                    "Literatur und Theater"
                                ).contains(fach.name)
                            ) {
                                mündlichMöglich = true
                                stundenbelegungAlternativ = mutableListOf<Int>(2, 2, 0, 0)
                            }
                            if (wfZweiKursig.contains(fach.name)) {
                                stundenbelegung = mutableListOf(2, 2, 0, 0)
                                stundenbelegungAlternativ = mutableListOf<Int>()
                            }
                        }

                        liste.add(
                            Belegfach(
                                fach.name,
                                art,
                                fach.aufgabenfeld,
                                stundenbelegung,
                                stundenbelegungAlternativ,
                                false,
                                fach.attribute.toMutableList(),
                                fach.id,
                                mündlichMöglich
                            )
                        )
                    }
                }
            }
            liste.forEachIndexed { index, belegfach -> println("$index, $belegfach") }
            fächerauswahl = liste.toList()
        }
    }
}


enum class Aufgabenfeld { I, II, III, Sport, Seminarfach }

enum class Fachattribute { Naturwissenschaft, NawiFe, Deutsch, Fremdsprache, Mathematik, kannNawiErsetzen, Seminarfach, GeGe, Geschichte, MuKu, muendlichePruefung, spaetbeginnend, Orchidee, Geo, Gk, ReliEthik, Sport }


val anrechnungspflichtigeKurse = listOf<Fachattribute>(
    Fachattribute.NawiFe,
    Fachattribute.Mathematik,
    Fachattribute.Deutsch,
    Fachattribute.Geschichte,
    //Fachattribute.GeGe,
    Fachattribute.MuKu,
    Fachattribute.Geo,
    Fachattribute.Gk
)

data class Fach(
    val name: String,
    val aufgabenfeld: Aufgabenfeld,
    val stunden: List<Int>,
    var attribute: List<Fachattribute>,
    val id: Int,
    val pflicht: Boolean
)








