function reverseArray(arr){
    let arrReves = []
    for (i in arr){
        arrReves.unshift(arr[i])
    }
    return arrReves
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

function reverseArrayInPlace(arr) {
    for(let i of [...arr]) {
        arr.unshift(i) 
        arr.pop()
    }
    return arr
}

console.log(reverseArrayInPlace([20, 21, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))