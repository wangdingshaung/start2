<template>
  <div id="huodong">
    <div class="headers">
      <span class="headeh3">活动评论</span>
    </div>
    <el-table
      :data="tableData"
      style="width: 90%;margin: 20px auto"
    class="asa">
      <el-table-column
        prop="a_id"
        label="评论编号"

        align="center">
      </el-table-column>
      <el-table-column
        prop="u_num"
        label="评论用户"

        align="center">
      </el-table-column>
      <el-table-column
        prop="a_professional"
        label="用户职业"

        align="center">
      </el-table-column>
      <el-table-column
        prop="a_content"
        label="评论内容"

        :show-overflow-tooltip="true"
        align="center">
      </el-table-column>
      <el-table-column
        label="图片展示"

        align="center">
        <template slot-scope="scope"><img :src="'myapi'+scope.row.img" class="myimg"/></template>
      </el-table-column>
      <el-table-column
        prop="tt"
        label="操作"

        align="center">
        <template slot-scope="scope"><mybtn :id="scope.row.a_id" @transferUser="fetUser"></mybtn></template>
      </el-table-column>
    </el-table>
    <router-link :to="{path:'/chenli/hdtijiao'}"><el-button type="danger" round class="addgoods">新增评论</el-button></router-link>
  </div>
</template>
<script>
import mybtn from "./mybutton.vue"
  export default {
    name: 'huodong',
      data(){
        return{
          tableData: [],
          visible2: false,
        }
      },
    mounted(){
        this.$http.get("/myapi/createGoods/show")
          .then(resp => {
            this.tableData = resp.data;
            console.log(this.tableData)
          }).catch(err => {
          console.log(err);
        })
    },
    methods:{
      fetUser(msh){
          console.log(msh);
        this.tableData =msh;
      }
    },
    components:{
      mybtn
    }
  }
</script>

<style scoped>
#huodong{
  /*width: 1600px;*/
  margin: 0 auto;
}

.backcolorChange:hover{
  background-color: rgb(93, 83, 134);
  color:white;
}
  .myimg{
    width: 40px;
  }
.addgoods {
  margin: 50px 50px;
  background: #e23f83;
  background: linear-gradient(to right,#e23f83 0%,#ea5844 100%);
  background-size: 200% auto;
}
.headers{
  border-bottom: 1px solid rgba(188, 143, 143, 0.57);
  color: black;
  padding: 5px 5px;
  height: 50px;
  line-height: 50px;
}
.headeh3{
  margin-left: 50px;
}
#huodong{
  width: 95%;
  margin: 2% auto;
  box-shadow:0 0 10px rgba(188, 143, 143, 0.57);
  background-color: white;
}

</style>
