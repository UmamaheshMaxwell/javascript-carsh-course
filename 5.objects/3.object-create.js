var person1 = new Object()
var person2 = {}
var person = Object.create(null)

// console.log(person1)
// console.log(person2)
console.log(person)
person["firstName"] ="Scott"
person["lastName"] ="Desatnick"

person.getData = function(){

}

var cityName="city"
person[cityName] ="Hyderabad"

console.log(person["FIRSTNAME"])
console.log(person['firstName'])

console.log(person.firstName)

person.age = 44

console.log(person["age"])

person.address = {}

person.address.street = "1st main"
person.address.state = "New York"


console.log(person.address.street)
console.log(person.address.state)

console.log(person.firstName + ' ' + person.lastName)
console.log(person)