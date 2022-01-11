function greet(message){
    return function(name){
        return message + ' ' + name
    }
}

var sayHello = greet('Welcome')
console.log(sayHello)

var wishMe = sayHello('Uma')
console.log(wishMe)

console.log(greet('Welcome')('Uma'))