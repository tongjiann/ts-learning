class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHi(str: string) {
        console.log(this.name + ":hi," + str);
    }
}
const pp:Person = new Person("zhang",15)
pp.sayHi("li")