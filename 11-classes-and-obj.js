// Creating our own prototype.
const employee = {
	calcTax(){
		console.log("tax is 10%")
	}
}

const karan = {
	salary : 25000
}

const arjun = {
	salary : 50000,
	calcTax(){
		console.log("tax is 20%")
	}
}

// If we want to use the properties and method of employee obj. in karan obj.
karan.__proto__ = employee	       // Now we have calcTax method in the prototype of karan obj
console.log(karan.calcTax())       // output : tax is 10%
arjun.__proto__ = employee 
arjun.calcTax()                    // output : tax is 20% 
								   // [Note - If object and prototype have same method, object's method will be used.]