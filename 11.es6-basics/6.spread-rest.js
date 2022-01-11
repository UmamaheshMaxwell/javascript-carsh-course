/**
 * ? ...(spread) - operator unpacks elements of the array
 * ? ...(rest) - operator packs elements into an array
 */
const odd = [1,3,5]

const combined = [2,4,6, ...odd]

console.log(combined)

function display(a,b, ...args){
    console.log(args)
}

display(1,2,3,4,5,6)

// Constructing array literal

let initialCharacters = ['A', 'B']
let chars = [...initialCharacters, 'C', 'D']
console.log(chars)

// Concatenating arrays

let numbers1 = [1,2]
let numbers2 = [3,4]
let allNumbers =[...numbers1, ...numbers2]
console.log(allNumbers)

// Copy an array

let scores = [80,70,90]
let copiedScores =[...scores]
console.log(copiedScores)

// Spread operator and string

let stringChars = ['A', ...'BC','D']

console.log(stringChars)

