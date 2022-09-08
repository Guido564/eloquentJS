function isEven(numero) {
    if (numero < 0) {
        -numero
    }

    if (numero == 0) {
        return true
    } else if (numero == 1) {
        return false
    } else {
        return isEven(numero - 2)
    }
}