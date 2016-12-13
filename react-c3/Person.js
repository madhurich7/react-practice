
class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	getAge(){
		return this.age;
	}
	getName(){
		return this.name;
	}
	setName(name){
		this.name = name;
	}
	setAge(age){
		this.age = age;
	}
}

export default Person;