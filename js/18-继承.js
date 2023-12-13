"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi(str) {
        console.log(this.name + ":hi," + str);
    }
}
class Dog extends Animal {
    sayHi(str) {
        console.log("【dog】" + this.name + ":hi," + str);
    }
}
new Dog("l", 3).sayHi("cat");
