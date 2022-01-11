function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function(){
    //     return this.firstName + ' ' + this.lastName
    // }
}

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

//Person.prototype.City ="Bangalore"


var person1 = new Person("Scott", "Desatnick")
var person2 = new Person("Adam", "Colson")
var person3 = new Person("Tuan", "Bui")

console.log(person1)
console.log(person2)
console.log(person3)