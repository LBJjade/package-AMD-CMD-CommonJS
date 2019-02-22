var Person = function(name, age) {
  this.name = name;
  this.age = age;

  this.sayName = function() {
    console.log(this.name);
  };
};

var Person = function(name, age) {
  //共有属性
  this.name = name;
  this.age = age;
  //共有方法
  this.sayName = function() {
    console.log(this.name);
  };
};

var Person = function(name, age) {
  //共有属性
  this.name = name;
  //共有方法
  this.sayName = function() {
    console.log(this.name);
  };
  //静态私有属性(只能用于内部调用)
  var home = 'China';
  //静态私有方法(只能用于内部调用)
  function sayHome() {
    console.log(home);
  }
  //构造器
  this.setAge = function(age) {
    console.log(age + 12);
  };
  this.setAge(age);
};
//静态方法（只能被类来访问）
Person.sayAge = function() {
  console.log('your age is 12');
};
//静态属性（只能被类来访问）
Person.drink = 'water';
//静态共有方法（类和实例都可以访问）
Person.prototype.sayWord = function() {
  console.log('ys is a boy');
};

var Person = (function() {
  //静态私有属性方法
  var home = 'China';
  function sayHome(name) {
    console.log(name + "'s home in " + home);
  }
  //构造函数
  function _person(name, age) {
    var _this = this;
    //构造函数安全模式，避免创建时候丢掉new关键字
    if (_this instanceof _person) {
      //共有属性, 方法
      _this.name = name;
      _this.getHome = function() {
        //内部访问私有属性，方法
        sayHome(_this.name);
      };
      _this.test = sayHome; //用于测试
      //构造器
      _this.setAge = (function(age) {
        _this.age = age + 12;
      })(age);
    } else {
      return new _person(name, age);
    }
  }
  //静态共有属性方法
  _person.prototype = {
    constructor: _person,
    drink: 'water',
    sayWord: function() {
      console.log('ys is a boy');
    },
  };
  return _person;
})();

var p1 = new Person('ys', 12);
p1.getHome(); //ys's home in China
console.log(p1.age); //24

var p2 = Person('ys', 12);
p2.getHome(); //ys's home in China
console.log(p2.age); //24

console.log(p2.test == p1.test); //true, 证明静态私有变量共享性

// 模版语法
let templateStr = 'i am {{name}},age {{age}},job {{job}} ';
let data = {
  name: 'xbd',
  age: 18,
  job: 'CTO',
};

let testString = 'study the replace function of javascript';
//只替换了第一个a
console.log(testString.replace('a', 'A'));

let templateStr = 'i am {{name}},age {{age}},job {{job}} ';
function templateFunc(str, data) {
  let computed = str.replace(/\{\{(\w+)\}\}/g, function(match, key) {
    return data[key];
  });
  return computed;
}
console.log(templateFunc(templateStr, data));

// this 指向

var a = 1;
var obj1 = {
  a: 2,
  fn: function() {
    console.log(this.a);
  },
};
obj1.fn(); //2

function fn1() {
  console.log(this); //window
}
fn1();

function fn1() {
  function fn2() {
    console.log(this); //window
  }
  fn2();
}
fn1();

var a = 1;
var obj1 = {
  a: 2,
  fn: function() {
    console.log(this.a);
  },
};
var fn1 = obj1.fn;
fn1(); //1

function Person(name, age) {
  // 这里的this都指向实例
  this.name = name;
  this.age = age;
  this.sayAge = function() {
    console.log(this.age);
  };
}

var dot = new Person('Dot', 2);
dot.sayAge(); //2

// call apply bind

var arr = [1, 2, 3, 89, 46];
var max = Math.max.call(null, arr[0], arr[1], arr[2], arr[3], arr[4]); //89

var obj = {
  message: 'My name is: ',
};

function getName(firstName, lastName) {
  console.log(this.message + firstName + ' ' + lastName);
}

getName.call(obj, 'Dot', 'Dolby');

// apply
var arr = [1, 2, 3, 89, 46];
var max = Math.max.apply(null, arr); //89

var obj = {
  message: 'My name is: ',
};

function getName(firstName, lastName) {
  console.log(this.message + firstName + ' ' + lastName);
}

getName.apply(obj, ['Dot', 'Dolby']); // My name is: Dot Dolby

// bind
var obj = {
  name: 'Dot',
};

function printName() {
  console.log(this.name);
}

var dot = printName.bind(obj);
console.log(dot); // function () { … }
dot(); // Dot

function fn(a, b, c) {
  console.log(a, b, c);
}
var fn1 = fn.bind(null, 'Dot');

fn('A', 'B', 'C'); // A B C
fn1('A', 'B', 'C'); // Dot A B
fn1('B', 'C'); // Dot B C
fn.call(null, 'Dot'); // Dot undefined undefined

var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var increment = add(1);
var addTen = add(10);

increment(2);
// 3

addTen(2);
// 12

if (!Function.prototype.bind) {
  Function.prototype.bind = function() {
    var self = this, // 保存原函数
      context = [].shift.call(arguments), // 保存需要绑定的this上下文
      args = [].slice.call(arguments); // 剩余的参数转为数组
    return function() {
      // 返回一个新函数
      self.apply(context, [].concat.call(args, [].slice.call(arguments)));
    };
  };
}

var arr = [1, 2, 3, 89, 46];
var max = Math.max.apply(null, arr); //89
var min = Math.min.apply(null, arr); //1
// 将类数组转化为数组

var trueArr = Array.prototype.slice.call(arrayLike);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var total = [].push.apply(arr1, arr2); //6
// arr1 [1, 2, 3, 4, 5, 6]
// arr2 [4,5,6]

function isArray(obj) {
  return Object.prototype.toString.call(obj) == '[object Array]';
}
isArray([]); // true
isArray('dot'); // false

function Person(name, age) {
  // 这里的this都指向实例
  this.name = name;
  this.age = age;
  this.sayAge = function() {
    console.log(this.age);
  };
}
function Female() {
  Person.apply(this, arguments); //将父元素所有方法在这里执行一遍就继承了
}
var dot = new Female('Dot', 2);



