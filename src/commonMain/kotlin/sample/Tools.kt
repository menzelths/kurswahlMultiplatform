package sample

/**
 * Wandelt einen String, der nur aus 0 und 1 besteht in eine Liste von Strings um, wobei die einzelnen Elemente die Länge number haben
 */
fun String.cut(number:Int):List<String>{
    val länge=this.length
    var eingabeString="0".repeat((number-länge%number))+this // auf Länge durch number teilbar normieren
    var _liste= mutableListOf<String>()

    for (i in 0..länge/number){
        _liste.add(eingabeString.substring(0..number-1))
        eingabeString=eingabeString.removeRange(0..number-1)
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
        val werte=input.cut(6)
        // jetzt Buchstaben zuweisen
        var ergebnis=""
        for (w in werte){
            ergebnis+=bs[binarystring2Int(w)]
        }
        return ergebnis
    }

    /**
     * Wandelt einen String aus Buchstaben in eine Abfolge von 0 und 1 um, Gegenstück zu binarystring2Characterstring
     */
    fun characterstring2Binarystring(input:String):String{
        var ergebnis=""
        input.toList().forEach {
            val wert=bs.indexOf(it).toString(2)
            ergebnis+="0".repeat((6-(wert.length)))+wert

        }
        return ergebnis.dropWhile { it.equals('0') }
    }
}