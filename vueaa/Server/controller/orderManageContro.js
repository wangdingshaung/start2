/**
 * Created by Administrator on 2019/2/22 0022.
 */
const DBCONFIG=require("../config/dbconfig");
const PERPAGE=6;
let orderCOntroller={
    getData(req,resp){
        let oID=req.query.oID;
        let userName=req.query.userName;
        let timeQuantum=req.query.timeQuantum
        let param=[];
        let mysql=`SELECT *,od1.o_id AS "myOid",(SELECT SUM(od_num*price) FROM goods,t_orderdetail 
                        WHERE t_orderdetail.g_id=goods.g_id AND t_orderdetail.o_id=t_order.o_id
                      GROUP BY o_id) AS 'mysummati'
                       FROM   t_orderdetail od1 LEFT JOIN t_order 
                       ON od1.o_id=t_order.o_id LEFT JOIN goods ON 
                       goods.g_id=od1.g_id LEFT JOIN t_user 
                       ON t_order.u_id=t_user.u_id  JOIN (SELECT DISTINCT o_id FROM t_orderdetail 
                       `
        mysql+=`  limit ?,? ) od2 ON od1.o_id=od2.o_id where 1=1  `;
        param.push((req.query.page-1)*PERPAGE);
        param.push(PERPAGE);
         if(oID!==""&&oID!==undefined){
            mysql+=`  and t_order.o_id like ?`;
            param.push("%"+oID+"%")
         }
         if(userName!==""&&userName!==undefined){
             mysql+=`   and username like ?`
             param.push("%"+userName+"%")
         }
        if(timeQuantum!==undefined){
            if(timeQuantum[0]!==""&&timeQuantum[0]!==undefined){
                mysql+=` and  DATE_FORMAT(o_time,"%Y-%m-%d") BETWEEN ? and ?`;
                param.push(timeQuantum[0])
                param.push(timeQuantum[1])
            }
        }
    DBCONFIG.connect(mysql,param,
        (err,data)=>{
        if(!err){
            resp.send(data)
        }else {

            resp.send(err.message)
        }
        })
    },
    showPage(req,resp){
        let oID=req.query.oID;
        let userName=req.query.userName;
        let timeQuantum=req.query.timeQuantum;
        let param=[];
        let mysql=`SELECT count(*) as 'mycount' FROM t_order,t_user WHERE t_user.u_id=t_order.u_id  `
        if(oID!==""&&oID!==undefined){
            mysql+=` and t_order.o_id=?`;
            param.push(oID)
        }
        if(userName!==""&&userName!==undefined){
            mysql+=` and username=?`;
            param.push(userName)
        }
        console.log(timeQuantum);
        if(timeQuantum!==undefined){
            if(timeQuantum[0]!==""&&timeQuantum[0]!==undefined){
                mysql+=` and  DATE_FORMAT(o_time,"%Y-%m-%d") BETWEEN ? and ?`;
                param.push(timeQuantum[0]);
                param.push(timeQuantum[1])
            }
        }
        mysql+=` ORDER BY t_order.o_id`;
        DBCONFIG.connect(mysql,param,
            (err,data)=> {
                if (!err) {
                    let result=Math.ceil(data[0].mycount/PERPAGE);
                    resp.send(200,result)
                } else {
                    console.log(err.message);
                    resp.send(err.message)
                }
            })
    },
    updataGoodsState(req,resp){
        let param=[];
        let mysql= `update t_order set goodState=1 where o_id in (`;
        let question=" ? ";
        let myIDArry=req.query.idArry;
         param.push(Number(myIDArry[0]));
        for(let i=1;i<myIDArry.length;i++){
            question+=' , ?';
            param.push(Number(myIDArry[i]))
        }
         mysql+=question+" )"
        console.log(mysql)
        console.log(param)
        DBCONFIG.connect(mysql,param,(err,data)=>{
            if(!err){
                console.log(data)
                resp.send("发货成功")
            }else {
                console.log(err.message)
                resp.send(err.message)
            }
        })
    },
    modifDate(req,resp){
        DBCONFIG.connect(`UPDATE t_order SET u_name=? ,u_tel=?,address=? WHERE o_id=?`,req.query.mycent,(err,data)=>{
            if(!err){
                resp.send("修改成功")
            }else {
                resp.send(err.message)
            }
        })
    }
};
module.exports=orderCOntroller;
