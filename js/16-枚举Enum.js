"use strict";
// 从0开始编号
var NumberType;
(function (NumberType) {
    NumberType[NumberType["one"] = 0] = "one";
    NumberType[NumberType["two"] = 1] = "two";
    NumberType[NumberType["three"] = 2] = "three";
    NumberType[NumberType["four"] = 3] = "four";
})(NumberType || (NumberType = {}));
console.log(NumberType);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 'blue'.length] = "blue";
    // 计算所得项后面不允许添加常数项
    // green,
})(Color || (Color = {}));
