/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 16:24:59
 * @LastEditTime: 2019-10-08 16:45:17
 * @LastEditors: Please set LastEditors
 */

// this 是什么
// 理解this之前， 先纠正一个观点，this 既不指向函数自身，也不指函数的词法作用域。如果仅通过this的英文解释，太容易产生误导了。它实际是在函数被调用时才发生的绑定，也就是说this具体指向什么，取决于你是怎么调用的函数。也就是说谁调用的this，this就指向谁

// 1.纯粹的函数调用
// 这是函数的最通常用法，属于全局性调用，因此this就代表全局对象。请看下面这段代码，它的运行结果是1。
var a = 2;

function fun() {}
console.log(this.a);
fun();

// 2.作为对象方法的调用
// 函数还可以作为某个对象的方法调用，这时this就指这个上级对象
function test() {
  console.log(this.x);
}

var obj = {};
obj.x = 1;
obj.m = test;

obj.m();

// 3.作为构造函数调用

// 所谓构造函数，就是通过这个函数，可以生成一个新对象。这时，this就指这个新对象。

function test() {
  this.x = 1;
}

var obj = new test();

// 二、 this显示绑定和隐式绑定
// 1. this显示绑定
//  含义： 当一个函数没有明确的调用对象的时候， 也就是单纯作为独立函数调用的时候， 将对函数的this使用默认绑定： 绑定到全局的window对象
//  在显式绑定下： 函数将取得在“ 包含对象“ 里的永久居住权， 一直都会” 住在这里“
var a = 1;
console.log(this.a); //1 因为此时this指向了window，因而调用1
function fire() {
  var a = 2;
  console.log(this.a); //1 因为此时this指向了window，因而调用1

  function innerFire() {
    var a = 3;
    console.log(this.a); //1 因为此时this指向了window，因而调用1
  }
  innerFire();
}
fire(); //输出1

//  与作用域的区别： 全局作用域和局部作用域， 去掉this可发现区别

var a = 1;
console.log(a); //1 a在全局作用域
function fire() {
  var a = 2;
  console.log(a); // 2 fire函数作用域
  function innerFire() {
    var a = 3;
    console.log(a); //3 此时打印输出a，a在innerFIre作用域。从自身作用域查找变量，未找到才网上查找
  }
  innerFire();
}
fire();

// 1.3 对象内层函数内部函数

var obj = {
  fire: function() {
    //此时的fire函数其实用到了隐式绑定
    function innerFire() {
      console.log(this === window); //未明确调用对象，this指向window
    }
    innerFire();
  }
};
obj.fire(); //输出 true

var a = 1;
console.log(this.a); //1 this指向全局变量window
var obj = {
  a: 2,
  fire: function() {
    var a = 3;
    console.log(this.a); //2 因为是obj.fire()，调用了fire函数，因为this指向了obj，输出了obj下的a=2
    function innerFire() {
      var a = 4;
      console.log(this.a); //1 未明确调用对象，this指向window
    }
    innerFire(); //没有明确调用的对象
    console.log(this.a); //2 this指向obj
  }
};
obj.fire();

// 2、 this隐式绑定
//  a.隐式绑定

//  当函数被一个对象“ 包含” 的时候， 我们称函数的this被隐式绑定到这个对象里面， 这时候， 通过this可以直接访问所绑定的对象里面的其他属性， 比如下面的a属性

//  在隐式绑定下： 函数和只是暂时住在“ 包含对象“ 的旅馆里面， 可能过几天就又到另一家旅馆住了

var obj = {
  a: 1,
  fire: function() {
    //此时函数的this被隐式绑定到了对象obj
    console.log(this == obj); // obj中有fire函数，因而默认this指向obj
    console.log(this.a); // 1 this.a 相当于obj.a =1
  }
};
obj.fire(); // 输出1

//  b.动态绑定：
//  this实在代码运行期绑定而不是在书写期

var obj = {
  a: 1, // a是定义在对象obj中的属性 1
  fire: function() {
    console.log(this.a);
  }
};
var a = 2; // a是定义在全局环境中的变量 2
obj.fire(); //1  此时fire的指向时obj
var fireInGrobal = obj.fire; //因为fireInGrobal是全局变量，this对于obj的绑定丢失，绑定到了全局window
fireInGrobal(); // 输出 2 输出全局变量啊
var a = 2;
var obj = {
  a: 1, // a是定义在对象obj中的属性
  fire: function() {
    console.log(this.a);
  }
};

function otherFire(fn) {
  //全局函数，this绑定window
  fn();
}
otherFire(obj.fire); // 输出2   this对于obj的绑定丢失，绑定到了全局this上面

// 更改this指向
//  每个Function构造函数的原型prototype， 都有方法
// call(), apply(), bind()

// 总结：
// a call(), apply()
// 在特定作用域调用函数
// b bind（）
// 会创建一个函数的实例， this会被绑定到bind() 函数
// bing() 绑定this， bind()() 调用函数
// 1. call() 方法

var Person = {
  name: "zhangsan",
  age: 19
};

function aa(x, y) {
  console.log(x + "," + y);
  console.log(this);
  console.log(this.name);
}

aa(4, 5); //this指向window--4,5  window  空

aa.call(Person, 4, 5); //this指向Person--4,5  Person{}对象  zhangsan

// apply() 方法
// apply() 与call（） 非常相似， 不同之处在于提供参数的方式， apply（） 使用参数数组， 而不是参数列表

var Person = {
  name: "zhangsan",
  age: 19
};

function aa(x, y) {
  console.log(x + "," + y);
  console.log(this);
  console.log(this.name);
}

aa.apply(Person, [4, 5]); //this指向Person--4,5  Person{}对象  zhangsan

// 3. bind() 方法
// bind() 创建的是一个新的函数（ 称为绑定函数）， 与被调用函数有相同的函数体， 当目标函数被调用时this的值绑定到 bind() 的第一个参数上
var Person = {
  name: "zhangsan",
  age: 19
};

function aa(x, y) {
  console.log(x + "," + y);
  console.log(this);
  console.log(this.name);
}

aa.bind(Person, 4, 5); //只是更改了this指向，没有输出
aa.bind(Person, 4, 5)(); //this指向Person--4,5  Person{}对象  zhangsanF
