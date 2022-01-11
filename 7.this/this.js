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
    this.newVariable = "Hey"
}

sample()
console.log(newVariable)

var c = {
    firstName : 'Scott',
    display: function(){
        console.log(this)
    }  
}

c.display()

var obj = {
    fname :'Uma',
    setName: function(){
        var self= this
        console.log(self)
        self.fname = 'Mahesh'
        console.log(self)

        var updateName = function(){
            self.fname ="Umesh"
            console.log(self)

        }

        updateName() 
    }
}

obj.setName()