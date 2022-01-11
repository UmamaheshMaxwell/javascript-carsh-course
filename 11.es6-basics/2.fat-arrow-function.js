let add = function(x,y){
    return x + y
}

console.log(add(10,20))

let sum = (x,y) => {
    return x + y
}

console.log(sum(10,20))

/**
 * ? () => expression
 * ? () => {return expression}
 * * Both are equal
 */

let addition = (x,y) =>  x + y
console.log(addition(10,20))

let additional = (x,y) =>  { return x + y}
console.log(additional(10,20))

let calculate = (x, y) =>{
    let a =10;
    let b =20;
    let c = 10 + 20 + x + y
    return c
}

console.log(calculate(10,20))

//Sort an array

let numbers1 = [4,2,6]
    numbers1.sort(function(a,b){
        return b-a
    })
console.log(numbers1)

let numbers2 = [4,2,6]
    numbers2.sort(function(a,b){
        return a-b
    })
console.log(numbers2)

let numbers3 = [2,4,0]
    numbers3.sort(function(a,b){
        return a-b
    })
console.log(numbers3)

let numbers4 = [3,7,4,9]
numbers4.sort((a,b)=> b-a)
console.log(numbers4)

let names = ['John', 'Scott', 'Adam', 'Tuan', 'Uma']

let lengths = names.map(name => name.length)

console.log(lengths)

let logDocument = () => console.log(window.document)
logDocument()

// Line Break

// let multiply = (x,y) 
// => x*y

let multiply = (x,y) => 
x*y

console.log(multiply(10,20))

// let setColor = function(color) {
//     return {value: color}
// }


// let backgroundColor = setColor('Green')
// console.log(backgroundColor)

let setColor = (color) => ({value: 'color'})


let backgroundColor = setColor('Green')
console.log(backgroundColor)