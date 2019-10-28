/*
 * @Author: your name
 * @Date: 2019-10-23 17:26:35
 * @LastEditTime: 2019-10-24 11:09:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \package-AMD-CMD-CommonJS\es6andes5\simpleFunction.js
 */
// 1、翻转字符串
function reverseString(str) {
  str = str
    .split("")
    .reverse()
    .join("");
  return str;
}
reverseString("hello");

// 2、计算一个整数的阶乘
// 例子（如果用字母n来代表一个整数，阶乘代表着所有小于或等于n的整数的乘积。阶乘通常简写成 n! ； 例如: 5! = 1 * 2 * 3 * 4 * 5 = 120）
//    要求：factorialize(0) 应该返回 1.

function factorialize(num) {
  if (num < 1) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}
factorialize(5);

// 5、确保字符串的每个单词首字母都大写，其余部分小写。
function titleCase(str) {
  var astr = str.toLowerCase().split(" ");
  for (var i = 0; i < astr.length; i++) {
    astr[i] = astr[i][0].toUpperCase() + astr[i].substring(1, astr[i].length);
  }
  var string = astr.join(" ");
  return string;
}
titleCase("I'm a little tea pot");

//结果：I'm A Little Tea PotF

// 如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。
// 注意需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。

function palindrome(str) {
  astr = str.replace(/[^0-9A-Za-z]/g, "").toLowerCase();
  bstr = astr
    .split("")
    .reverse()
    .join("");
  if (astr === bstr) {
    return true;
  } else {
    return false;
  }
}
palindrome("eye");

//正则表达式还可以是：
astr = str
  .replace(
    /[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,
    ""
  )
  .toLowerCase();
