//下载express项目 npm install express --save
const EXPRESS=require("express");
//创建express实例对象
const APP=EXPRESS();
//引入日志模块 下载morgan    npm install morgan --save
const LOGGER=require("morgan");
//引入主路由模块
 const ROUTER=require("./routes/indexRouter");
//npm install express-session --save
const SESSION=require("express-session");
//引入cook模块   npm install cookie-parser --save
const COOKIEPARSER=require("cookie-parser");
//处理post数据模块
const BODYPARSER=require("body-parser");
//富文本编辑器
const ueditor=require("ueditor");
const path=require("path");

//日志模块-记录每个请求信息，需要配置项的前方
APP.use(LOGGER('dev'));

//session和cookie配置
APP.use(COOKIEPARSER());
APP.use(SESSION({
    name:"myitem",
    secret:"123",
    cookie:{maxAge:50000000},
    rolling:true,
    resave:true,
    saveUninitialized:true
}));
//post数据的读取
APP.use(BODYPARSER.json());//设置请求类型为application/json
APP.use(BODYPARSER.urlencoded({extended:false,limit:"50mb"}));//一般的form表单
//配置项 配置静态资源
APP.use(EXPRESS.static(__dirname+"/public"));
//富文本编辑器
APP.use("ueditor/ue",ueditor(path.join(__dirname,'public'),function (req,res,next) {
    if(req.query.action === 'uploadimage'){

        // 这里你可以获得上传图片的信息
        var foo = req.ueditor;
        console.log(foo.filename); // exp.png
        console.log(foo.encoding); // 7bit
        console.log(foo.mimetype); // image/png

        // 下面填写你要把图片保存到的路径 （ 以 path.join(__dirname, 'public') 作为根路径）
        var img_url = '/images/cjtimg/blogimg';
        res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage'){
        var dir_url = '/images/cjtimg/blogimg'; // 要展示给客户端的文件夹路径
        res.ue_list(dir_url) // 客户端会列出 dir_url 目录下的所有图片
    }
    // 客户端发起其它请求
    else {

        res.setHeader('Content-Type', 'application/json');
        // 这里填写 ueditor.config.json 这个文件的路径
        //修改地址为'/ueditor/nodejs/config.json'
        res.redirect('/ueditor/nodejs/config.json');
    }
}));
//交给路由区处理数据类的请求
APP.use(ROUTER);
//监听端口

APP.listen(8888,function () {
    console.log("服务器已启动")
});