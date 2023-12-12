"use strict";
function getLength(x) {
    if (x.length) {
        console.log(111);
        return x.length;
    }
    else {
        console.log(222);
        return x.toString.length;
    }
}
console.log(getLength(123));
console.log(getLength('123'));
