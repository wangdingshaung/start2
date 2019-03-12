<template>
  <div class="overlay" v-show = "isactive">
    <div class="con">
      <div>
           <p class="pp">修改博客:</p>
       </div>
       <div class="el-dialog__body">
         <div ><span class="mylabel">修改时间：</span><input type="text" class="motaidiv" id="kuang1"  v-on:blur="yanzhengriqi"> </div>
         <div  ><span class="mylabel">修改标题：</span><input type="text" class="motaidiv" id="kuang2"></div>
       </div>
        <div class="anniudiv">
          <input type="button" @click="changeActive" value="取消" class="quxiao">
          <input type="button" @click="modify" value="保存" class="baocun">
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    inject:['reload'],
    props: ['list','isactive'],
    computed:{
      modifylist() {
          return this.list;
        }

    },
    data() {
      return {
          from:{
              date:"",
              name:""
          },
      }
    },
    methods: {
      changeActive() {
        this.$emit('change'); // 关闭弹层，修改isactive值
      },
      modify() {
        var kuang1 = document.getElementById("kuang1").value;
        var iIdNo = kuang1;
//        var tmpStr = "";
        var v = kuang1.match(/^((?!0000)[0-9]{4}-((0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])-(29|30)|(0[13578]|1[02])-31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)-02-29)$/)
        if (iIdNo.length == 0) {
          alert("日期不为空");
          return false;
        }
        if ((iIdNo.length != 8) && !v) {
          alert("日期格式错误，提示：1999-01-01");
          $("#kuang1").val("");
          return false;
        }
        this.from.name = $("#kuang2").val();
        this.from.date = $("#kuang1").val();
        this.$emit('modify',this.modifylist); // 将修改后的数据传递给父组件
        console.log(this.modifylist.b_id)
        this.$http.get("/myapi/allBoke/xiugai",{
            params:{gainame:this.from.name,
              gaidate:this.from.date,
              id:this.modifylist.b_id
            }
        }).then( resp => {
          if (resp.status === 200) {
            console.log("修改成功");
          }
        });
        this.reload()
      },
      yanzhengriqi(){
        var kuang1 = document.getElementById("kuang1").value;
        //调用trim（）去掉空格，因为js不支持trim（）
        var iIdNo = trim(kuang1);
        var tmpStr = "";
        var v = kuang1.match(/^((?!0000)[0-9]{4}-((0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])-(29|30)|(0[13578]|1[02])-31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)-02-29)$/)
        //自动更改日期格式为yyyy-mm-dd
        if (iIdNo.length == 8) {
          tmpStr = iIdNo.substring(0, 8);
          tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6, 8);
          document.getElementById("kuang1").value = tmpStr;
//          document.getElementById("kuang1").focus();
          return false;
        }
        function trim(str) {
          return str.replace(/(^\s*)|(\s*$)/g, "");
        }
      }

    },
  }

</script>

<style lang="css" scoped>
  .el-dialog__body{
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
  }
  .mylabel{
    width: 100px;
    display: inline-block;
    color: #606266;
  }
  #kuang1{
    /*-webkit-appearance: none;*/
    /*background-color: #fff;*/
    /*background-image: none;*/
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    width: 200px;
  }
  #kuang2{
    /*-webkit-appearance: none;*/
    /*background-color: #fff;*/
    /*background-image: none;*/
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    width: 200px;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 6;
    background: rgba(0, 0, 0, 0.7);
  }
  .overlay td:first-child {
    width: 66px;
  }
  .overlay .con {
    position: absolute;
    width: 420px;
    min-height: 250px;
    background: #fff;
    left: 50%;
    top: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    padding: 20px;
    border-radius: 5px;
  }
  .pp{
    font-size: 20px;
  }
  .anniudiv{
    width: 140px;
    margin-left: 270px;
  }
  .baocun{
    color: #fff;
    background-color: rgb(93, 83, 134);
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 4px;
  }
  .quxiao:hover{
    color: rgb(93, 83, 134);
    border-color:rgb(93, 83, 134);
    background-color: white;
  }
  .quxiao{
    display: inline-block;
    width: 60px;
    height: 35px;
    color: black;
    background-color: white;
    border-radius: 3px;
    border: 1px solid gray;
  }
</style>


