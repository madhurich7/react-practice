/*var mad = "I am mad";
{
	var mad = "I am madhuri";
}
console.log(mad);//see here you will get "Iam madhuri"
//on the console, because while using var it changes the vlue globally
//untill unless it's inside the function. So if a variale that has the same name and is declared using "var"
//keyword then the recently updated value will be used by the compiler
//because it changes the value globally*/

// var mad = "xyz";
// function myFunc(){
// 	var mad = "hello";
// 	/*console.log(mad);*///now it will print "hello"
// }
// myFunc();
// console.log(mad);//here this will print "xyz", because the variable is taken globally
// //here and the variable declared inside the function will be FUNCTION SCOPED, if we use 
// //console.log iside of the function then it will print the value defined inside of the 
// //fucntion which is "hello"

// let msg = "Out of block";
// {
// 	let msg = "inside of block";//this msg will have scope to just isnide of the block and 
// 	//it doesn't have visibility out of the block.
// }
// console.log(msg);//so this log will be printed as "out of block"
// const conValue = "this is a constant value";
// conValue = "Iam updating the constant value here";
// console.log(conValue);

// function person(name, age){
// 	this.name = name;
// 	this.age = age;
// }
// person.prototype.attitude = function(){
// 	return this.name;
// };
// var personx = new person("mad", 22);
// console.log(personx);//this is ES5

// class person{
// 	constructor(name, age){
// 		this.name = name;
// 		this.age = age;
// 	}
// 	getName(){
// 		return this.name;
// 	}
// }
// var personx = new person("mad", 22);//this is es6 now it' working in chrome 

import "sum.js"
console.log(sum);