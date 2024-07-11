// Creation of an object
const student = {
	fullName : "Arpit",              // property
	marks : 93,                      // property
	printMarks : function(){         // method
		console.log("Marks :",this.marks)        // In an object, this refers to the object.
	},
}

// To get value of a property
console.log(student.fullName)       // output : Arpit

// To add property
student.grade = "A";
console.log(student.grade)          // output : A

// To invoke a method
student.printMarks()                // output : Marks : 93

// To remove a property
delete student.grade
console.log(student.grade)          // output : undefined

// Object cloning - There are 3 ways to clone an object.
// 1. Iteration-
let src_1 = {
	name : "Tommy"
}
let dest_1 = {}
for (let key in src_1){
	dest_1[key] = src_1[key]
}
console.log(dest_1)               // output : { name: 'Tommy' }

// 2. Assign
let src_2 = {
	marks : 100
}
let dest_2 = Object.assign({},src_2)
console.log(dest_2)               // output : { marks: 100 }

// 3. spread
let src_3 = {
	fullName : "Arpit Rathi"
}
let dest_3 = {...src_3}
console.log(dest_3)              // output : { fullName: 'Arpit Rathi' }

// Constructor function.
function Rectangle (len, bre){
	this.length = len,
	this.width = bre
	this.area = function(){
		return this.length * this.width
	}
}

let rectangle_1 = new Rectangle(3,4);
console.log(rectangle_1.length)        // output : 3
console.log(rectangle_1.width)         // output : 4
console.log(rectangle_1.area())        // output : 12
let rectangle_2 = new Rectangle(1);
console.log(rectangle_2.length)        // output : 1
console.log(rectangle_2.width)         // output : undefined
console.log(rectangle_2.area())        // output : NaN