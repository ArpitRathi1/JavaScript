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
// Creation of car.

class Car {
	constructor(brand){
		this.brand = brand
	}
	start(){
		console.log("Start")
	}
	stop(){
		console.log("Stop")
	}
}

// Creation of obj using class Car.

let swift = new Car("Swift");
console.log(swift.brand)		  // output : Swift
swift.start()                     // output : Start

let breaza = new Car();
console.log(breaza.brand)         // output : undefined
breaza.stop()                     // output : Stop

// Inheritance
class Parent {
	hello(){
		console.log("Hello")
	}
}

class Child extends Parent {
	bye(){
		console.log("Bye")
	}	
}

let chlid_1 = new Child();      // Now we can use methods of parent class in chlid class.
chlid_1.hello()                 // output : Hello

class Person{
	constructor(name){
		this.species = "Home sapians"
		this.name = name
	}
	eat(){
		console.log("Eat")
	}
}