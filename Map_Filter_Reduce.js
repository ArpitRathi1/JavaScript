// map() -> map function is used to transform an array

const arr = [5,1,3,2,6];

// Double - [10, 2, 6, 4, 12]
let double = arr.map((item) => 2 * item)
console.log(double)          // output - [ 10, 2, 6, 4, 12 ]

// Binary 
let binary = arr.map((item) => item.toString(2))
console.log(binary)          // output - [ '101', '1', '11', '10', '110' ]

// filter() -> filter is used to filter

// filter all the odd values in arr.
let odd_arr = arr.filter((item) => item % 2 !== 0)
console.log(odd_arr)        // output - [ 5, 1, 3 ]

// reduce() -> reduce function is used where you need to take every value of an array and comeup with a single value out of it.
// To find sum of arr
let sum = arr.reduce((acc, curr) => acc + curr, 0)
console.log(sum)           // output - 17