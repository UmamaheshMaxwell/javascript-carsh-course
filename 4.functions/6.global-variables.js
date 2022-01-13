var aUma =10;
console.log(aUma)

/**
 *  ! sample is global variable in the below function, 
 *  ! so please avoid declaring variables without var, let or const
 *  ! inside a function
*/ 

function test(){
    sample = "Hello" 
}

test()

console.log(sample)