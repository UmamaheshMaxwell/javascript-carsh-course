//1. can be Invoked inside another function
//2. assign to a variable
//3. passed as a parameter to another variable

function sample(varible){
   return varible
}

var test = function (){
    return "this is test function"
}

console.log(sample(test))
console.log(sample("uma"))

