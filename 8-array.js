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

// Sorting an array
let arr_6 = [9,3,6,2,1,7];
arr_6.sort()
console.log(arr_6)             // output : [ 1, 2, 3, 6, 7, 9 ]

// Combining array
let first = [1,2,3];
let second = [4,5,6];
let combine = first.concat(second)     // concat does not change original arrays, it always returns a new array   
console.log(combine)                   // output : [ 1, 2, 3, 4, 5, 6 ]

// Sperad operator
let firstArray = [10,20,30];
let secondArray = [40,50];
let combinedArray = [...firstArray, ...secondArray]    // spread operator does not change original arrays,it always returns a new array
console.log(combinedArray)            // output : [ 10, 20, 30, 40, 50 ]

// slicing an array
let arr_7 = [45,30,12,67,13,10];
let arr_8 = arr_7.slice(1,4);
console.log(arr_8)           // output : [ 30, 12, 67 ]

// map() -> create a new array which stores square of all values in the given array.
let arr_9 = [1,2,3,4,5];
let arr_9_square = arr_9.map((val)=>{
	return val**2                        // value used in callback function of map is used to form a new array
})

console.log(arr_9_square)      // output : [ 1, 4, 9, 16, 25 ]

// filter() -> create a new array which stores all the even number in the given array.
let arr_10 = [2,3,7,9,4,13,14,20];
let arr_10_even = arr_10.filter((val)=>{
	return val % 2 === 0;
})

console.log(arr_10_even)       // output : [ 2, 4, 14, 20 ]

// reduce() -> add all elements of an array
let arr_11 = [1,2,3,4,5];

let arr_11_sum = arr_11.reduce((res, curr)=>{
	return res + curr;
})

console.log(arr_11_sum)      // output : 15

// find the largest number in an array.
let arr_11_largest = arr_11.reduce((prev, curr) =>{
	return prev > curr ? prev : curr 
})

console.log(arr_11_largest)   // output : 5