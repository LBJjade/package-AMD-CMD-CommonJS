/*
 * @Author: your name
 * @Date: 2019-11-28 21:14:41
 * @LastEditTime: 2019-11-29 10:51:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \package-AMD-CMD-CommonJS\webpack-es6\js\index.js
 */
import Person from "./Person.js";

let p = new Person("张三", 20);
document.write(p.say());
