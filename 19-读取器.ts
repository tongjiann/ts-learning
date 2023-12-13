class Person2 {
    firstName: string
    lastName: string
    constructor(fullName: string, lastName: string) {
        this.firstName = fullName,
            this.lastName = lastName
    }
    get fullName(): string {
        return this.firstName + " " + this.lastName;
    }
    set fullName(str: string) {
        let names = str.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}
const ppp = new Person2("zhang", "san")
ppp.fullName = "li si"
console.log(ppp.fullName);