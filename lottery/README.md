# wheelSurf:轮播抽奖🎰

## 概要

一款简单便捷用于旋转轮播抽奖的model分享给大家。

![exampleImg](https://github.com/TianYouH/WheelSurf/blob/69a2a4df022c946ad7e2ad4fcd3a2b492e083143/assets/images/test.gif?raw=true)

（PS：示例图和下方代码布局不同，各位根据自己需求进行调整）

## 代码

> 依赖库：jQuery
>
> [example](https://tianyouh.github.io/WheelSurf/index.html)

### index.html

```html
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>无标题文档</title>
    <link rel="stylesheet" href="./style.css">
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
</head>

<body>
    <div id="turntable-box">
        <div class="gift gift1">1</div>
        <div class="gift gift2">2</div>
        <div class="gift gift3">3</div>
        <div class="gift gift0">8</div>
        <div>
            <button style="width:100px; height:100px;">com on</button>
        </div>
        <div class="gift gift4">4</div>
        <div class="gift gift7">7</div>
        <div class="gift gift6">6</div>
        <div class="gift gift5">5</div>
    </div>

    <script src="./main.js"></script>
</body>

</html>
```

### style.css

```css
#turntable-box {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    background-color: #dfdfdf;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
}
#turntable-box > div {
    width: 32%;
    height: 32%;
    border: 1px solid #000;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### main.js

```js
var stopStep = 1; //表示最终奖品位置  
var runT = null; //转动方法  
var step = -1; //计算转动的步数，控制转速和停止  
var during = 8; //转速,起始转速为8
var isRun = false; //是否正在运行，防止重复点击

$("button").click(function () {
    if (isRun) return;
    isRun = true;
    stopStep = Math.floor(Math.random() * 8 + 1);
    console.log('最后停止奖品位置', stopStep);
    runT = setTimeout(runF, 100);
});

function runF() {

    if (step >= (32 + stopStep)) { //设置转动多少圈(奖品的倍数),当进行步数step>=(最大步数+奖品位置步数)，停止动画，用户获得奖品
        $(".gift" + (step % 8)).css("background-color", "#F00");
        step = stopStep; //当前奖品停止位置赋值给step,用于下次开始抽奖起始使用
        isRun = false;
        clearTimeout(runT); //停止转动  
        alert("you get" + step);
        return;
    }

    if (step >= (24 + stopStep)) { //在即将结束转动前减速  
        during += 1;
    } else { //控制中间转速
        if (during <= 2) { //保证最低转速
            during = 2;
        }
        during--;
    }

    step++;

    $(".gift").each(function () {
        $(this).css("background-color", "#FFF");
    });

    $(".gift" + (step % 8)).css("background-color", "#F00");

    runT = setTimeout(runF, during * 50);
}
```

[Github](https://github.com/TianYouH/WheelSurf)
