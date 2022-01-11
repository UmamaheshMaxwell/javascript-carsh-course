function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.getfullName = function(){
    return this.firstName + ' ' + this.lastName
}

function Student(age){
    this.age = age
}

// Inhertit the properties from supertype

Student.prototype = new Person('Scott', 'Deastnick')

Student.prototype.getAge = function(){
    return this.age
}

var student = new Student(44);
console.log(student.firstName)
console.log(student.lastName)
console.log(student.age)
console.log(student.getfullName())
console.log(student.getAge())

