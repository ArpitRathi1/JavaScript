let num = 3;
console.log(typeof(num));     // output : number 

let str = "Arpit Rathi";
console.log(typeof(str));     // output : string

const student = {
	name : "Arpit",
	age : 27,
	marks : 90,
	isPass : true
}

console.log(student)               // output : { name: 'Arpit', age: 27, marks: 90, isPass: true }
console.log(typeof(student))       // output : object
console.log(typeof(student.age))   // output : number

// To access any value.
console.log(student["name"])        // "" is required
// or
console.log(student.name)

// To update a value.
student["marks"] = 89;
console.log(student.marks)
