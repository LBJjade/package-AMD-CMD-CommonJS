/*
 * @Descripttion: 
 * @version: 
 * @Author: libingjian
 * @Date: 2019-08-09 16:05:45
 * @LastEditors: libingjian
 * @LastEditTime: 2019-08-26 16:52:49
 */
// 工厂模式
// 工厂模式就是造一个模子产生一个个对象。
function createPerson(name , age ,job){
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function(){
    alert(this.name);
  };
  return o;
}

var person1 = createPerson('nicholas' , 29 , 'software engineer');
var person2 = createPerson('greg' , 27 , 'doctor');


// 构造函数模式
// 下面使用构造函数创建特定类型的对象。这里是Person类型：

function Person(name , age , job){ // 注意构造函数的首字母为大写哦
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		alert(this.name);
	}
}

var person1 = new Person('nicholas' , 29 , 'software engineer');
var person2 = new Person('greg' , 27 , 'doctor');

alert(person1.constructor == Person); // true 可以理解为person1的创造者是Person，也就是对象的类型Person


// 原型模式
// 创建的每个函数都有一个prototype（原型）属性，这个属性就是一个指针，指向一个对象，而这个对象的用途就是包含可以由特定类型的所有实例共享的属性和方法。

function Person(){
}
Person.prototype.name = 'nicholas';
Person.prototype.age = 29;
Person.prototype.sayName = function(){
	alert(this.name);
};

var person1 = new Person();
person1.sayName(); // nicholas

var person2 = new Person();
person2.sayName(); // nicholas

console.log(person1.sayName == person2.sayName); // true
