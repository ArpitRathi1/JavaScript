// for loop

for (let i = 1; i <= 5; i++){
	console.log(i,"Hello World")
}

// Sum of 1 to n

let n = 5;
let sum = 0;
for (let i = 0; i <= n; i++){
	sum = sum + i;
}
console.log(sum)         // output : 15

// while loop

let j = 1;                   // initialisation
while(j <= 5){               // condition
	console.log("j =",j)     // task
	j++                      // updation
}

// do while loop

let k = 20;                  // initialisation
do{
	console.log("k =",k)     // task
	k++                      // updation
}while(k<=10);               // condition(always remember to add (;) at the end of the condition)

// for-of loop
let str = "Arpit";
for (let l of str){
	console.log("l =",l)     // don't have to give any initialisation, stopping condition or updation.
}

// size of a string
let str1 = "JavaScript";
let size = 0;
for (let a of str1){
	size++
}
console.log("size of str1 =",size)       // output : 10

// for-in loop
let student = {
	name : "Rahul",
	age : 20,
	cgpa : 8.4,
	isPass : true
}

for(let key in student){
	console.log(key,":",student[key])     // In for-in loop, iterator contains the value of keys of object
}
