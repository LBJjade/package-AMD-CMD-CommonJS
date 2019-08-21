/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-05-30 16:09:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-20 17:03:03
 */

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



// 请实现一个 flattenDeep 函数，把嵌套的数组扁平化
// 利用 Array.prototype.flat
// ES6 为数组实例新增了 flat 方法，用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数组没有影响。
// flat 默认只会 “拉平” 一层，如果想要 “拉平” 多层的嵌套数组，需要给 flat 传递一个整数，表示想要拉平的层数。
function flattenDeep(arr){
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
  }
  console.log(flattenDeep([1, [2, [3, [4]], 5]]));
  
  
  function flattenDeep(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        // 使用 pop 从 stack 中取出并移除值
        const next = stack.pop();
        if (Array.isArray(next)) {
            // 使用 push 送回内层数组中的元素，不会改动原始输入 original input
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    // 使用 reverse 恢复原数组的顺序
    return res.reverse();
  }
  console.log(flattenDeep([1, [2, [3, [4]], 5]]));
  

//   1 js控制锚点跳转

{/* <a name="anchor"></a>

location.hash="anchor";

不只有a其他元素也可以，比如在报表中：
<tr id="tr1">...</tr>
location.hash="tr1"
或者用jQuery的动画滚动效果：
var id="tr1";
$('html,body').animate({scrollTop: $("tr#"+id).offset().top}, 500);

 

2 html控制锚点跳转

<a href="#btn">跳转到点击位置</a>
<a name="btn" id="btn" > 点击</a>

3跨页面锚点跳转

代码如下
<a href="123.html#btn">跳到btn</a>
<a name="btn" id="btn" > </a>

4js控制锚点跳转在HTML中实现方式

<div id="divNode"><!-- contents --></div><!-- 假设一个需要跳转到的节点 -->  
<a href="#" onclick="document.getElemetnById('divNode').scrollIntoView(true);return false;">通过scrollIntoView实现锚点效果</a>   */}





//数组中的元素全部满足指定条件返回true
//运行结果为false
var checknum = [15,3,2,6,7,1,9,10];
var checkresult = checknum.every(function(item,index,array){
      return item > 1 ;    
});
alert(checkresult);


//数组中的元素部分满足指定条件返回true
//运行结果为false
var checknum = [15,3,2,6,7,1,9,10];
var checkresult = checknum.some(function(item,index,array){
     return item > 15;
});
alert(checkresult);


//把符合条件的项目组成一个新的数组
var checknum = [15,3,2,6,7,1,9,10];
var checkresult = checknum.filter(function(item,index,array){
       return item > 3;
 });
checkresult.forEach(function(value, index, array){
       console.log(value);
})


//对数组元素进行运算并将运算结果
var checknum = [15,3,2,6,7,1,9,10];
var checkresult = checknum.map(function(value, index, array){
     return '新值：' + parseInt(value + 1);
});
checkresult.forEach(function(value, index, array){
     console.log(value);
 })
 
 
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }


var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。


// 上面我们看到，目标对象o1自身也发生了改变。假如我们不想让o1改变，我们可以把三个对象合并到一个空的对象中，操作如下：
var obj = Object.assign({},o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1 }

// 注意：以下几个地方可能copy或者合并不成功，经常在面试中出现！
// 1、继承属性和不可枚举属性是不能拷贝的

var obj = Object.create({foo: 1}, { // foo 是个继承属性。
    bar: {
        value: 2  // bar 是个不可枚举属性。
    },
    baz: {
        value: 3,
        enumerable: true  // baz 是个自身可枚举属性。
    }
});

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }

// 2、原始类型会被包装为 object

var v1 = "abc";
var v2 = true;
var v3 = 10;
var v4 = Symbol("foo")

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4); 
// 原始类型会被包装，null 和 undefined 会被忽略。
// 注意，只有字符串的包装对象才可能有自身可枚举属性。
console.log(obj); // { "0": "a", "1": "b", "2": "c" }

// 3、异常会打断接下来的拷贝任务

var target = Object.defineProperty({}, "foo", {
    value: 1,
    writable: false
}); // target 的 foo 属性是个只读属性。

Object.assign(target, {bar: 2}, {foo2: 3, foo: 3, foo3: 3}, {baz: 4});
// TypeError: "foo" is read-only
// 注意这个异常是在拷贝第二个源对象的第二个属性时发生的。

console.log(target.bar);  // 2，说明第一个源对象拷贝成功了。
console.log(target.foo2); // 3，说明第二个源对象的第一个属性也拷贝成功了。
console.log(target.foo);  // 1，只读属性不能被覆盖，所以第二个源对象的第二个属性拷贝失败了。
console.log(target.foo3); // undefined，异常之后 assign 方法就退出了，第三个属性是不会被拷贝到的。
console.log(target.baz);  // undefined，第三个源对象更是不会被拷贝到的。

// Object.create()
// 这个我之前就提到过了，可以模拟出js中的“类”。具体可以看：http://www.haorooms.com/post/js_lei_jicheng

// 注意！上文中我只应用了Object.create()的第一个参数，其实还有第二个参数！
// Object.create(proto, [ propertiesObject ])


var o;
o = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: { writable:true, configurable:true, value: "hello" },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) { console.log("Setting `o.bar` to", value) }
}})

// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
o = Object.create({}, { p: { value: 42 } })

// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24
o.p
//42

o.q = 12
for (var prop in o) {
   console.log(prop)
}
//"q"

delete o.p
//false

//创建一个可写的,可枚举的,可配置的属性p
o2 = Object.create({}, { p: { value: 42, writable: true, enumerable: true, configurable: true } });


// Object.is()
// 用来判断两个值是否是同一个值。

// 下面是一些例子，面试中可能会提及

Object.is('haorooms', 'haorooms');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var test = { a: 1 };
Object.is(test, test);       // true

Object.is(null, null);       // true

// 特例
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true

// Object.keys()
// 这个方法会返回一个由给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。

// 例如：

/* 类数组对象 */ 
var obj = { 0 : "a", 1 : "b", 2 : "c"};
alert(Object.keys(obj)); 
// 弹出"0,1,2"

/* 具有随机键排序的数组类对象 */
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); 
// console: ['2', '7', '100']