function range(start, end){
    let rangoDeNumeros = []
    for (let i = start; i < end + 1; i++) {
        rangoDeNumeros.push(i)
    }
    return rangoDeNumeros
}

console.log(range(1, 2))

function sum(arr) {
    let total = 0
    for (i of arr){
        total = total + i
    }
    return total
}

console.log(sum(range(1, 10)))