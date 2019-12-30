/*
 * @Author: your name
 * @Date: 2019-12-30 21:09:44
 * @LastEditTime : 2019-12-30 21:30:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \package-AMD-CMD-CommonJS\code\rem.js
 */
(function(doc, win, designWidth, rem2px) {
  var docEl = win.document.documentElement;
  var resizeEvt = "orientationchange" in win ? "orientationchange" : "resize";
  var timer = null;
  var defaultFontSize = 16;

  (function getDefaultFontSize() {
    var p = doc.createElement("p");
    p.style.width = "1rem";
    p.style.display = "none";
    doc.head.appendChild(p);
    defaultFontSize = parseFloat(
      win.getComputedStyle(p, null).getPropertyValue("width")
    );
    p.remove();
  });
  var isLandscape = function() {
    return Math.abs(win.orientation === 90);
  };
  var refreshRem = function() {
    var width = docEl.clientWidth;
    if (!width) return;
    if (navigator.userAgent.indexOf("Windows") > -1) {
        docEl.style.fontSize = "50px";
    } else {
        if(isLandscape()) width /= 2;
        docEl.style.fontSize = width / designWidth * rem2px /defaultFontSize * 100 + '%'
    }

    var foo = function () {
        clearTimeout(timer);
        timer = setTimeout(refreshRem, 100);
    }
    refreshRem();
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, foo, false);
    doc.addEventListener('DOMContenrLoaded', foo, false);
    doc.addEventListener('load', foo, false);
  };
})(document, window, 750, 100);
