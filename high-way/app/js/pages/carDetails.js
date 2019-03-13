// 滑动效果
//侧滑显示删除按钮
var expansion = null; //是否存在展开的list
var container = document.querySelectorAll('.list li a');
for(var i = 0; i < container.length; i++){
    var x, y, X, Y, swipeX, swipeY;
    container[i].addEventListener('touchstart', function(event) {
        x = event.changedTouches[0].pageX;
        y = event.changedTouches[0].pageY;
        swipeX = true;
        swipeY = true ;
        if(expansion){   //判断是否展开，如果展开则收起
            expansion.className = "";
        }
    });
    container[i].addEventListener('touchmove', function(event){

        X = event.changedTouches[0].pageX;
        Y = event.changedTouches[0].pageY;
        // 左右滑动
        if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0){
            // 阻止事件冒泡
            event.stopPropagation();
            if(X - x > 10){   //右滑
                event.preventDefault();
                this.className = "";    //右滑收起
            }
            if(x - X > 10){   //左滑
                event.preventDefault();
                this.className = "swipeleft";   //左滑展开
                expansion = this;
            }
            swipeY = false;
        }
        // 上下滑动
        if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
            swipeX = false;
        }
    });
}

// 日期选择器
new Picker(document.querySelector('.js-month-picker'), {
  format: 'YYYY-MM'
});
// 日期选择器
new Picker(document.querySelector('.js-full-picker'), {
  format: 'DD'
});

$(document)
/*
* 监听年月
*/
.on('change', '.js-month-picker', function () {
  $('.js-full-picker').val('') // 重置日
  console.log('年-月：', $('.js-month-picker').val())
  console.log('日', $('.js-full-picker').val() || '全部')
})
/*
* 监听日
*/
.on('change', '.js-full-picker', function () {
  console.log('年-月：', $('.js-month-picker').val())
  console.log('日', $('.js-full-picker').val())
})