/*@flow*/
// 类型推断
// function split(str) {
//   return str.split(" ");
// }
// split("11");
// 类型注释

// function add(x, y): number {
//   return x + y;
// }
// add(12, 11);
// 数组
// var arr: Array<string | number> = [1, 2, 3];
// arr.push("Hello");

// 类和对象
// class Bar {
//   x: string; // x 是字符串
//   y: string | number | void; // y 可以是字符串或者数字
//   z: boolean;

//   constructor(x: string, y: string | number | void) {
//     this.x = x;
//     this.y = y;
//     this.z = false;
//   }
// }

// var bar: Bar = new Bar("hello", 4);

// var obj: { a: string, b: number, c: Array<string>, d: Bar } = {
//   a: "hello",
//   b: 11,
//   c: ["hello", "world"],
//   d: new Bar("hello", 3),
// };

// null
var foo: ?string = null;
var foo1: ?number = 123;
var foo2: ?Array<any> = [123];
var foo3: ?boolean = true;
