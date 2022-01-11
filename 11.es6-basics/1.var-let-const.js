function sample(){
    var foo ="Blue"
    console.log(foo) //Blue
}
sample()
//console.log(foo) // Foo is not defined

function sayHello(){
    var message = "How are you ?"

    if(1==1){
        console.log(message)
        var wish ="Good Luck"
    }

    console.log(wish)
}

sayHello()


function checkData(){
    if(true) {
        var foo ="Hello"
        let bar ="How are you ?"
        const baz = "i am fine ?"
    
        console.log(foo)
        console.log(bar)
        console.log(baz)
    }

    console.log(foo)
    //console.log(bar) // ReferenceError: bar is not defined
    //console.log(baz) // ReferenceError: baz is not defined
}

checkData()

for(var i=0; i<3; i++){
    console.log(i)
}

console.log('outside i value :',i)

for(let i=0; i<3; i++){
    console.log(i)
}

console.log('outside i value :',i)

function validate(){
    let foo = 1;
        foo =10;
    
    const bar = 100

    bar =200
    
   // let foo =101;
    console.log(foo)
    console.log(bar)
}

validate()

const myBoolean = true

if(myBoolean) {
    const triology = ["Scott", "Adam", "Tuan"]

    triology.push('Uma')

    console.log(triology)
}

const WEPAPI_URL = "https://jsonplaceholder.typicode.com/photos"
const DB_NAME ="StudentDB"

const obj = {mesage: 'Hi'}
obj.mesage ='bye'
console.log(obj)