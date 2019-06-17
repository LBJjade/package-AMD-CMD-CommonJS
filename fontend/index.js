// 什么是闭包？闭包的作用是什么？
// 什么是闭包？
// 闭包是指有权访问另一个函数作用域中的变量的函数，创建闭包最常用的方式就是在一个函数内部创建另一个函数。

function foo() {
  var a = 2;
  return function fn() {
      console.log(a);
  }
}
let func = foo();
func(); //输出2

// 闭包的作用
// 1.能够访问函数定义时所在的词法作用域(阻止其被回收)。

function base() {
  let x = 10; //私有变量
  return {
      getX: function() {
          return x;
      }
  }
}
let obj = base();
console.log(obj.getX()); //10

// 2.私有化变量
function coolModule() {
  let name = 'Yvette';
  let age = 20;
  function sayName() {
      console.log(name);
  }
  function sayAge() {
      console.log(age);
  }
  return {
      sayName,
      sayAge
  }
}
let info = coolModule();
info.sayName(); //'Yvette'

// 3.模拟块级作用域
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = (function(j){
        return function () {
            console.log(j);
        }
    })(i);
}
a[6](); // 6


// 4.创建模块
function coolModule() {
  let name = 'Yvette';
  let age = 20;
  function sayName() {
      console.log(name);
  }
  function sayAge() {
      console.log(age);
  }
  return {
      sayName,
      sayAge
  }
}
let info = coolModule();
info.sayName(); //'Yvette'

