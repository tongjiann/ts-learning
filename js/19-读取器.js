"use strict";
class Person2 {
    constructor(fullName, lastName) {
        this.firstName = fullName,
            this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    set fullName(str) {
        let names = str.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}
const ppp = new Person2("zhang", "san");
ppp.fullName = "li si";
console.log(ppp.fullName);
