// (1) 如果 new 关键词出现在被调用函数的前面，那么JavaScript引擎会创建一个新的对象，被调用函数中的this指向的就是这个新创建的函数。
function ConstructorExample() {
  console.log(this);
  this.value = 10;
  console.log(this);
}

new ConstructorExample();

// (2) 如果通过apply、call或者bind的方式触发函数，那么函数中的this指向传入函数的第一个参数。
function fn() {
  console.log(this);
}

var obj = {
  value: 5
};

var boundFn = fn.bind(obj);

boundFn(); // -> { value: 5 }
fn.call(obj); // -> { value: 5 }
fn.apply(obj); // -> { value: 5 }

// (3) 如果一个函数是某个对象的方法，并且对象使用句点符号触发函数，那么this指向的就是该函数作为那个对象的属性的对象，也就是，this指向句点左边的对象。

var obj = {
  value: 5,
  printThis: function() {
    console.log(this);
  }
};

obj.printThis(); // -> { value: 5, printThis: ƒ }

// (4) 如果一个函数作为FFI被调用，意味着这个函数不符合以上任意一种调用方式，this指向全局对象，在浏览器中，即是window。
var obj = {
  value: 5,
  printThis: function() {
    console.log(this);
  }
};

obj.printThis(); // -> { value: 5, printThis: ƒ }



