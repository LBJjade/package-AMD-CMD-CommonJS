/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 10:05:55
 * @LastEditTime: 2019-10-18 14:10:53
 * @LastEditors: Please set LastEditors
 */
// 原型链继承--基本模式
function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function() {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}

/*
 * 继承实现方式：通过创建 SuperType 的实例，并将该实例赋给 SubType.prototype
 * 实现本质：重写原型对象，代之以一个新类型的实例
 */
SubType.prototype = new SuperType();

// 添加新方法
SubType.prototype.getSubValue = function() {
  return this.subproperty;
};

// 创建实例并操作
var instance = new SubType();

alert(instance.getSuperValue()); // true

// instance.constructor 现在指向的是 SuperType
alert(instance.constructor); // SuperType

/*
 * 所有函数的默认原型都是 Object 的实例，因此默认原型都会包含一个内部指针，指向 Object.prototype
 */
// SuperType 继承了 Object，能够调用保存在 Object.prototype 中的那个方法
alert(intance.toString()); //"[object Object]"

/*
 * 确定原型和实例的关系
 */
// 方法1：使用 instanceof 操作符
alert(instance instanceof Object); // true
alert(instance instanceof SuperType); // true
alert(instance instanceof SubType); // true

// 方法2：使用 isPrototypeOf() 方法
alert(Object.prototype.isPrototypeOf(instance)); // true
alert(SuperType.prototype.isPrototypeOf(instance)); // true
alert(SubType.prototype.isPrototypeOf(instance)); // true



function SuperType () {
    this.property =  true;
}

/*
 * 谨慎地定义方法：给原型添加方法的代码一定要放在替换原型的语句之后
 */
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

// 继承了 SuperType
SubType.prototype = new SuperType();

// 添加新方法
SubType.prototype.getSubValue = function() {
    return this.subproperty;
}

// 重写超类型中的方法，会屏蔽原来的那个方法
SubType.prototype.getSuperValue = function() {
    return false;
}

var instance = new SubType();
alert(instance.getSuperValue());    // false


/*
 * 不能使用对象字面量创建原型方法，因为这样会重写原型链
 */
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

// 继承了 SuperType
SubType.prototype = new SuperType();

/*
 * 使用字面量添加新方法，会导致上一行代码无效
 * 现在 SubType.prototype 是一个 Object 的实例
 */
SubType.prototype = {
    getSubValue : function() {
        return this.subproperty;
    },

    someOtherMethod : function() {
        return false;
    }
}

var instance = new SubType();
console.log(SubType.prototype); // Object {}
alert(instance.getSuperValue());    // error!

/*
 * 原型链的问题
 */
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {
}

// 继承了 SuperType
SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);  // ["red", "blue", "green", "black"]

var instance2 = new SubType();
console.log(instance2.colors);  // ["red", "blue", "green", "black"]