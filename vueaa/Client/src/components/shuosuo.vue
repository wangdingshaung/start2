<template>
<div class="shuosuo">
  <el-input v-model="input" placeholder="请输入账户名称" @change="setUser"></el-input>
</div>
  </template>
<script>
  export default {
      name:"shuosuo",
    data() {
      return {
        input: ''
      }
    },
    methods:{
          setUser:function () {
            this.$emit("transferUser",this.input)
          }
    }
  }
</script>
