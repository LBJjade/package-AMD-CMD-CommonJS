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