## 一个H5开发的模版 V1

### 首先安装依赖
```bash
$ yarn install 或者 npm install

# 开发模式
$ yarn dev 或者 npm run dev
# 生产模式
$ yarn build 或者 npm run build
```

### 文件说明

```
app         存放开发的文件 html css js img audio

dist        开发环境或生产环境的文件

backup-lib  额外备用的一些库

gulpfile.js gulp流程逻辑
```

## 目录结构
```bash
---- css                                         //css
    ---- base                                    //存放公用级别较高的scss
    ---- libs                                    //存放插件的scss
    ---- pages                                   //每个页面的scss
    app.scss                                     //最后输出的scss
---- images                                      //图片
---- js                                          //js
      ---- lib                                   //模块的js库
      ---- pages                                 //每个页面的js
      $page.js                                   // 每个页面js
---- README.md                                   //It is me!
```

### 样式
> 每添加一个新页面$page，则在css/pages新建一个$page.scss，然后再app.scss里面引入。例如添加新页面index，则新建一个index.scss，然后在app.scss下

```scss
// app.scss
@import './base/reset.scss'; // 公共的
@import './pages/index.scss'; //首页的样式
```
> 关于css/libs下的scss 的文件，最后打包是在css目录下的。


### 页面
```bash
base.html                     0   基础组件

index.html                    1   高速车牌付

addCard.html                  2.0 添加车辆
uploadLicense.html            2.2 上传驾驶证
driveLicenseInfo.html         2.3 行驶证资料
sign.html                     2.4 签约
success.html                  2.5 签约完成页面

carDetails.html               3   车辆详情

help.html                     4.1 使用帮助
railwayIntro.html             4.2 支持路段
directionUse.html             4.3 使用说明
```
