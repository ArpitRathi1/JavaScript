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

// We can't update the value of a variable created by const keyword
// But we can update the value of a key inside the object which is created by const keyword
// Because if we update a key inside the obj it does not change the memory location of that object
