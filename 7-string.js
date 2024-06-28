// Creating String-

let name = "Arpit Rathi";

// Template Strings

let sentence = `This is a template string`

// String interpolation - To create a string by doing substitution of placeholders

let obj ={
	item : "Pen",
	price : 10
}
console.log(`Prince of ${obj.item} is ${obj.price} rupees`)

// length of string

let len = name.length        // To find length of the string
console.log(len)             // output : 11

// string indices

console.log(name[4])         // output : t

// toUpperCase()
let name1 = name.toUpperCase() 
console.log(name1)           // output : ARPIT RATHI

// toLowerCase()
let sen_1 = "ANKIT"
console.log(sen_1.toLowerCase())  // output : ankit