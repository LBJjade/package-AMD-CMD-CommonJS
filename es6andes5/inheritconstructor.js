/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 14:19:38
 * @LastEditTime: 2019-10-18 14:19:38
 * @LastEditors: your name
 */
// 借用构造函数实现继承
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {
    // 继承了 SuperType
    SuperType.call(this);   // 在新创建的对象上执行构造函数
}

var instance1 = new SubType();

instance1.colors.push("black");
console.log(instance1.colors);  // ["red", "blue", "green", "black"]

var instance2 = new SubType();
console.log(instance2.colors);  // [red", "blue", "green"]