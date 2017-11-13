//Factory Pattern
function peopleFactory(name, age, state) {
    let temp = {};
    temp.age = age;
    temp.name = name;
    temp.state = state;

    temp.printPerson = function () {
        return this.name + ' ' + this.age + ' ' + this.state;
    };
    return temp;
}

let person1 = peopleFactory("John", 20, "CS");
let person2 = peopleFactory("James", 20, "SC");
person1.printPerson();


//Constructor Pattern
function PeopleConstructor(name, age, state) {
    //functions are also objects.
    this.age = age;
    this.name = name;
    this.state = state;

    this.printPerson = function () {
        return this.name + ' ' + this.age + ' ' + this.state;
    };
    return temp;
}

let person3 = new PeopleConstructor("John", 20, "CS");
let person4 = new PeopleConstructor("James", 20, "SC");
person3.printPerson();
