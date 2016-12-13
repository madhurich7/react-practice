import Person from "./Person";
import Student from "./Student";

/*console.log("Madhuri");

if(false){
	var x = "some string";
}
console.log(x);//here this statement would NOT give an erro
//because variables which are decalred and defined, the declaration part will be
//HOISTED to the top. So when it is moved to the top, variable "x" is declared but it is 
//defined within the block "if", that's why it doesn't give you error but it gives
//undefined (here "x" is window scoped)

function myFunc(){
	var a = "some value";
}
console.log(a);//this will give you an error because
// variables are function scoped and here var "a" is 
//available wihtin the function but not out of it.(here "a" is myFunc scoped)*/


//ARROW FUNCITONS IN ES 2015
var func1 = function(){
	console.log("this is function 1");
};

var mult = function(a, b){
	return a * b;
};
console.log(mult(4,3));

var sum = (a, b) => (a + b); /*
the above statement is in es2105 which is ECMA6
this is equivalent to 
var sum = function(a, b){
	return a + b;
}; in normal javascript
*/


console.log("sum is " + sum(2,9)); //when you are using "return" key word in the statement
//here in the map function then you "MUST" surround that return statement with curly braces
//else if you ommit the return statement then you shouls "NOT" put the braces around as it gives
//undefined

var name = name => name; /*here if it's just one parameter then you don't even
//need to surround that with parenthesses, you can ommit
the above statement is equivalent to
var name = function(name){
	return name;
} in normal javascript*/
console.log("name is " + name("madhurifsdfsd"));

let school = "trivi";
let univ = "unt"; 
let obj1 = {
	school,
	univ
}; 
/*this obj1 is equivalent to
let obj1 = {
	school: school,
	univ: univ
}; in regular javascript
*/console.log(obj1);

function fullName(fname, lname = "mohan"){
	console.log(fname, lname);
}
fullName("mad", "ch");
/*see here in the fullName function
if we don't pass the lname parameter while calling the
function then, the parameter lname would be undefined and
"mad undefined" will be logged out.
So we can also specify default names in the function
decalrartion look into line 63, that can be used
if we forgot to pass in any parameter while calling the fucntion. So
	that default value will be used and logged out instead of "undefined".
If the default value and also the corresponding parameter
is passed a value in the fucntion call statement, then the value
passed in the fnction call statement will be logged out, this value
OVERWRITES the default value*/

var arr1 = ["mad", "man", "mom", "dad"];
//"..."--this is called "spread operator" when it is used to
//spread accros parameters.
//"..."--this is called "rest operator" when it is taking in the values
console.log (...arr1 + "these are considered to be individual values in arr1");
console.log("these are in one array called arr1 and are not individual " + arr1);
function printArr1(a, b, c){
	console.log(a);
	console.log(b);
	console.log(c);
}
printArr1(...arr1);


function logArr2(num1, num2, ...nums){
	console.log(nums);
}
logArr2(1,2,3,5);//don't sepcify [1,2,3] like this within square braces
//it doesn't log you [1,2,3] instead it will be [Array[3]]. So
//specify just 1,2,3 within parenthesses.
//if you want to omit the first parameter then you can
//specify "num1" you can use any name instead of "num1"
//in the function decalaration to omit, that won't be logged.

/*function Person(name, age){
	this.name = name;
	this.age = age;
}
Person.prototype.getAge = function(){
	return this.age;
};
Person.prototype.setAge = function(age){
	this.age = age;
};
Person.prototype.getName = function(){
	return this.name;
};
Person.prototype.setAge = function(name){
	this.name = name;
};*/



var student1 = new Student("madhuri", 22, 21, "female");
console.log(student1);
