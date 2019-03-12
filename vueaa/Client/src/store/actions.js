/**
 * Created by Administrator on 2019/2/28 0028.
 */
export const setUser=({commit},user)=>{
  commit("userStatus",user)

  this._vm.$http.post("/myapi/homeshow/myuser",{
    username:payload.username,
    password:payload.password

  }).then(resp=>{
    // switch(resp.data){
    //   case "登录成功":context.commit("loginSuccess");break;
    //   case "登录失败":context.commit("logonFailed");break;
    // }
    if(resp.data.length){
      context.commit("loginSuccess")
      state.studentid=resp.data[0].u_id;
    }else{
      context.commit("logonFailed")
      state.studentid=0
    }
  })
}
