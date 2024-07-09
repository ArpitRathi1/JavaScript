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