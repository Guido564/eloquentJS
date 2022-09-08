function tablero(alto, ancho){
    let n = 1;
    let numerales = ' # # # #'
    let numerales2 = '# # # # '

    while (n < alto) {
        console.log(numerales.repeat(ancho))
        console.log(numerales2.repeat(ancho))
        n++
    }
}

tablero(4, 4)