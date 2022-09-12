function range(start, end, steps = 1){
    if(start < end && steps < 0) {
        [start, end] = [end, start]
    }

    let rangoDeNumeros = []
    if (steps > 0) {
        for (let i = start; i < end + 1; i+=steps) {
            rangoDeNumeros.push(i)
        } 
    } else {
        for (var i = start; i >= end; i += steps)
        rangoDeNumeros.push(i);
    }
    
    return rangoDeNumeros
}

console.log(range(10, 1, -1))