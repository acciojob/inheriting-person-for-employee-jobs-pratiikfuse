// complete this js code
function Person(name, age) {
}

function Employee(name, age, jobTitle) {}

Person.prototype.greet= function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}

Employee.prototype.jobGreet = function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
} 
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

