/**
 * Created by Administrator on 2019/2/26 0026.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  isLogin:false,
  studentid:0,
currentUser:null,
  // token:""
  wrong:false,
};

// const getters={
//   currentUser:state.currentUser,
// }

const mutations={
      loginSuccess(state,username){
        state.isLogin=true;
        state.studentid=username;
        state.wrong=false
      },
      logonFailed(state){
        state.isLogin=false
        state.studentid=0
        state.wrong=true
      }
}
const actions={
  login(context,payload){
      console.log(this._vm)
    this._vm.$http.post("/myapi/homeshow/myuser",{
        username:payload.username,
        password:payload.password

    }).then(resp=>{
      // switch(resp.data){
      //   case "登录成功":context.commit("loginSuccess");break;
      //   case "登录失败":context.commit("logonFailed");break;
      // }
      if(resp.data.length){
        console.log(resp.data[0])
        context.commit("loginSuccess",resp.data[0].username)
        // state.studentid=resp.data[0].username;
      }else{
        context.commit("logonFailed",0)
      }
    })
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  // getters
})
