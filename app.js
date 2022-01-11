// console.log('Hello')
// var a =10
// console.log(this)
// console.log(window)

// console.log('First')
// setTimeout(function(){
//     console.log('Second')
// }, 3000)
// console.log('Third')

// console.log(10 >9) // expressions are valid
// //console.log(var foo =10>9) // statements are invalid

/**
 * ? JS Questions
 */

// == vs ===

console.log(1==1) // true
console.log(1 =='1') // true - will only check value
console.log(1 ==='1') // false // will check both value and type
console.log(1 === 1) // true

console.log(multiply(2)(3)(4))// 24

function multiply(a){
  return function(b){
     return  function(c){
            return a * b *c
        }
    }
}

var a =10;
var b =a;
    a= 20;

console.log(a) // 20
console.log(b) // 10


var x = [1,2]
var y =x;
x.push(3)
console.log(x)
console.log(y)

var val1 = [1,2,3]
var val2 = val1
val1 = [1,2,3,4]
console.log(val1)
console.log(val2)

var numbers =[1,2,3]
numbers.push(4)
numbers.push(5)
numbers.push(6)

numbers.unshift(0)
numbers.unshift(-1)
numbers.unshift(-2)

numbers.pop()
numbers.pop()
numbers.pop()

numbers.shift()
numbers.shift()
numbers.shift()
console.log(numbers)

// var name = 1 + "Uma" + 2
// console.log(name)

var name1 = 1+2 + "Uma" + 3+4
console.log(name1)

function sample(){
    console.log(this)
     var firstName = "uma"
}

sample()

//console.log(firstName)

function sayHello(){
    var message = "How are you ?"

    if(1==1){
        console.log(message)
        var wish ="Good Luck"
    }

    console.log(wish)
}

sayHello()