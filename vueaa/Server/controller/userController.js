/**
 * Created by Administrator on 2019/2/22 0022.
 */
const DBCONFIG = require("../config/dbconfig");
let userController = {
//    遍历商品
    add(req,resp){
        DBCONFIG.connect("SELECT u_id,username,tel, IFNULL(u_email,'-') AS u_email,time, IFNULL(u_num,'-') AS u_num,IFNULL(sex,'-') AS sex,u_date FROM t_user",
            [],
            (err,data)=>{
                if(!err){
                    resp.send(data);
                    // console.log("查询")
                    // console.log(data)
                }else {
                    console.log(err)
                }
            }
        )
    },
   suosuo(req,resp){
let params=[]
       params.push("%"+req.query.adg+"%")
        DBCONFIG.connect(
            "SELECT u_id,username,tel, IFNULL(u_email,'-') AS u_email,time, IFNULL(u_num,'-') AS u_num,IFNULL(sex,'-') AS sex,u_date FROM t_user WHERE username LIKE ?",
            params,
            (err,data)=>{
                if(!err){
                    resp.send(data);
                    // console.log("搜索")
                    // console.log(data)
                }else {
                    console.log(err)
                }
            }
        )
    },
   delshow(req,resp){
        DBCONFIG.connect(
            "DELETE FROM activity WHERE a_id=?",
            [],
            (err,data)=>{
                if(!err){
                    resp.send(data);
                    console.log("删除成功")
                    console.log(data)
                }else {
                    console.log(err)
                }
            }
        )
    }
};
module.exports=userController;