// var person = {
//     firstName: 'Uma',
//     lastName: 'Mahesh',
//     city: 'Bengaluru'
// }

// person.age =39 // Create
// person.firstName = 'Umesh' // Update
// delete person.city // Delete
// console.log(person) // Read


/**
  * ? Object.preventExtensions
  * ? We can update and delete but can't add
  * 
 */

 var preventObject = {
     name: 'Uma',
     city: 'Bengaluru',
     age: 39
}

Object.preventExtensions(preventObject)
 
preventObject.email = 'uma@uma.com' // CREATE
preventObject.name ='mahesh' // UPDATE
delete preventObject.age; // DELETE

console.log(preventObject)

/**
  * ? Object.seal
  * ? We can only update but can't add and delete
 */

 var sealObject = {
    name: 'Uma',
    city: 'Bengaluru',
    age: 39
}

Object.seal(sealObject)

sealObject.email = 'uma@uma.com' // CREATE
sealObject.name ='mahesh' // UPDATE
delete sealObject.age; // DELETE
console.log(sealObject)

/**
  * ? Object.freeze
  * ? We can only update but can't add and delete
 */

 var freezeObject = {
    name: 'Uma',
    city: 'Bengaluru',
    age: 39
}

Object.freeze(freezeObject)

freezeObject.email = 'uma@uma.com' // CREATE
freezeObject.name ='mahesh' // UPDATE
delete freezeObject.age; // DELETE
console.log(freezeObject)