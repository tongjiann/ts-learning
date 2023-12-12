"use strict";
function func(x, y, ...args) {
    console.log(x);
    console.log(y);
    console.log(args);
}
function ffunc(x, y) {
    if (typeof x == 'string' && typeof y == 'string') {
        return x + y;
    }
    else if (typeof x == 'number' && typeof y == 'number') {
        return x + y;
    }
    return 0;
}
console.log(ffunc("123", "456"));
console.log(ffunc(123, 456));
