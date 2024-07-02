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

// looping over an array
// Using for-loop
for (let i = 0; i<=(info.length-1); i++){
	console.log(info[i])                       // output : Arpit 22 10 Ankit
}
// Using for-of loop
for (let val of info){
	console.log(val)                           // output : Arpit 22 10 Ankit
}
// Using forEach loop
info.forEach((element)=>{
	console.log(element)                       // output : Arpit 22 10 Ankit
})

// average marks
let marks = [70,80,90];
let sum = 0;
let avg;
for (let mark of marks){
	sum += mark
}
avg = sum / marks.length
console.log(`Average marks of all students is ${avg}`)          // output : 80