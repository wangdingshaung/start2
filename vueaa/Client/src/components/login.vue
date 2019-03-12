<template>

    <div class="login">
      <div class="divimg">

      </div>
      <div  class="div1">
        <div class="logo">
          <img src="./img/logo.png" alt="">
        </div>
        <div class="zh">
          <div class="zhanghao" ref="zhangh">
            账号
          </div>
          <input type="text" v-model="username" @focus="zh()" ref="ipt1" style="outline:none">
        </div>
        <div class="mm">
          <div class="mima" ref="mim">
            密码
          </div>
          <input type="password" v-model="password" @focus="mm()" ref="ipt2"  style="outline:none">
        </div>
        <el-button @click="mylogin" class="btn1">登录</el-button>
      </div>

    </div>


</template>

<script>

  export default {
    name: 'login',
    data () {
      return{
          username:"",
          password:""
      }
    },
      methods:{
        mylogin(){
            this.$store.dispatch("login",{
                username:this.username,
                password:this.password
            })


        },
        panduan(){

        },
        zh(){
            if(this.$refs.ipt1.value==""){
              this.$refs.zhangh.style.bottom="50px";
            }
            if(this.$refs.ipt2.value==""){
              this.$refs.mim.style.bottom="8px"
            }

        },
        mm(){
            if(this.$refs.ipt2.value==""){
              this.$refs.mim.style.bottom="50px";
            }
            if(this.$refs.ipt1.value==""){
            this.$refs.zhangh.style.bottom="8px"
          }
        }
      },
    props:[
        "loginzt"
    ]
  }



</script>


<style scoped>

  .login{
    width: 100%;
    height: 890px;
    /*margin-top:40px;*/
    /*padding-left: 200px;*/
    z-index: 99;
    overflow: hidden;
  }
  .btn1{
    background: #e23f83;
    background: linear-gradient(to right,#e23f83 0%,#ea5844 100%);
    background-size: 200% auto;
    font-weight: 600;
    transition: 0.5s;
    color: #fff;
    border: 0 none;
    padding: 12px 20px;
    width: 98px;
    height: 40px;
    border-radius: 20px;
  }
  .divimg{
    width: 1000px;
    height: 100%;
    background-image: url("img/01.jpg");
    background-size: 100% 100%;
    display: inline-block;
    vertical-align:top;
    float: left;

  }
  .div1{
    /*border: solid 1px red;*/
    vertical-align:top;
    display: inline-block;
    width: 600px;
    height: 100%;
    text-align: center;
    /*margin-top: 200px;*/
    /*margin-left: 150px;*/
    position: relative;
    top: 25%;
    right: 0;
  }

  .logo{
    margin-bottom: 50px;
  }
  .zh,.mm{
    font-size: 25px;
    margin-bottom: 80px;
    position: relative;
  }
  input{
    width: 455px;
    height: 42px;
    border: none;
    border-bottom: solid 1px rgba(0,0,0,.3);
    /*background-color: #f2f3f8;*/
  }
  .zhanghao,.mima{
    position: absolute;
    font-size: 18px;
    bottom:8px;
    left: 80px;
    transition: all linear .1s;
  }


</style>
