console.log(this)

function a(){
    console.log(this)
}

a()

var b = function(){
    console.log(this)
}

b()

function sample(){
    console.log(this)
    this.newVariable ="Hello"
}

sample()

console.log(newVariable)

var obj = {
    firstName: 'Uma', // Property
    log: function(){  // Method
        console.log(this)
    }
}

obj.log()


var object1 = {
    firstName: 'Uma', 
    log: function(){  
        console.log(this)
        this.firstName = "Mahesh"
        console.log(this)
        
        var setName = function(){
            this.firstName = "Umesh"
            console.log(this)
        }
        setName()
    }
}

object1.log()