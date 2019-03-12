<template>
  <div id="app">

      <mynav class="mynav" v-if="loginStatus" :userzt="studentid"></mynav>
      <login class="login" v-if="!loginStatus" :loginzt="loginStatus"></login>
      <div v-if="wronga" class="wrong">
        <span class="span1">*</span>账号或密码错误
      </div>
    <div class="router" v-if="loginStatus">
      <router-view></router-view>
    </div>


  </div>
</template>
<script>
  import mynav from './components/nav.vue'
//  import xurun from './components/xurun.vue'
//  import fangyin from './components/fangyin.vue'
//  import goods from './components/goods.vue'
//  import laowang from './components/laowang.vue'
//  import chenjt from './components/chenjt.vue'
//  import chenli from './components/chenli.vue'
  import login from './components/login.vue'
//  import dage from './components/dage.vue'
  import{mapState} from 'vuex'
  export default {
    name: 'App',
    provide(){
        return{
            reload:this.reload
        }
    },
    data(){
        return{
            isRouterAlive:true
        }
    },
    methods:{
        reload(){
            this.isRouterAlive =false;
          this.$nextTick(function(){
              this.isRouterAlive = true
          })
        }
    },
    components: {
    mynav,
//    laowang,
//    chenjt,
//    chenli,
//    xurun,
//    fangyin,
//    dage,
    login
//    goods,
},
    computed:mapState({
      loginStatus:state=>state.isLogin,
      studentid:state=>state.studentid,
      wronga:state=>state.wrong,
    }),
    methods:{

    },
    created(){
      if (sessionStorage.getItem("true") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("true"))))
      }

      window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("true",JSON.stringify(this.$store.state))
      })
    },


}

</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    display: flex;
    position: relative;
  }
  .mynav{
    position: fixed;
  }
  .router{
    width: 100%;
    margin:82px 0 0 250px;
  }
  .wrong{
    position: absolute;
    right:27%;
    top:62%;
    width: 200px;
    height: 100px;
    /*border: solid 1px red;*/
    color: red;
    text-align: center;
    line-height: 100px;
    z-index: 99;
    font-size: 12px;
  }
  .span1{
    position: absolute;
    font-size: 18px;
    top:4px;
    left: 40px;
  }



</style>
