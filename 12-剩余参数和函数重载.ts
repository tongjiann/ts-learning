function func(x: string, y: string, ...args: number[]) {
    console.log(x);
    console.log(y);
    console.log(args);

}

// func("", "", 1, 2, 3, 4, 5)
function ffunc(x: string, y: string): string
function ffunc(x: number, y: number): number
function ffunc(x: string | number, y: string | number): string | number {
    if (typeof x == 'string' && typeof y == 'string') {
        return x + y;
    } else if (typeof x == 'number' && typeof y == 'number') {
        return x + y;
    }
    return 0;
}

console.log(ffunc("123", "456"));
console.log(ffunc(123, 456));

