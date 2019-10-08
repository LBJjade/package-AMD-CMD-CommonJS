/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 16:04:20
 * @LastEditTime: 2019-10-08 16:07:31
 * @LastEditors: Please set LastEditors
 */
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call("abc");// "[object String]"
Object.prototype.toString.call(123);// "[object Number]"
Object.prototype.toString.call(true);// "[object Boolean]"

// **函数类型**
function fn(){
  console.log("test");
}
Object.prototype.toString.call(fn); // "[object Function]"
// **日期类型**
var date = new Date();
Object.prototype.toString.call(date); // "[object Date]"
// **数组类型**
var arr = [1,2,3];
Object.prototype.toString.call(arr); // "[object Array]"
// **正则表达式**
var reg = /[hbc]at/gi;
Object.prototype.toString.call(reg); // "[object RegExp]"

// 判断原生JSON对象
var isNativeJSON = window.JSON && Object.prototype.toString.call(JSON);
console.log(isNativeJSON);