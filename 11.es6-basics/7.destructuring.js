// Array Destructuring 

let arr =["Scott", "Adam", "Tuan"]

let [name1, name2, name3] = arr

console.log(name1)
console.log(name2)
console.log(name3)

let names =["Scott", "Adam", "Tuan"]

let [value1, ,value3] = names

console.log(value1)
console.log(value3)

// Split
let [firstName, lastName] ="John Galt".split(' ')
console.log(firstName)
console.log(lastName)

let [fName, , title] =["Uma", "Mahesh", "Meka"]

console.log(title)

// Object Destructuring

let user = { 
    name: 'Uma',
    age: 39
}

let {name, age} = user
console.log(name)
console.log(age)