/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 20:47:59
 * @LastEditTime: 2019-10-10 21:02:22
 * @LastEditors: Please set LastEditors
 */
export function debounce(fn, delay) {
  // 记录上一次的延时器
  var timer = null;
  var delay = delay || 200;
  return function() {
    var args = arguments;
    var that = this;
    // 清除上一次延时器
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(that, args);
    }, delay);
  };
}

export function throttle(fn, delay) {
  var lastTime;
  var timer;
  var delay = delay || 200;
  return function() {
    var args = arguments;
    // 记录当前函数触发的时间
    var nowTime = Date.now();
    if (lastTime && nowTime - lastTime < delay) {
      clearTimeout(timer);
      timer = setTimeout(function() {
        // 记录上一次函数触发的时间
        lastTime = nowTime;
        // 修正this指向问题
        fn.apply(this, args);
      }, delay);
    } else {
      lastTime = nowTime;
      fn.apply(this, args);
    }
  };
}
