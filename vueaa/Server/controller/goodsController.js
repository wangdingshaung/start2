/**
 * Created by Administrator on 2019/2/21.
 */
const DBCONFIG = require("../config/dbconfig");

let goodsController = {
//    遍历商品
    add(req,resp){
        console.log("打我的挖的",req.query);
        let tt ;
        tt = req.query.type.join(",");
        let zz;
        if (!req.query.delivery){
            zz = 1;
        }else {
            zz = 0
        }
            // console.log(JSON.parse(req.query.num[0]).response);
            DBCONFIG.connect("SELECT classid FROM goods_class WHERE c_imgpath=?",
                [JSON.parse(req.query.num[0]).response],
                (err,data)=>{
                console.log(data[0].classid);
                    DBCONFIG.connect("INSERT INTO goods values(null,?,?,?,?,?,?,?,null,null,null,null,null,null,?,null,null,null,null,null,null,?,?,?,?,?,?)",
                        [data[0].classid,req.query.name,req.query.price,req.query.number,req.query.decoration,tt,JSON.parse(req.query.num[0]).response,req.query.desc,req.query.component1,req.query.component2,req.query.component3,req.query.component4,zz,req.query.ab],
                        (err1,data1)=>{
                            if(!err1){
                                resp.send("添加成功");
                            }else {
                                console.log(err1)
                            }
                        }
                    )
                }
            );



    },
    tupian(req,resp){
        console.log(req.file.path);
        let lujin = req.file.path.replace(/\\/g,"/");
        let uu = lujin.replace("public/","");
        console.log(uu);
        DBCONFIG.connect("INSERT INTO goods_class values(null,null,?)",
            [uu],
            (err,data)=>{
                if(!err){
                    resp.send(uu);
                }else {
                    console.log(err)
                }
            }
        )
    },
    myget(req,resp){
        // console.log(req.query.id);
        DBCONFIG.connect("SELECT g_name,price,g_number,decoration,g_fuzhi,goodsSrc,cf_num1,g_status,gtybe,g_biaoti1,g_biaoti2,g_biaoti3,g_biaoti4 FROM goods WHERE g_id =?",
            [req.query.id],
            (err,data)=>{
                if(!err){
                    console.log(data);
                    resp.send(data);
                }else {
                    console.log(err)
                }
            }
        )
    },
    xiugai(req,resp){
        console.log("进了修改的");
        console.log(req.query);
        let tt ;
        tt = req.query.type.join(",");
        let zz;
        if (req.query.delivery==='true'){
            console.log("进了if");
            zz = 0;
        }else {
            console.log("进了else");
            zz = 1
        }
        DBCONFIG.connect("UPDATE goods SET g_name=?,price=?,g_number=?,decoration=?,g_fuzhi=?,cf_num1=?,g_status=?,gtybe=?,g_biaoti1=?,g_biaoti2=?,g_biaoti3=?,g_biaoti4=? WHERE g_id = ?",
            [req.query.name,req.query.price,req.query.number,req.query.decoration,tt,req.query.desc,zz,Number(req.query.ab),req.query.component1,req.query.component2,req.query.component3,req.query.component4,Number(req.query.id)],
            (err,data)=>{
                if(!err){
                    resp.send("修改成功");
                }else {
                    console.log(err)
                }
            }
        )
    },
    mydelet(req,resp){
        console.log(req.query[0]);
        DBCONFIG.connect("DELETE FROM goods_class WHERE c_imgpath = ?",
            [req.query[0]],
            (err,data)=>{
                if(!err){
                    resp.send("删除成功");
                }else {
                    console.log(err)
                }
            }
        )
    },
    show(req,resp){
        DBCONFIG.connect("SELECT a_id,u_num,a_professional,a_content,img FROM activity t1,t_user t2 WHERE t1.u_id=t2.u_id",
            [],
            (err,data)=>{
                if(!err){
                    resp.send(data);
                }else {
                    console.log(err)
                }
            }
        )
    },
    hddelet(req,resp){
        console.log(req.query.id);
        DBCONFIG.connect("DELETE FROM activity WHERE a_id = ?",
            [req.query.id],
            (err1,data1)=>{
                DBCONFIG.connect("SELECT a_id,u_num,a_professional,a_content,img FROM activity t1,t_user t2 WHERE t1.u_id=t2.u_id",
                    [],
                    (err,data)=>{
                        if(!err){
                            resp.send(data);
                        }else {
                            console.log(err)
                        }
                    }
                )
            }
        )
    },
    adda(req,resp){
        console.log(req.file.path);
        console.log(req.body.user);
        console.log(req.body.name);
        console.log(req.body.content);
        let params=[]
        let lujin = req.file.path.replace(/\\/g,"/");
        let uu = lujin.replace("public/","");
        params.push("%"+req.body.user+"%")
        DBCONFIG.connect("SELECT u_id FROM t_user WHERE username LIKE ?",
            params,
            (err,data)=>{
            if(!err){
               let uid=data;
             if(uid.length==0){
                 resp.send("您输入的账户不存在");
                 console.log("您输入的账户不存在");
             }
             else {
                 resp.send("上传成功");
                 console.log(uid[0].u_id+"2");
                 console.log(req.body.name+"2");
                 console.log(req.body.content+"2");
                 console.log(uu+"2");
                     DBCONFIG.connect("INSERT INTO activity(a_id,u_id,a_professional,a_content,img) VALUES(null,?,?,?,?)",
                         [uid[0].u_id,req.body.name,req.body.content,uu],
                         (err,data)=>{
                             if(!err){
                                 console.log("上传成功")
                             }else {
                                 console.log(err)
                             }
                         }
                     )
             }
            }else {
                console.log(err)
            }
        })
    }
};
module.exports=goodsController;