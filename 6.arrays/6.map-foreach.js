var items1 = ["chair", "bench", "pad", "laptop"]

console.log(items1[0])

console.log('********** Using For loop ********')
for(var i =0; i< items1.length; i++){
    console.log(items1[i])
}

console.log('********** Using ForEach ********')
var items2 = items1.forEach(function(value, index){
   console.log(index , value)
})

console.log('********** Using map ********')
var items3 = items1.map(function(value, index){
    console.log(index, value)
})

console.log('********** Using ForEach ********')
var items4 = items1.forEach(function(value, index){
    return value + ' ' + index;
})
console.log(items4)

console.log('********** Using map ********')
var items5 = items1.map(function(value){
    return "Item :"  + value
})

console.log(items5)