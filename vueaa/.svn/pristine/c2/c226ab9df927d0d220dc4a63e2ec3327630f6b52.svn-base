/**
 * Created by Administrator on 2019/1/7.
 */
const multer = require("multer");
let storage = multer.diskStorage({
    //配置文件上传位置

    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    //配置文件命名
    filename: function (req, file, cb) {
        // console.log(file.fieldname);
        console.log(file);
        //获取文件后缀名
        let format = file.originalname.split(".");
        format = format[format.length-1]; //[jquery,3,3,1,js]
        //拼接文件后缀名
        cb(null, file.fieldname + '-' + Date.now()+"."+format);
    }
});

let upload = multer({ storage: storage });

module.exports = upload;