function sayHello(param1){


}

var test = function (){
    return "this is test function"
}


sayHello(test)

var a = [1,2,3]

a.forEach(
    function callback(value, index){
        console.log(value, index)
    }
)

