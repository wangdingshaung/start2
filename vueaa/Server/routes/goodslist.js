/**
 * Created by Administrator on 2019/2/22.
 */
const EXPRESS=require("express");
const ROUTER=EXPRESS.Router();
const GOODSLIST=require("../controller/goodslistContro");
ROUTER.get("/list",GOODSLIST.list);   //商品路由
ROUTER.get("/updateData",GOODSLIST.updateData);

module.exports=ROUTER;