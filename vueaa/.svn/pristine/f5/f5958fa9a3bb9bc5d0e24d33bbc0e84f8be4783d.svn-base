<template>
  <div class="goodsTable">
    <div class="divp">
      <p class="biaoming">博客列表</p>
    </div>

    <hr>
    <el-table :data="tableData.filter(data => !search || scope.row.b_name.toLowerCase().includes(search.toLowerCase()))" style="width: 95%;margin: auto">
      <el-table-column label="日期" >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          {{scope.row.b_date | formatDate}}
        </template>
      </el-table-column>
      <el-table-column label="标题" >
        <template slot-scope="scope"  >
          <span slot="reference" class="name-wrapper" v-for="g in scope.row.b_name">
        {{ g }}
        </span>
        </template>
      </el-table-column>

      <el-table-column label="作者" >
        <template slot-scope="scope"  >
          <span slot="reference" class="name-wrapper" v-for="y in scope.row.b_author">
        {{ y }}
        </span>
        </template>
      </el-table-column>

      <!--<el-table-column align="right">-->
       <!---->
        <!--</el-table-column>-->



      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="myiiinput"  id="sousuo" v-on:blur="sousuo" size="mini" placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button icon="el-icon-edit" circle class="backcolorChange" @click="showOverlay(scope.$index, scope.row)"></el-button>
          <el-button  icon="el-icon-delete" class="backcolorChange" circle  @click="handleDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--新增博客按钮-->
    <router-link :to="{path:'/xurun/fuwenben'}" ><el-button type="danger" round icon="el-icon-edit" class="addd">新增博客</el-button></router-link>
    <!--分页组件-->
    <div class="block1">
      <el-pagination
        layout="prev, pager, next"
        :total="pageNumber" @current-change="currentChange"  next-click="" class="yema">
      </el-pagination>
    </div>
    <!--模态框-->
    <motaikuang :list='selectedlist' :isactive="isActive" v-cloak @change="changeOverlay" @modify="modify"></motaikuang>
  </div>
</template>

<script>
  import $ from 'jquery'
  import fenyezujian from "./fenyezujian.vue"
  import motaikuang from "./motaikuang.vue"
  import {formatDate} from "../../config/common"
  export default {
    data() {
      return {
          tableData:[],
          search: '',
          pagesize: 10,
          curpage:1,//当前页的页码
          pageNumber:0,
           curcmm:1,
          myiiinput:"",
          isActive: false,
        selected: -1,
        selectedlist: {},
        slist: [], //获取需要更改的内容
        searchlist: [],
        auser:"",
        table:[]

      }
    },
    filters:{
      formatDate(time){
          let date=new Date(time);
          return formatDate(date,"yyyy-MM-dd")
      }
    },
    methods: {
      currentChange(obj){
          this.curpage=obj
          this.showDate()
      },
      sousuo(msg){
        this.curpage = 1;
         this.auser=msg
          this.showDate();
          this.showmypage()

      },
//        修改
      showOverlay(index, row) {
        this.selected = index;
        this.selectedlist = this.tableData[index];//这是一行的数据 相当于row
        this.changeOverlay();
      },
      created() {
        this.setSlist(this.tableData);
      },
      changeOverlay() {
        this.selected = -1;
        this.isActive = !this.isActive;
      },
      // 点击保存按钮
      modify(index, row) {
        this.selected = index;
          var bb = $("#kuang2").val();
          var aa = $("#kuang1").val();
        if (this.selected > -1) {
            console.log(this.selected)
//          Vue.set(this.tableData, this.selected, arr);
          this.selected = -1;
        } else {
//          this.tableData.push(arr);
        }
        this.setSlist(this.tableData);
        this.changeOverlay();
      },

      changeOverlay() {
        this.selected = -1;
        this.isActive = !this.isActive;
      },
      // 获取需要渲染到页面中的数据
      setSlist(arr) {
        this.slist = JSON.parse(JSON.stringify(arr));
      },
//      删除
      handleDelete(index, row) {
        this.$http.get("/myapi/allBoke/shanchushuju", {params :this.tableData[index].b_id}).then( resp => {
            if (resp.status === 200) {
              let index = this.tableData.indexOf(row);
              this.tableData.splice(index, 1);
              this.$message.success('删除成功');
            }
          });
      }
    },
    //接口
    mounted(){
        this.showDate=function(){
            this.$http.get("/myapi/allBoke/showblog",{
              params:{
                page:this.curpage,
                adg:this.myiiinput
            }
        }).then(resp=>{
                   this.tableData=resp.data;

        }).catch(err=>{
           console.log(err)
        })
        }
      this.showmypage=function (obj) {
        this.curcmm=obj;
        this.$http.get("/myapi/allBoke/gettotal",{
            params:{
              adg:this.myiiinput
            }
        }).then(resp=>{
          this.pageNumber=resp.data*10;
        }).catch(err=>{
          console.log(err)
        })
      };
      this.chaxunfenye=function (obj) {
        this.curcmm=obj;
        this.$http.get("/myapi/allBoke/gettotall",{
            params:{
                page:this.table
            }
        }).then(resp=>{
          this.pageNumber=resp.data*10;
        }).catch(err=>{
          console.log(err)
        })
      };

        this.showmypage();
        this.showDate()
    },
    components: {
      fenyezujian,
      motaikuang
    }
  }
</script>

<style>
  /*body{*/
    /*margin: 0;*/
    /*background-color: rgba(255, 192, 203, 0.4);*/
  /*}*/

  .biaoming{
    margin-left: 50px;
    font-size: 16px;
  }
  .goodsTable {
    padding-top: 5px;
    position: relative;
    width:95%;
    height: 100%;
    background-color: white;
    margin: 30px auto;
    box-shadow:0 0 10px rgba(188, 143, 143, 0.57);
  }
  .cell{
    text-align: center;
  }
  .divp{
    height: 50px;
    line-height: 50px;
  }

  .addd {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left:40px;
    margin-right: 150px;
    background: #e23f83;
    background: linear-gradient(to right,#e23f83 0%,#ea5844 100%);
    background-size: 200% auto;
    font-weight: 600;
    transition: 0.5s;
    color: #fff;
    border: 0 none;
    padding: 12px 20px;
  }

  .motaidiv{
    margin: 10px 5px;
    font-size: 18px;
  }
  .motaidiv input{
    border-radius: 3px;
    height: 25px;
    width: 250px;
  }
  .el-message-box{
    position: relative;
  }
  .but:hover{
    cursor: pointer;
  }
  .but{
    width: 58px;
    height: 34px;
    color: white;
    background-color: #409EFF;
    border: 1px solid #409EFF;
    border-radius: 3px;
    position: absolute;
    right: 16px;
    bottom: -38px;
    z-index: 99;
  }
  .el-button{
    position: relative;
    z-index: 1;
  }

  .btn-prev{
    font-size: 20px;
  }
  .yema {
    /*position: absolute;*/
    /*right: 100px;*/
    /*bottom: 0;*/
    /*padding-bottom: 20px;*/
  }
  .block1{
    /*margin-top: 20px;*/
    position: absolute;
    right: 100px;
    bottom: 20px;
    /*padding-bottom: 20px;*/
    /*position: absolute;*/
    /*right: 100px;*/
    /*bottom: 0;*/
    /*padding-bottom: 20px;*/
    text-align: center;
  }
  .el-pager li.active{
    color:#5d5386;
  }
  .el-pager li:hover {
    color: #5d5386;
  }
  .el-pager li{
    color: #aea9c3;
  }

  /*.el-pager li{*/
    /*font-size: 24px;*/
  /*}*/
  /*.el-pagination .btn-next .el-icon, .el-pagination .btn-prev .el-icon{*/
    /*font-size: 24px;*/
  /*}*/
  .backcolorChange:hover{
    background-color: rgb(93, 83, 134);
    color:white;
  }
  .el-button--danger:focus, .el-button--danger:hover{
    background: #e23f83;
    color: #fff;
    background: linear-gradient(to right,#e23f83 0%,#ea5844 100%);

  }
  hr{
    height: 1px;
    border: none;
    background-color: rgba(188, 143, 143, 0.57);
  }

</style>
