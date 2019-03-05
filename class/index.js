function l(arg) {
  console.log(arg);
}
function Memo() {}
Memo.prototype.hehe = 1;
Memo.prototype.shut = function() {
  console.log('miaomiao');
};
var m0 = new Memo();
var m1 = new Memo();
console.log(m0.shut === m1.shut); //ture, 因为m0的shut和m1的shut就是指向了Memo.prototype.shut这个方法,所以他们相等;
//Object.getPrototypeOf会返回实例的原型;
console.log(Object.getPrototypeOf(m0)); //输出了：Memo {hehe: 1, shut: function}
console.log(Memo.prototype.isPrototypeOf(m0)); // 输出： true;

//原型对象有一个很大的问题要非常注意 ==》》 原型的属性和方法是被共享的, 比如:
Memo.prototype.shut = 'W_W';
l(m0.shut); //输出：W_W, 悲剧了吧, 本来原型上的shut是个方法, 被改成字符串以后, 实例上的shut也发生了改变;
l(m1.shut); //输出：W_W;

m0.__proto__.shut = 1111; //m0的__proto__指向了Memo.prototype.shut,__proto__在标准浏览器下面是不能枚举到的,但确实是存在的一个属性;
l(m1.shut); //输出了1111
//只要原型上的属性或者方法被改了, 实例上的也会发生改变;

var Fn = function() {
  //我是构造函数Fn;
};
l('Fn的constructor');
l(Fn.prototype.constructor);
/*输出function (){
 //我是构造函数Fn;
 } */

var f = new Fn();
l('f的constructor');
l(f.constructor);
/*输出;
 * function (){
 //我是构造函数Fn;
 }*/
//当函数创建的时候默认就为prototype新建一个constructor指向自己;

l(Fn.constructor === Function); //输出true, Function这个构造函数是Function;
l(Fn.constructor); // 输出function Function() { [native code] } ，意思是Function这个构造函数 ;
l(Fn.constructor === Fn.__proto__.constructor); //输出true; Fn的constructor实际上是指向Fn.__proto__的;

//好的, 现在重新定义一个Fn;
var Fn = function() {
  //我是构造函数Fn;
};
Fn.prototype = {};
l(Fn.prototype.constructor);
/*打印出了内部的代码, 为什么呢? 因为我们改变了Fn的原型, Fn的constructor指向了{}空对象的Contructor;
 * function Object() { [native code] }  */

//工厂模式：因为使用用一个接口创建很多对象会产生大量的重复代码,为了解决这个问题，人们就开始使用工厂模式：
function Person(hairs, face, eye) {
  var o = new Object();
  o.hairs = hairs;
  o.face = face;
  o.eye = eye;
  o.say = function() {
    console.log('say someting to me!');
  };
  return o;
}
//我们通过 Person(0,1,2)就可以创建一个包含特定信息的Person对象, 以后要生成对象直接执行Person然后给他传参数就好了;
//比如我们要生成10个Person, 很方便很快;
var c = 10;
while (c--) {
  console.log(Person(c, c, c));
}

function l(arg) {
  console.log(arg);
}

function Person(hairs, face, eye) {
  this.hairs = hairs;
  this.face = face;
  this.eye = eye;
}
//同样, 我们再生成10个小朋友
var c = 10;
while (c--) {
  console.log(new Person(c, c, c));
}

// 1:组合使用构造器和原型模式
function Duck(name, word) {
  this.name = name;
  this.word = word;
}
Duck.prototype.say = function() {
  console.log(this.name + ' say : ' + this.word);
};
var duck = new Duck('nono', 'hehe');
duck.say();

// 寄生构造模式; 听名字真的很玄乎..其实跟工厂模式一模一样的, 其实就是自定义模型的封装;
function Foxy(name, word) {
  var result = new Object();
  result.name = name;
  result.word = word;
  return result;
}
l(new Foxy('nono', 'say someting')); //输出：Object {name: "nono", word: "say someting"} ;
function Monkey() {
  var aResult = [];
  //技巧：通过apply把arguments保存到数组;
  aResult.push.apply(aResult, arguments);
  return aResult;
}
l(new Monkey('nono', 'dino', 'kite', 'sam')); //打印出了这个：["nono", "dino", "kite", "sam"];

/* 这段话慢慢读， 从搞基程序设计三抄过来的，很重要， 实体书最好自己看一看哇；
 * ECMAScript中描述了原型链的概念, 并将原型链作为实现继承的主要方法, 基本思想是利用引用类型继承另一个引用类型的属性和方法。
 * 简单回顾一下构造函数，原型和实例的关系：每一个函数都有一个原型对象, 每一个原型对象都有一个指向构造函数的指针，
 * 而实例包含了一个指向原型对象的内部（不可见的）指针。 那么我们让原型对象等于另一个类型的实例， 那么这个原型对象将会包含指向
 * 另一个原型对象的指针，如果另一个原型对象又是指向了别的原型的一个实例, 这样层层嵌套， 就形成了原型链；
 * */
//要注意的是使用寄生模式的返回的对象和构造函数一点关系都没有;

// JS的原型继承， 继承是依赖于原型链的；那么JS原型链是什么呢：
// 　　那么我们利用原型的原型链相互继承来写一个基本的例子：

var Fn = function() {
  this.property = true;
};
Fn.prototype.getFnProperty = function() {
  console.log(this.property);
};
var SubFn = function() {
  this.subProperty = false;
};
//SubFn继承了Fn的实例
SubFn.prototype = new Fn();
//为实例添加额外的实例方法;
SubFn.prototype.getSubProperty = function() {
  console.log(this.subProperty);
};
var subFn = new SubFn();
subFn.getFnProperty(); //输出了true
subFn.getSubProperty(); //输出了false
/*现在subFn的constructor 是
 function () {
 this.property = true;
 };
 所以要修正SubFn.prototype.constructor = SubFn
 */

// 首先， 准备一个方法；
var inherit = function(o) {
  if (!typeof o === 'object') return;
  function F() {}
  F.prototype = o;
  F.prototype.constructor = F;
  return new F();
};

var Fn = function() {
  this.property = true;
};
Fn.prototype.getFnProperty = function() {
  console.log(this.property);
};
var SubFn = function() {
  this.subProperty = false;
};
//SubFn继承了Fn的实例
SubFn.prototype = new Fn();
//为实例添加额外的实例方法;
SubFn.prototype.getSubProperty = function() {
  console.log(this.subProperty);
};
var subFn = new SubFn();

//这个方法的内部， 临时创建了一个构造函数， 然后将传入的对象作为这个构造函数的原型， 最后返回一个临时的新实例；
//ECMASscript 5 有新增了一个Object.create 效果和inherit一模一样, 它可以接收第二个参数，
// 第二个参数要通过defineProperties的方式设置，会覆盖原型的属性， 比如：
Object.create(subFn, {
  getFnProperty: {
    value: 1,
  },
});
var Fn = function() {};
//如果我们inherit传对象;
Fn.prototype = inherit({ 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 });
l(new Fn()); //==>Fn {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, constructor: function(){....} 继承了哦
//如果我们给inherit传一个构造函数的实例;
Fn.prototype = inherit(new SubFn());
l(new Fn());

var inherit = function(o) {
  if (!typeof o === 'object') return;
  function F() {}
  F.prototype = o;
  F.prototype.constructor = F;
  return new F();
};




//首先要准备inheritPrototype方法；
var util = util || {};
util.inherit = inherit;
util.inheritPrototype = function(subType, superType) {
  var _prototype = this.inherit(superType.prototype);
  _prototype.constructor = subType;
  subType.prototype = _prototype;
};
function F(name) {
  this.name = name;
  this.type = 'human';
  this.habits = ['dance', 'code'];
}
F.prototype.laugh = function() {
  console.log('heha!');
};
var InheritF = function() {
  F.apply(this, arguments);
};
util.inheritPrototype(InheritF, F);
InheritF.prototype.letsGo = function() {
  l('1,2,3,4');
};
var nono = new InheritF('nono');
nono.habits.push('read books');
l(nono.habits);
var nonono = new InheritF('nono');
l(nonono.habits);
//继承的方法千万种，万变不离其宗;


// 递归
function deepClone(obj){
  let objClone = Array.isArray(obj)?[]:{};
  if(obj && typeof obj==="object"){
      for(key in obj){
          if(obj.hasOwnProperty(key)){
              //判断ojb子元素是否为对象，如果是，递归复制
              if(obj[key]&&typeof obj[key] ==="object"){
                  objClone[key] = deepClone(obj[key]);
              }else{
                  //如果不是，简单复制
                  objClone[key] = obj[key];
              }
          }
      }
  }
  return objClone;
}    
let a=[1,2,3,4],
  b=deepClone(a);
a[0]=2;
console.log(a,b);

// JSON.stringify parse
function deepClone(obj){
  let _obj = JSON.stringify(obj),
      objClone = JSON.parse(_obj);
  return objClone
}    
let a=[0,1,[2,3],4],
  b=deepClone(a);
a[0]=1;
a[2][0]=1;
console.log(a,b);