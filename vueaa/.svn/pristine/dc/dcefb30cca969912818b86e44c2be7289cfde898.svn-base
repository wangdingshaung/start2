/**
 * Created by Administrator on 2019/2/22.
 */
const DBCONFIG = require("../config/dbconfig");
const PERPAGE=8;
let bokeController = {
    //渲染列表
    showblog(req,resp){
        let params = [];
        let mysql=`SELECT * FROM boke `
        if(req.query.adg!==undefined&&req.query.adg!==''){
            params.push("%"+req.query.adg+"%");
            mysql+=` where b_author LIKE ? `
        }
        mysql+=` ORDER BY b_id DESC limit ?,? `
        params.push ((req.query.page-1)*PERPAGE);
        params.push(PERPAGE);
        DBCONFIG.connect(mysql,params,
            (err,data)=>{
                if(!err){
                    resp.send(data)
                }else {
                    console.log(err)
                }
            }
        )
    },
    //删除
    shanchushuju(req,resp){
        // console.log(req.query[0]); //获取前台传过来的id
        DBCONFIG.connect("DELETE FROM boke WHERE b_id=?",[req.query[0]],
            (err,data)=>{
                if(!err){
                    // console.log(data);
                    resp.send("删除成功");
                }else{
                    resp.send(err.message);
                }
            }
        )
    },
    // 新增博客
    addblog(req,resp){
        // console.log(req.body,"aaaaa");
        // console.log(req.file);
        let pathname = "images/uploads/"+req.file.filename;//封面图片路径
        // console.log(pathname);
        DBCONFIG.connect("INSERT INTO  boke(b_content , b_name, b_img ,b_date,b_author) VALUES (?,?,?,DATE_FORMAT(NOW(),'%Y-%m-%d %H:%i'),?)",
            [req.body.content,req.body.title,pathname,req.body.author],
            (err,data)=>{
                if(!err){
                    resp.redirect("http://localhost:8080/#/xurun")
                }else {
                    console.log(err)
                }
            }
        )
    },
    // 修改数据
    xiugai(req,resp){
        DBCONFIG.connect("UPDATE  boke SET b_name=?,b_date=? WHERE b_id=?",
            [req.query.gainame,req.query.gaidate,Number(req.query.id)],
            (err,data)=>{
                if(!err){
                    resp.send(data);
                }else {
                    console.log(err)
                }
            }
        )

    },
    //获取分页
    gettotal(req,resp){
        let mysql=`SELECT count(*) as 'mytotal' FROM boke `;
        let params=[];
        if(req.query.adg!==undefined&&req.query.adg!==''){
            params.push("%"+req.query.adg+"%");
            mysql+=`where b_author LIKE ? `
        }
        DBCONFIG.connect(mysql,
            params,
            (err,data)=>{
                if(!err){
                    let resule = Math.ceil((data[0].mytotal)/PERPAGE);
                    // console.log(resule)
                    resp.send(200,resule);
                }else {
                    console.log(err)
                }
            }
        )
    },

};
module.exports=bokeController;


