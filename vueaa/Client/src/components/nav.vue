<template>
  <div class="mynav">
    <div class="div1" >
      <div class="logo">
      </div>
      <div class="div1-1">
        欢迎：{{userzt}}
      </div>
      <!--:style='mypagestyle'
      @click="abc($event)"-->
      <div class="div1-2" @click="show"></div>
      <div class="div1-3" ref="asd"></div>
      <div class="mylogin" v-show="panelShow">
        <div class="logo2">
          <img src="./img/avatar-01.jpg" alt="">
        </div>
        <div class="wenzi lunkuo">轮廓</div>
        <div class="wenzi">消息</div>
        <div class="wenzi">设置</div>
        <div class="xian"></div>
        <div class="wenzi" >常见问题</div>
        <div class="close1" @click="tuichu">
          <img src="./img/guanbi.png" alt="">
        </div>
      </div>
    </div>


    <div class="divnav">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#2c304d" text-color="white" active-text-color="deeppink">

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item-group>
                <!--<template slot="title">分组一</template>-->
                <router-link to="/chenli/tijiao">
                  <el-menu-item index="1-1">新增商品</el-menu-item>
                </router-link>
                <router-link to="/goods">
                  <el-menu-item index="1-2">商品列表</el-menu-item>
                </router-link>
              </el-menu-item-group>

            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item-group>
                <!--<template slot="title">分组一</template>-->
                <router-link to="/order">
                  <el-menu-item index="1-1">订单列表</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>


            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <!--<template slot="title">分组一</template>-->
                <router-link to="/laowang">
                  <el-menu-item index="1-1">用户列表</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>


            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>文章管理</span>
              </template>
              <el-menu-item-group>
                <!--<template slot="title">分组一</template>-->
                <router-link to="/xurun/fuwenben">
                  <el-menu-item index="1-1">发布博客</el-menu-item>
                </router-link>
                <router-link to="/xurun">
                  <el-menu-item index="1-2">博客列表</el-menu-item>
                </router-link>
              </el-menu-item-group>

            </el-submenu>


            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>活动管理</span>
              </template>
              <el-menu-item-group>
                <!--<template slot="title">分组一</template>-->
                <router-link to="/hdtijiao">
                  <el-menu-item index="1-1">新增内容</el-menu-item>
                </router-link>
                <router-link to="/huodong">
                  <el-menu-item index="1-2">活动列表</el-menu-item>
                </router-link>
              </el-menu-item-group>

            </el-submenu>
            <!--<el-menu-item index="2">-->
              <!--<i class="el-icon-menu"></i>-->
              <!--<span slot="title">导航二</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="3" disabled>-->
              <!--<i class="el-icon-document"></i>-->
              <!--<span slot="title">导航三</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="4">-->
              <!--<i class="el-icon-setting"></i>-->
              <!--<span slot="title">导航四</span>-->
            <!--</el-menu-item>-->
          </el-menu>
        </el-col>
      </el-row>
    </div>




<!--图-->
    <!--<chenjt></chenjt>-->

  </div>
</template>

<script>

  import chenjt from  "../components/chenjt.vue"
export default {
    name: 'mynav',
    components:{
      chenjt
    },
    data () {
      return {
        isCollapse: true,
        panelShow: false,
      }
    },
    methods: {
      tuichu(){
        this.$store.state.isLogin=false;
        this.$router.push("/")
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      show(){
          console.log(this.panelShow)
        this.panelShow=!this.panelShow
      },




    },
    mounted(){
      this.$router.push("/chenjt")
    },
    props:[
      "userzt"
    ]
//    mounted(){
//      console.log(this.$refs.asd.style.cssText)
//    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .logo{
    position: absolute;
    width: 250px;
    height: 80px;
    background-image: url("img/logo-big.png");
    background-size: 100% 100%;
  }
  .divnav{
    height: 850px;
    background-color:#2c304d;
    width: 250px;
    position: fixed;
    margin-top: 80px;
    z-index: 99;
  }

  .el-menu-vertical-demo{
    width: 250px;
  }

  a{
    text-decoration:none;
    color: white;
  }


  .el-submenu__title:hover i{
    color: #e76c90;
  }
  .el-menu-item:hover i{
    color: #e76c90;
  }
  .mynav{
    position: absolute;
    width: 100%;
    overflow: hidden;
    z-index: 1;
  }
  .div1{
    height: 80px;
    width: 100%;
    border-bottom:solid 2px gainsboro;
    position: fixed;
    background-color: white;
    z-index: 99;
  }
  .div1-1,.div1-2,.div1-3{
    /*border: solid 1px black;*/
    margin-top: 5px;
    float: right;
    width: 60px;
    height: 60px;
    margin-right: 40px;
    border-radius: 50%;
    text-align: center;
    position: relative;
    z-index: 99;
  }
  .div1-1{
    margin-top: 20px;
    color: #b0abc4;
    font-size: 24px;
    width: 200px;
  }
  .div1-2{
    margin-top: 10px;
  }
  .mylogin{
    position: absolute;
    width: 250px;
    height: 360px;
    top:82px;
    right: 187px;
    border: solid 1px rgba(0,0,0,.1);
    background-color: white;
    overflow: hidden;
  }
  .logo2,.logo2>img{
      height: 100px;
      width: 100px;
      border-radius: 50%;
    margin: 15px auto;
  }
  .logo2{

  }
  .el-radio-button__orig-radio:checked+.el-radio-button__inner{
    background-color: red;
  }
  .div1-2{
    background-image: url("img/avatar-01.jpg");
    background-size: 100% 100%;
  }
  .wenzi{
    color: #5d5386;
    font-weight: 600;
    font-size: 12px;
    margin: 15px 0 0 20px;
  }
  .lunkuo{
    margin-top: 25px;
  }
  .xian{
    border-top: 1px solid gainsboro;
    margin-top: 15px;
  }
  .close1{
    width: 80px;
    height: 80px;
    background-color: #5d5386;
    border-radius: 50%;
    text-align: center;
    margin-left: 35%;
    margin-top: 40px;
    transition: all linear .2s;
  }
  .close1:hover{
    background-color:#e76c90 ;
    transition: all linear .2s;
  }
  .close1 img{
    margin-top: 20px;
  }

  /*.el-menu-vertical-demo:not(.el-menu--collapse) {*/
    /*width: 200px;*/
    /*min-height: 400px;*/
    /*background-color: #2c304d;*/
  /*}*/
  /*.aaa{*/
    /*color: white;*/
  /*}*/


</style>
