// Hoisting is a phenomina in JS by which we can access varible and functions even before we initialise it.
// It is because of execution context.
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope(to the top of the current script or the current function).
// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError.
// JavaScript only hoists declarations, not initializations.

console.log(x)
printHello()
// printBye()    // Error : printBye is not a function

var x = 2;                 // Variable should be created var keyword

function printHello(){
	console.log("Hello")
}

// output : undefined
//          Hello


// var printBye = () => {         // If a function is created in this way than it will be treated as a variable
// 	console.log("printBye")    
// }
