var person1 = {firstName: 'Uma', lastName: 'Mahesh'}
var person2 = {firstName: 'Swathi', lastName: 'Mahesh'}


// this.firstName = 'Scott'
// this.lastName ='Desatnick'
function getName(message, city){
    // console.log(this)
    // console.log(message, typeof message)
    // console.log(city, typeof city)
    return message + ' ' + city + ' ' + this.firstName + ' ' + this.lastName
}

// console.log(getName("Welcome to", "Hyderabad"))

 var getFullName = getName.bind(person1)
 console.log(getFullName("Welcome to", "Hyderabad"))

 var getFullNameUsingCallMethod = getName.call(person2, "Welcome to", "Benguluru")
 console.log(getFullNameUsingCallMethod)

 var getFullNameUsingApplyMethod = getName.apply(person2, ["Welcome to", "Pune"])
 console.log(getFullNameUsingApplyMethod)