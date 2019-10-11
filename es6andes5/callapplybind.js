/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 21:05:54
 * @LastEditTime: 2019-10-10 21:08:56
 * @LastEditors: Please set LastEditors
 */
var xw = {
    name : "小王",
    gender : "男",
    age : 24,
    say : function() {
            alert(this.name + " , " + this.gender + " ,今年" + this.age);                                
    }
}
var xh = {
    name : "小红",
    gender : "女",
    age : 18
}
xw.say();

xw.say.call(xh);
xw.say.apply(xh);
xw.say.bind(xh)();


var xw = {
    name : "小王",
    gender : "男",
    age : 24,
    say : function(school,grade) {
            alert(this.name + " , " + this.gender + " ,今年" + this.age + " ,在" + school + "上" + grade);                                
    }
}
var xh = {
    name : "小红",
    gender : "女",
    age : 18
}

xw.say.call(xh,"实验小学","六年级");  
xw.say.apply(xh,["实验小学","六年级郑州牛皮癣医院"]);
xw.say.bind(xh,"实验小学","六年级")();
xw.say.bind(xh)("实验小学","六年级");