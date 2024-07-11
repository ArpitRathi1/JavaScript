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