/**
 * Created by Administrator on 2019/2/21.
 */
const EXPRESS=require("express");
const UPLOAD = require("../config/upload");
const ROUTER=EXPRESS.Router();
const GOODS = require("../controller/goodsController");
ROUTER.get("/add",GOODS.add);
ROUTER.get("/xiugai",GOODS.xiugai);
ROUTER.get("/get",GOODS.myget);
ROUTER.post("/tupian",UPLOAD.single("file"),GOODS.tupian);
ROUTER.get("/mydelet",GOODS.mydelet);
ROUTER.get("/show",GOODS.show);
ROUTER.get("/hddelet",GOODS.hddelet);
ROUTER.post("/addshow/",UPLOAD.single("file"),GOODS.adda);

module.exports=ROUTER;


