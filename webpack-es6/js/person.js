/*
 * @Author: your name
 * @Date: 2019-11-28 21:14:56
 * @LastEditTime: 2019-11-29 10:51:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \package-AMD-CMD-CommonJS\webpack-es6\js\person.js
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    return `我是${this.name},我今年${this.age}岁了。`;
  }
}

export default Person;
