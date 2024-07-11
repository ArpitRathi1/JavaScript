// Creation of an object
const student = {
	fullName : "Arpit",              // property
	marks : 93,                      // property
	printMarks : function(){         // method
		console.log("Marks :",this.marks)        // In an object, this refers to the object.
	},
}

