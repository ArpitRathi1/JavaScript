// Creating a function

function myFunction(msg){          // here msg is parameter. 
	console.log(msg)
}

// Calling function
myFunction("Arpit")                // here Arpit is argument.

// function to add to values.
function sum(x, y){                // x and y are sum function's local variables
	console.log(arguments)         // return object output : { '0': 1, '1': 2 }
	s = x + y
	return s                       // return will always return only one value
}
console.log(sum(1,2))              // output : 3

// Rest operator
function sumOfAll(...args) {
	let sum = 0;
	for (let arg of args){
		sum += arg
	}
	return sum
}
console.log(sumOfAll(1,2,3,4,5))    // output : 15

// Arrow funnction 
let mul = (a, b) => {
	return a * b
}
console.log(mul(3, 4))             // output : 12

// number of vowel in a string.
function numOfVowel(str){
	let vowel = ["a","e","i","o","u"];
	let countOfVowel = 0;
	for (let i of str){
		if (vowel.includes(i.toLowerCase())){
			countOfVowel++;
		}
	}
	return countOfVowel
}

console.log(numOfVowel("Arpit"))    // output : 2 

// forEach
let arr = [3,2,5,8,4];
arr.forEach((ele, idx, arr)=>{
	console.log(idx,"-",ele,arr)               // output : 3 2 5 8 4 
})