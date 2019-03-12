<template>
  <el-button type="text" @click="open2(id)"  icon="el-icon-delete" circle class="backcolorChange"></el-button>
</template>

<script>
  export default {
      data(){
          return{
              add:[],
        }
      },
      props:['id'],
    methods: {
      open2(a) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(a);
            console.log(this.$http);

          this.$http.get("/myapi/createGoods/hddelet",{
            params:{
                id : a

            },
          })
            .then(resp => {
              this.add = resp.data;
              console.log(this.add);
              this.$emit("transferUser",this.add)

            }).catch(err => {
            console.log(err);
          });
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>
<style>
  .backcolorChange{
    border: 1px solid #f0f0f0;
    color: #707070;
  }
  .backcolorChange:hover{
    background-color: rgb(93, 83, 134);
    color:white;
  }

</style>
