/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-14 09:53:46
 * @LastEditTime: 2019-10-14 13:59:12
 * @LastEditors: Please set LastEditors
 */
function log(x, y = "World") {
  console.log(x, y);
}

log("Hello"); // Hello World
log("Hello", "China"); // Hello China
log("Hello", ""); // Hello

function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

const p = new Point();
p; // { x: 0, y: 0 }

function foo(x = 5) {
  let x = 1; // error
  const x = 2; // error
}

// 不报错
function foo(x, x, y) {
  // ...
}

// 报错
function foo(x, x, y = 1) {
  // ...
}
// SyntaxError: Duplicate parameter name not allowed in this context

function foo({ x, y = 5 }) {
  console.log(x, y);
}

foo({}); // undefined 5
foo({ x: 1 }); // 1 5
foo({ x: 1, y: 2 }); // 1 2
foo(); // TypeError: Cannot read property 'x' of undefined

// 例一
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined])
// f(, 1) // 报错
f(undefined, 1); // [1, 1]

// 例二
function f(x, y = 5, z) {
  return [x, y, z];
}

f(); // [undefined, 5, undefined]
f(1); // [1, 5, undefined]
// f(1, ,2) // 报错
f(1, undefined, 2); // [1, 5, 2]

function foo() {
  setTimeout(() => {
    console.log("id:", this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });

function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function() {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log("s1: ", timer.s1), 3100);
setTimeout(() => console.log("s2: ", timer.s2), 3100);
