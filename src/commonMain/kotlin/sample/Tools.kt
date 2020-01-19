package sample

/**
 * Wandelt einen String, der nur aus 0 und 1 besteht in eine Liste von Strings um, wobei die einzelnen Elemente die Länge number haben
 */
fun String.cut(number:Int):List<String>{
    val länge=this.length
    var eingabeString=if (länge%number==0) this else "0".repeat((number-länge%number))+this // auf Länge durch number teilbar normieren
    var _liste= mutableListOf<String>()

    for (i in 0..länge/number){
        if (eingabeString!="") {
            _liste.add(eingabeString.substring(0..number - 1))
            eingabeString = eingabeString.removeRange(0..number - 1)
        }
    }
    return _liste
}

object Kodierung {

     fun binarystring2Int(bs:String):Int{
        var zahl=0
        var dummy=bs
        var multiplikator=1
        while (dummy.length>0){

            zahl+=multiplikator*(if (dummy.last().equals('1')) 1 else 0)

            dummy=dummy.dropLast(1)
            multiplikator*=2
        }
        return zahl
    }

    private val bs="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz_-+;".toList()

    /**
     * Wandelt einen String, der nur aus 0 und 1 besteht in eine Abfolge von Buchstaben um (ähnlich Base64)
     */
    fun binarystring2Characterstring(input:String):String{
        var ergebnis = ""
        if (input.length>0) {
            val werte = (input).cut(6)
            // jetzt Buchstaben zuweisen

            for (w in werte) {
                ergebnis += bs[binarystring2Int(w)]
            }
        }
        println("LOG: binarystring2Characterstring: $ergebnis")
        return ergebnis
    }

    /**
     * Wandelt einen String aus Buchstaben in eine Abfolge von 0 und 1 um, Gegenstück zu binarystring2Characterstring
     */
    fun characterstring2Binarystring(input:String):String{
        var ergebnis=""
        if (input.length>0) {
            input.toList().forEach {
                val wert = bs.indexOf(it).toString(2)
                ergebnis += "0".repeat((6 - (wert.length))) + wert

            }
        }
        var test=ergebnis.dropWhile { it.equals('0') }
        //return if (test.dropWhile { it.equals('0') }.equals("")) "0" else ergebnis.dropWhile { it.equals('0') }
        println("LOG: characterString2Binarystring: $test")

        return ergebnis.dropWhile { it.equals('0') }
    }
}