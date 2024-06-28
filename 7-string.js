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

// trim()
let sen_2 = "     Ashwin    "
console.log(sen_2.trim())     // output : Ashwin

// slice()
let sen_3 = "Arpit Rathi"
let sen_4 = sen_3.slice(0,5)
console.log(sen_4)           // output : Arpit

// concet() 
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3)            // output : Hello world

// replace()
let sen_5 = "Hello World";
sen_6 = sen_5.replace("World","India")
console.log(sen_6)        // output : Hello India