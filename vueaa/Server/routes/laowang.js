/**
 * Created by Administrator on 2019/2/22 0022.
 */
const EXPRESS=require("express");
const ROUTER=EXPRESS.Router();
const USER = require("../controller/userController");
ROUTER.get("/usershow",USER.add);
ROUTER.get("/suoshow",USER.suosuo);
ROUTER.get("/delshow",USER.delshow);


module.exports=ROUTER;