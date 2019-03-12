const MYSQL = require("mysql");
const POOL = MYSQL.createPool({
    host:"192.168.0.152",
    port:"3306",
    user:"root",
    password:"root",
    database:"xm1"
});
// function connect(){}
module.exports.connect=function(sql,array,fn){

    POOL.getConnection((err,connection)=>{
        // console.log("传给dbconfig.connect的参数",sql,array,fn);
        if(!err){   //保证连接成功的情况下调用connection对象
            connection.query(sql,array,fn);
            connection.release(); //释放本次链接
        }else{
            console.log(err);
        }

    })

}
