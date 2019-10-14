/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 17:23:31
 * @LastEditTime: 2019-10-12 18:00:13
 * @LastEditors: Please set LastEditors
 */
if (true) {
  // TDZ开始
  tmp = "abc"; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}

// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}


const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
