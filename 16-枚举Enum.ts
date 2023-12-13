// 从0开始编号
enum NumberType {
    one,
    two,
    three,
    four
}

console.log(NumberType);

enum Color {
    red,
    blue = 'blue'.length,
    // 计算所得项后面不允许添加常数项
    // green,
}

const enum Obj {
    o, b, j
}