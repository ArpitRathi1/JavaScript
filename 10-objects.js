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