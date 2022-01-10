var obj = {
	"id": 1,
	"firstName": "Adam",
	"lastName": "Colson"
}

var jsonStringify = JSON.stringify(obj)

console.log(obj, typeof obj)
console.log(jsonStringify, typeof jsonStringify)

var jsonParse = JSON.parse(jsonStringify)
console.log(jsonParse, typeof jsonParse)