function countBs(palabra) {
    let bs = ''
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === 'B') {
            bs += palabra[i]
        }
    }
    console.log(bs.length)
}

countBs("Buenas noches caBallero, Bob va cenar esta noche. Bonitas Batatas con Boga")