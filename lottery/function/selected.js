function getResult(arr){
    var leng = 0;
    for(var i=0; i<arr.length; i++){
        leng+=arr[i]                                     //获取总数
    }
    for(var i=0; i<arr.length; i++){
        var random = parseInt(Math.random()*leng);       //获取 0-总数 之间的一个随随机整数
        if(random<arr[i]){
            return i                                     //如果在当前的概率范围内,得到的就是当前概率
        }
        else {
            leng-=arr[i]                                 //否则减去当前的概率范围,进入下一轮循环
        }
    }
}