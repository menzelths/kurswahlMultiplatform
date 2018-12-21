package sample

actual class Sample {
    actual fun checkMe() = 42
}

actual object Platform {
    actual val name: String = "JVM"
}

actual object Variablen {
    actual var excludedList= mutableListOf<Int>()
}