<template>
  <div class="goodsTable">
    <div class="juzhong">
      <bokeke :defaultMsg='defaultMsg' :config='config' ref="bokeke"></bokeke>
    </div>

  </div>
</template>

<script>
  import bokeke from "./bokeke.vue"
  export default {
    name: 'fuwenben',
    data () {
      return {
        defaultMsg:'',
        config:{
          initialFrameWidth:1038,
          initialFrameHeight:500
        },
        editor:''
      }
    },
    methods:{
      getUEContent() {
        let content = this.$refs.ue.getUEContent();
        this.$notify({
          title: '获取成功，可在控制台查看',
          message: content,
          type: 'success'
        });
        console.log(content)
      }
    },
    mounted(){
      const _this = this;
      this.editor =UE.getEditor('editor',_this.config)
//      this.editor =
      this.editor.addListener("ready", function () {
          console.log("ready")
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
      });
    },
    destroyed(){
//        console.log(this.editor)
//        console.log(this.editor.destroy)
        this.editor.destroy()
    },
    components: {
      bokeke
    }
  }
</script>
<style>
  /*body{*/
    /*margin: 0;*/
    /*background-color: rgba(255, 192, 203, 0.4);*/
  /*}*/
.juzhong{
  /*display: inline-block;*/
  width: 1050px;
  margin: 40px auto;
}
  .goodsTable {
    padding-top: 5px;
    position: relative;
    width:95%;
    background-color: white;
    height: 100%;
    margin: 30px auto;
    box-shadow:0 0 10px rgba(188, 143, 143, 0.57);
  }
  body{
    margin: 0;
    background-color:#f2f3f8;
  }

</style>
