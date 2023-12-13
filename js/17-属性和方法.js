"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi(str) {
        console.log(this.name + ":hi," + str);
    }
}
const pp = new Person("zhang", 15);
pp.sayHi("li");
