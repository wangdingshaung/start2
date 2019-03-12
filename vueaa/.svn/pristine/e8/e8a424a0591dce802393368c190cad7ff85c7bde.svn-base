/**
 * Created by Administrator on 2019/2/22 0022.
 */
const DBCONFIG=require("../config/dbconfig");
const PERPAGE=8;
let orderCOntroller={
    getData(req,resp){
        let oID=req.query.oID;
        let userName=req.query.userName;
        let timeQuantum=req.query.timeQuantum
        let param=[];
        let mysql=`SELECT *,(SELECT SUM(od_num*price) FROM goods,t_orderdetail
                        WHERE t_orderdetail.g_id=goods.g_id AND t_orderdetail.o_id=t_order.o_id
                      GROUP BY o_id)AS 'mysummati' FROM t_order,t_user WHERE t_user.u_id=t_order.u_id `
         if(oID!==""&&oID!==undefined){
            mysql+=`  and t_order.o_id=?`;
            param.push(oID)
         }
         if(userName!==""&&userName!==undefined){
             mysql+=`   and username=?`
             param.push(userName)
         }
         if(timeQuantum[0]!==""&&timeQuantum[0]!==undefined){
             mysql+=` and  DATE_FORMAT(o_time,"%Y-%m-%d") BETWEEN ? and ?`
             param.push(timeQuantum[0])
             param.push(timeQuantum[1])
         }
         mysql+=` limit ?,?`;
        param.push((req.query.page-1)*PERPAGE);
        param.push(PERPAGE);
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
        let mysql=`SELECT count(*) as 'mycount' FROM t_order,t_user WHERE t_user.u_id=t_order.u_id `
        if(oID!==""&&oID!==undefined){
            mysql+=` and t_order.o_id=?`;
            param.push(oID)
        }
        if(userName!==""&&userName!==undefined){
            mysql+=` and username=?`
            param.push(userName)
        }
        if(timeQuantum[0]!==""&&timeQuantum[0]!==undefined){
            mysql+=` and  DATE_FORMAT(o_time,"%Y-%m-%d") BETWEEN ? and ?`
            param.push(timeQuantum[0])
            param.push(timeQuantum[1])
        }
        DBCONFIG.connect(mysql,param,
            (err,data)=> {
                if (!err) {
                    let result=Math.ceil(data[0].mycount/PERPAGE);
                    resp.send(200,result)
                } else {
                    console.log(err.message)
                    resp.send(err.message)
                }
            })
    }
};
module.exports=orderCOntroller;