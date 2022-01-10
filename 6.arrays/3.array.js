var data = [
            1,
            "Uma",
            true,
            null,
            undefined,
            function(name){
                return name
            },
            {
                 name: "Uma"
            },
            ["Red", "Blue", "Green"]
           ]

console.log(data[5](data[6].name) + " Likes " + data[7][1])

// var callMe = data[5]
// var somename = data[6].name
// console.log(callMe(somename))

