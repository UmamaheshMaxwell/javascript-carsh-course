var employee = {
    id: 1,
    greet: function(){
        console.log(this.id)
    }
}

employee.greet()

var employee = {
    id: 1,
    greet: function(){
        console.log(this)
        setTimeout(function(){
            console.log(this.id)
        }.bind(this), 1000)
        
    }
}

employee.greet()

var employee = {
    id: 1,
    greet: function(){
        var self = this
        console.log(this)
        setTimeout(function(){
            console.log(self.id)
        }, 1000)
        
    }
}

employee.greet()

var employee = {
    id: 1,
    greet: function(){
        console.log(this)
        setTimeout(() =>{
            console.log(this.id)
        }, 1000)
        
    }
}

employee.greet()