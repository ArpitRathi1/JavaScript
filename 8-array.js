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

// Adding new element
// To add element at end
info.push(65)
console.log(info)               // output : [ 'Arpit', 22, 10, 'Ankit', 65 ]

// To add element at start
info.unshift("Ashwin")
console.log(info)               // output : [ 'Ashwin', 'Arpit', 22, 10, 'Ankit', 65 ]

// To add element at specific index
info.splice(2,0,"Adi")
console.log(info)               // output : [ 'Ashwin', 'Arpit', 'Adi', 22, 10, 'Ankit', 65 ]

// Removing element
let arr_1 =[2,4,1,9,0,6]
// To remove last element
let deleted = arr_1.pop()
console.log(deleted)          // output : 6
console.log(arr_1)            // output : [ 2, 4, 1, 9, 0 ]

// To remove element at starting
arr_1.shift()
console.log(arr_1)            // output : [ 4, 1, 9, 0 ]

// To remove element at a specific index
arr_1.splice(1,1)
console.log(arr_1)            // output : [ 4, 9, 0 ]

// Searching
let arr_2 = ["A","B","C","D"];
// To find index of a perticular element
console.log(arr_2.indexOf("C"))     // output : 2
console.log(arr_2.indexOf("E"))     // output : -1 (It will return -1 if element not found in array)

// To find element is present in array or not
console.log(arr_2.includes("A"))    // output : true

// Emptying an array
let arr_3 = [1,2,3,4,5];
arr_3.length = 0;
console.log(arr_3)               // output : []
let arr_4 = [1,2,4,5,2];
arr_4.splice(0,arr_4.length)
console.log(arr_4)               // output : []

// Joining an array
let arr_5 = ["I","am","Arpit","Rathi"];
let str = arr_5.join("")
console.log(arr_5)              // output : ['I', 'am', 'Arpit', 'Rathi'] // Join does not change original array it returns a new string
console.log(str)                // output : "IamArpitRathi"