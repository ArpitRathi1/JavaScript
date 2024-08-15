// map() -> map function is used to transform an array

const arr = [5,1,3,2,6];

// Double - [10, 2, 6, 4, 12]
let double = arr.map((item) => 2 * item)
console.log(double)          // output - [ 10, 2, 6, 4, 12 ]

// Binary 
let binary = arr.map((item) => item.toString(2))
console.log(binary)          // output - [ '101', '1', '11', '10', '110' ]
