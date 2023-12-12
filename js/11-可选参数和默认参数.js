"use strict";
let getName = function (x, y = "xx") {
    return x + " " + y;
};
console.log(getName("zhang", "san"));
console.log(getName("zhang"));
