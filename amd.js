(function() {
    // 定义一个局部的difine;
    var define;
    //我偷偷加了个全局变量，好调试啊;
    window.modules = {
    };
    //通过一个名字获取绝对路径比如传"xx.js"会变成"http://www.mm.com/"+ baseUrl + "xx.html";
    var getUrl = function(src) {};
    //动态加载js的模块;
    var loadScript = function(src) {};
    //获取根路径的方法, 一般来说我们可以通过config.baseUrl配置这个路径;
    var getBasePath = function() {};
    //获取当前正在加载的script标签DOM节点;
    var getCurrentNode = function() {};
    //获取当前script标签的绝对src地址;
    var getCurrentPath = function() {};
    //加载define或者require中的依赖, 封装了loadScript方法;
    var loadDpt = function(module) {};
    //这个是主要模块, 完成了加载依赖, 检测依赖等比较重要的逻辑
    var checkDps = function() {};
    定义了define这个方法
    define = function(deps, fn, name) {};
    window.define = define;
    //require是封装了define的方法, 就是多传了一个参数而已;
    window.require = function() {
        //如果是require的话那么模块的名字就是一个不重复的名字，避免和define重名;
        window.define.apply([], Array.prototype.slice.call(arguments).concat( "module|"+setTimeout(function() {},0) ));
    };
});