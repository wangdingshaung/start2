/**
 * Created by Administrator on 2019/2/21.
 */
const EXPRESS=require("express");
const ROUTER=EXPRESS.Router();
const GOODS = require("../controller/homeController");
ROUTER.get("/home",GOODS.home);
ROUTER.get("/huiyuan",GOODS.huiyuan);
ROUTER.get("/jidi",GOODS.jidi);
ROUTER.post("/myuser",GOODS.myuser);


module.exports=ROUTER;