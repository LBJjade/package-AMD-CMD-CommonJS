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
