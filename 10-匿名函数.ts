function add(a: number, b: number): number {
    return a + b;
}


let c = add(1, 2)
console.log(c);
// 完整写法
let add3: (a: number, b: number) => number = function (a: number, b: number): number {
    return a + b;
}