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

// To find max number of arr
let max = arr.reduce((acc, curr) => {
    if(curr > acc){
        acc = curr
    }
    return acc
}, 0)
console.log(max)           // output - 6

// Some more examples
const users = [
    {firstName : "Ankit", lastName : "Rathi", age : 35},
    {firstName : "Ashwin", lastName : "Shukla", age : 27},
    {firstName : "Ronouk", lastName : "Joshi", age : 27},
    {firstName : "Sumit", lastName : "Barole", age : 28},
]
// To find list of full name of all the users

let fullName = users.map((user) => user.firstName + " " + user.lastName)
console.log(fullName)       // output - [ 'Ankit Rathi', 'Ashwin Shukla', 'Ronouk Joshi', 'Sumit Barole' ]

// how many users have a perticular age - 

let age = users.reduce((acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] = acc[curr.age] + 1
    }
    else{
        acc[curr.age] = 1
    }
    return acc
},{})
console.log(age)         // output - { '27': 2, '28': 1, '35': 1 }