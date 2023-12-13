"use strict";
let arr5 = [1, 2, 3, 4];
let tArr = [123, "456"];
tArr.push("456");
tArr.push("456");
tArr.push("456");
// 类型“boolean”的参数不能赋给类型“string | number”的参数。ts(2345)
// tArr.push(true)
