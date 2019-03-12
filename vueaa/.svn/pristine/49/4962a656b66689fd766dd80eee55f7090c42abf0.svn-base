<template>
 <div class="fenye1">
   <div class="coa">
     <el-pagination
       @current-change="handleCurrentChange"
       layout="prev, pager, next"
       :total=le
       :page-size=my
      >
     </el-pagination>
   </div>
 </div>
  </template>
<script>
  export default {
    props:["my","le"],
      name:"fenye",
    data() {
      return {
        dqye:'',
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.dqye=val;
        console.log(this.dqye+"-1");
        this.$emit("transferUser",this.dqye)
      },
    },
  }
</script>
<style>
  .coa{
    padding: 40px auto;
  }
</style>
