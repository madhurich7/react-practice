import Person from "./Person";
class Student extends Person{
	//you need to menton the parameters that are passed through
	//the person class i.e "name", "age" including the
	//new parmaeters "id", "gender"
	constructor(name, age, id, gender){
		//even in the super you need to mention 
		//which parmaeters you wanted to use in this child class
		//mention them i.e "name" "age"
		super(name, age);
		this.id = id;
		this.gender = gender;
	}
}

export default Student;