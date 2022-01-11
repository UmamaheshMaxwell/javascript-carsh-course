class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getName(){
        return this.firstName + ' ' + this.lastName
    }
}

class Student extends Person {
    constructor(grade){
        super(grade)
      this.grade = grade
    }

    getGrade(){
        return this.grade
    }
}

let person = new Person('Scott', 'Desatnick')

let student = new Student('A+')
student.firstName = 'Adam'
student.lastName ='Colson'
console.log(person)
console.log(student.getName())
console.log(student.getGrade())
