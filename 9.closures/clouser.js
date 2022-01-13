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

function parent(name, city) {
    var a =10;
    var b = 20

 return  function(){
        return a + b + name + city
    }
}

console.log(parent('uma', 'hyd')())