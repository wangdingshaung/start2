<template>
  <div class="tijiao">
    22222222222222222222222222222222222222222222
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品名称"  class="demo-input-size">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-upload
        class="upload-demo"
        action="/myapi/createGoods/tupian"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList2"
        list-type="picture"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-form-item label="商品单价" class="demo-input-size">
        <el-input v-model="form.price" @blur="danjia" maxlength="5"></el-input>
        <p v-if="test1.yanzheng" class="p">{{test1.test}}</p>
      </el-form-item>
      <el-form-item label="商品编号"  class="demo-input-size">
        <el-input v-model="form.number" ></el-input>
      </el-form-item>
      <el-form-item label="商品功效"  class="demo-input-size">
        <el-input v-model="form.decoration"></el-input>
      </el-form-item>
      <el-form-item label="实用肤质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="油性肤质" name="type"></el-checkbox>
          <el-checkbox label="干性肤质" name="type"></el-checkbox>
          <el-checkbox label="所有肤质" name="type"></el-checkbox>
          <el-checkbox label="混合型肤质" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="商品上架">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="商品介绍">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="btn1">提交</el-button>
        <el-button class="btn2">取消</el-button>
      </el-form-item>
    </el-form>

  </div>

</template>
<script>
  export default {
    name: 'xiugaishangping',
    data() {
      return {
        fileList2: [],
        form: {
          price:"",
          decoration:"",
          number:"",
          name: '',
          delivery: false,
          type: [],
          desc: '',
        },
        test1: {yanzheng:false,test:'请输入正确的数字'},
        add:[],
      }
    },
    mounted(){
        this.$http.get("/myapi/createGoods/get",{
          params:{
              id:14
          }
        })
          .then(resp => {
              let tt;
              let arr;
              let obj={};
              if (Number(resp.data[0].g_status)){
                  tt = false;
              }else {
                  tt = true
              }
            this.form.name = resp.data[0].g_name;
            this.form.price = resp.data[0].price;
            this.form.number = resp.data[0].g_number;
            this.form.decoration = resp.data[0].decoration;
            this.form.desc = resp.data[0].cf_num1;
            this.form.delivery = tt;
            arr = resp.data[0].g_fuzhi.split(",");
            this.form.type = arr;
            obj.name =  "tt";
            obj.src =  resp.data[0].goodsSrc;
            this.fileList2.push(obj)
          }).catch(err => {
            console.log(err);
          })
    },
    methods: {
      danjia(){
        if(isNaN(Number(this.form.price))){  //当输入不是数字的时候，Number后返回的值是NaN;然后用isNaN判断。
          this.test1.yanzheng = true;
        }else {
          this.test1.yanzheng = false;
        }
      },
      onSubmit() {


      },
      handleRemove(file, fileList) {

      },
      handlePreview(file) {
        console.log(file);
      },
    }

  }
</script>

<style scoped>
  .tijiao{
    width: 800px;
    margin: 0 auto;
  }
  .btn1{
    background: #e3417e;
    border: none;
    border-radius: 20px;
  }
  .btn2{
    background: #e4e8f0;
    border: none;
    border-radius: 20px;
    color: #2c304d;
  }
  .btn1:hover{
    background: #ea5649;
  }
  .btn2:hover{
    background: #2c304d;
    color: #ffffff;
  }
  .p{
    color: red;
  }

</style>


