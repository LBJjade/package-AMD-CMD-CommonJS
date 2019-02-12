var Person = function(name, age){
    this.name = name;
    this.age = age;

    this.sayName = function(){
        console.log(this.name);
    };
}

var Person = function(name, age){
    //共有属性
    this.name = name;
    this.age = age;
    //共有方法
    this.sayName = function(){
        console.log(this.name);
    };
}

var Person = function(name, age){
    //共有属性
    this.name = name;
    //共有方法
    this.sayName = function(){
        console.log(this.name);
    };
    //静态私有属性(只能用于内部调用)
    var home = "China";
    //静态私有方法(只能用于内部调用)
    function sayHome(){
        console.log(home);
    }
    //构造器
    this.setAge = function(age){
        console.log(age + 12);
    };
    this.setAge(age);
}
//静态方法（只能被类来访问）
Person.sayAge = function(){
    console.log("your age is 12");
}
//静态属性（只能被类来访问）
Person.drink = "water";
//静态共有方法（类和实例都可以访问）
Person.prototype.sayWord = function(){
    console.log("ys is a boy");
}


var Person = (function(){
    //静态私有属性方法
    var home = "China";
    function sayHome(name){
        console.log(name + "'s home in " + home);
    }
    //构造函数
    function _person(name, age){
        var _this = this;
        //构造函数安全模式，避免创建时候丢掉new关键字
        if(_this instanceof _person){
            //共有属性, 方法
            _this.name = name;
            _this.getHome = function(){
                //内部访问私有属性，方法
                sayHome(_this.name);
            };
            _this.test = sayHome; //用于测试
            //构造器
            _this.setAge = function(age){
                _this.age = age + 12;
            }(age);
        }else{
            return new _person(name, age);
        }
    }
    //静态共有属性方法
    _person.prototype = {
        constructor: _person,
        drink: "water",
        sayWord: function(){
            console.log("ys is a boy");
        }
    }
    return _person;
})();


var p1 = new Person("ys", 12);
p1.getHome();                   //ys's home in China
console.log(p1.age);            //24     

var p2 = Person("ys", 12);
p2.getHome();                   //ys's home in China
console.log(p2.age);            //24   

console.log(p2.test == p1.test);  //true, 证明静态私有变量共享性