function countChar(oracion, letra) {
    let encontrado = ''
    for (let i = 0; i < oracion.length; i++) {
        if (oracion[i] === letra) {
            encontrado += oracion[i]
        }
    }
    console.log(encontrado.length)
}

countChar('Hoy nos encontramos aqui para festejar el decimo tercer aniversario de el monte la recopicha', 'i')
