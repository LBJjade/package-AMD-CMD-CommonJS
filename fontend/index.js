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

// 模块模式具有两个必备的条件(来自《你不知道的JavaScript》)

// 必须有外部的封闭函数，该函数必须至少被调用一次(每次调用都会创建一个新的模块实例)
// 封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有的状态。

// 闭包的缺点
// 闭包会导致函数的变量一直保存在内存中，过多的闭包可能会导致内存泄漏





// Promise.all 的特点

// Promise.all 的返回值是一个 promise 实例


// 如果传入的参数为空的可迭代对象，Promise.all 会 同步 返回一个已完成状态的 promise
// 如果传入的参数中不包含任何 promise,Promise.all 会 异步 返回一个已完成状态的 promise
// 其它情况下，Promise.all 返回一个 处理中（pending） 状态的 promise.

// 如果传入的参数中的 promise 都变成完成状态，Promise.all 返回的 promise 异步地变为完成。
// 如果传入的参数中，有一个 promise 失败，Promise.all 异步地将失败的那个结果给失败状态的回调函数，而不管其它 promise 是否完成
// 在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组



