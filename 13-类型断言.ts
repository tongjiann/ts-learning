function getLength(x: string | number): number {

    if ((x as string).length) {
        console.log(111);
        return (<string>x).length;
    } else {
        console.log(222);
        return x.toString.length
    }
}

console.log(getLength(123));
console.log(getLength('123'));