<template>
  <div class="chenjt">

    <div class="muban">

      <div class="hjk">
        <div class="yibiaoban">
          <h2>仪表板</h2>
        </div>

        <div class="yui">
          <!--?-->
          <div class="num">
            <div class="num1">
              每类商品数量统计
            </div>
            <div class="abc">
              <!--????????????-->

              <canvas id="myPieChart" width="250" height="250" style="margin: 0 auto"></canvas>
            </div>
          </div>

          <div class="xiaoliang">
            <!--???-->
            <div class="xiaoliang1">
              商品销售数量统计
            </div>
            <div class="jidi">

              <canvas id="myChart3" width="250" height="250" style="margin: 0 auto"></canvas>
            </div>
          </div>

        </div>
      </div>
      <!--????-->
      <div class="zhuzi">
        <div class="renshu">
          每月注册用户数量统计
        </div>
        <div class="small">

          <canvas id="myChart2" width="700px" height="500px"></canvas>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
  import Chart from 'chart.js';
  export default {
    name: 'chenjt',
    data () {
      return {
        mytype: [],
        mymum: [0,0,0,0,0,0,0,0,0,0,0,0],
        data: [],
        mymum2: [],
        montha:[],
//        contentStyleObj: {
//          height: ''
//        }
      }
    },
    methods: {

//      getHeight(){
//        this.contentStyleObj.height = window.innerHeight + 'px';
//      }
    },
    created(){
      window.addEventListener('resize', this.getHeight);
      this.getHeight()
    },

    destroyed(){
      window.removeEventListener('resize', this.getHeight)
    },


    mounted() {
      var ctx2 = document.getElementById("myChart2");
      var ctx = document.getElementById("myPieChart");
      var ctx3 = document.getElementById("myChart3");
      var that = this;

//?
      this.$http.get("/myapi/homeshow/home")
        .then(resp => {
            for (var i = 0; i < resp.data.length; i++) {
              this.mytype[i] = (parseInt(resp.data[i].num))
            }
            var myPieChart = new Chart(ctx,{
              type: 'doughnut',
              data: {
                datasets: [
                  {
                    label: ["test1"],
                    backgroundColor: ["#5d5386", "#e76c90", "#07a2bf", "#e4e8f0", "#60c400"],
                    borderColor: "rgba(225,103,110,1)",
                    cutoutPercentage: 50,
                    borderWidth: 1,
                    data: that.mytype,
                    animation: "true",

                  }
                ],
                labels: [
                  '面霜',
                  '眼霜',
                  '精华',
                  '面部油',
                  '洁面乳',
                ]
              },
              options: {
                cutoutPercentage: 50,
              },

            });
          }
        );
//????
      this.$http.get("/myapi/homeshow/jidi")
        .then(resp => {
            for (var i = 0; i < resp.data.length; i++) {
              this.mymum2[i] = (parseInt(resp.data[i].num))
            }
            var mymum2 = new Chart(ctx3, {
              type: 'polarArea',
              data: {
                datasets: [
                  {
                    backgroundColor: ["#5d5386", "#e76c90", "#07a2bf", "#e4e8f0", "#60c400"],
                    borderColor: "rgba(225,103,110,1)",
                    cutoutPercentage: 50,
                    borderWidth: 1,
                    data: that.mymum2,
                    animation: "true"
                  }
                ],
                labels: [
                  '芦荟草本洁面乳',
                  '抗衰老眼霜',
                  '抗衰老面部精油',
                  '草本精华防晒霜',
                  '芦荟草本洁面乳',
                  '阿育吠陀面垢',
                  '柑橘薄荷洁面乳',
                ]

              },
              options: {},

            });
          }
        );
//????
      this.$http.get("/myapi/homeshow/huiyuan")
        .then(resp => {
            console.log(resp.data)
            for (var i = 0; i < resp.data.length; i++) {
                console.log(parseInt(resp.data[i].montha))
              this.mymum[parseInt(resp.data[i].montha)-1] = (parseInt(resp.data[i].sheets))
//              this.montha[i] = (parseInt(resp.data[i].montha))+"??"
            }
            var myChart2 = new Chart(ctx2, {
              type: "bar",
              data: {
                labels:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
                datasets: [
                  {
                    label: ["会员数量(/人)"],
                    backgroundColor: ["#efe0e6", "#ffecd9", "#fff5dd", "#dbf2f2", "#d7ecfb","ebe0ff"],
                    borderColor: "rgba(225,103,110,1)",
                    borderWidth: 1,
                    pointStrokeColor: "#fff",
                    pointStyle: "crossRot",
                    data: that.mymum,
                    cubicInterpolationMode: "monotone",
                    spanGaps: "false",
                    fill: "false"
                  }
                ]
              },
              options: {},

            });
          }
        );
    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .muban {
    /*margin-top: 112px;*/
  }
  body{
    height: 100%;
  }

  .yibiaoban h2{
    /*margin: 112px;*/
    font-weight: 100;
  }

  .hjk,.yui{
    /*display: inline-block;*/
    margin: 0 50px 0 50px;
    float: left;
    vertical-align: baseline;
  }
  .yui{
    margin-top: 50px;
  }

  .small, .abc, .jidi {
    /*border: solid 1px gainsboro;*/
    padding: 20px;
    /*margin: 0 100px;*/
  }

  .zhuzi {
    width: 800px;
    height: 735px;
    /*z-index: 50;*/
    /*position: relative;*/
    display: inline-block;
    background-color: white;
    vertical-align: baseline;
    margin-top: 80px;
    position: relative;
  }
  .renshu{
    margin-left:-80px;
    position: absolute;
    left: 50%;
    bottom:135px;
    color: rgba(0,0,0,.7);
  }

  .abc, .jidi {
    width: 300px;
    height: 280px;
    font-size: 8px;
    /*display: inline-block;*/
    background-color: white;
    margin: 0 auto;

  }

  .chenjt {
    padding-top:8px;
    background-color: rgba(0, 0, 0, 0.1);
    /*overflow: hidden;*/
  }

  .chenjt:after {
    content: "";
    display: block;
    clear: both;
  }

  .num, .xiaoliang {
    width: 500px;
    background-color: white;
    margin-bottom: 25px;
    padding-bottom: 35px;
    margin-left: 50px;
    position: relative;
  }
  .num1,.xiaoliang1{
    width: 130px;
    margin-left:-60px;
    position: absolute;
    left: 50%;
    bottom: 15px;
    color: rgba(0,0,0,.7);
  }

</style>
