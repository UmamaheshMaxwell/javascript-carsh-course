var person = new Object()

person["firstName"] ="Scott"
person["lastName"] ="Desatnick"

var cityName="city"
person[cityName] ="Hyderabad"

console.log(person["FIRSTNAME"])
console.log(person['firstName'])

console.log(person.firstName)

person.age = 44

console.log(person["age"])

person.address = new Object()

person.address.street = "1st main"
person.address.state = "New York"


console.log(person.address.street)
console.log(person.address.state)

console.log(person.firstName + ' ' + person.lastName)

