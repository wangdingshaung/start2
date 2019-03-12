/**
 * Created by Administrator on 2019/2/21 0021.
 */
//总路由
const EXPRESS=require("express");
const ROUTER=EXPRESS.Router();
const GREATEGOODS=require("./cl");
const USERSHOW=require("./laowang");
//引入博客的路由
const BOKE=require("./bokeRouter");
//主页
const HOME=require("./home");
//引入订单管理的路由
const ORDERMANAMGE=require("./orderManage");

ROUTER.use("/createGoods",GREATEGOODS);
// 博客
ROUTER.use("/allBoke",BOKE);
//主页
ROUTER.use("/homeshow",HOME);
//订单管理
ROUTER.use("/ordermanage",ORDERMANAMGE);
const GOODSLIST=require("./goodslist");
ROUTER.use("/goodsList",GOODSLIST);


//会员管理
ROUTER.use("/user",USERSHOW);



module.exports=ROUTER;