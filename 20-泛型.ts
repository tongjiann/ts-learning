function getArr<T>(value: T, count: number): T[] {
    const arr: T[] = []
    for (let i = 0; i < count; i++) {
        arr.push(value)

    }
    return arr
}

console.log(getArr("123",3));
console.log(getArr(123,3));

