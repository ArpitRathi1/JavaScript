// Creating Array
let info = ["Arpit",20,10,"Ankit"];

// Length of an array (length is a property)
console.log(info.length)     // output : 4

// typeof - In JS array is also a special type is object.
console.log(typeof info)    // output : object

// Accessing Array Elements
console.log(info[0])        // output : Arpit
console.log(info[4])        // output : undefined

// update a value
info[1] = 22 
console.log(info)          // output : ['Arpit', 22, 10, 'Ankit']