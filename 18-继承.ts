class Animal {
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

class Dog extends Animal {
    sayHi(str: string): void {
        console.log("【dog】"+this.name + ":hi," + str);
        
    }
}
new Dog("l",3).sayHi("cat")