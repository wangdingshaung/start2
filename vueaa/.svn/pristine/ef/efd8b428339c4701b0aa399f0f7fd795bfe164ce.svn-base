// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import  VueQuillEditor from 'vue-quill-editor'
import axios from 'axios'
import lodash from 'lodash'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//引入富文本编辑器
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.js'

Vue.config.productionTip = false;
import store from './store'
Vue.use(ElementUI);
Vue.prototype.$http = axios;
Vue.use(VueQuillEditor);
Vue.prototype._ = lodash;

//全局注册
Vue.filter("currency",function(value){
  return "￥"+value
});
new Vue({  el: '#app',  router,
  store,
  components: { App },
  template: '<App/>'
});


