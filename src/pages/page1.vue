<template>
  <div class="hello">

    <v-layout row wrap style="margin-top: 3px;">
      <v-flex xs12>
        <v-card color="grey lighten-4">
          <div style="padding: 10px;">
            <div style="background-color: red ; width:60px; height:3px; margin-left: 3px;"></div>
            <h2>공장종합효율</h2>
          </div>
          <div class="bargraph" style="padding-top:10px;">
            <div class="per">
              <span style="left:0;"><b>0%</b></span>
              <span style="left:20%;"><b>20%</b></span>
              <span style="left:40%;"><b>40%</b></span>
              <span style="left:60%;"><b>60%</b></span>
              <span style="left:80%"><b>80%</b></span>
              <span style="right:0;"><b>100%</b></span>
            </div>
            <div class="bar">
              <p class="bg"></p>
              <template>
                <a href="muAnalOeeStatus">
                  <p class="val01" style="width:70%;"><strong style="font-size:23px;">70%</strong><span>설비종합효율</span></p>
                </a>
                <p class="val02" style="left:70%;width:10%;"><strong>10%</strong><span>불량</span></p>
                <p class="val03" style="left:80%;width:10%;"><strong>20%</strong><span>성능 Loss</span></p>
                <p class="val04" style="left:90%;width:10%;"><strong>30%</strong><span>시간 Loss</span></p>
              </template>
            </div>
          </div><!--/.bargraph-->
        </v-card>
      </v-flex>
    </v-layout>


    <v-layout row wrap style="margin-top: 3px;">
      <v-flex xs12>
        <div class="splitwrap btm">
          <div class="overall" style="min-height:308px; width: 33%;">
            <h3>시간가동률</h3>
            <div class="gage">
              <div id="gauge1"></div>
              <span>당일 : <strong>20%</strong></span>
            </div>
            <div class="chtvalue">
              <h4>Reason for Non-Operation <a href="/muRepoAvailability" class="btn"><i class="fa fa-file-o"></i> 상세보기</a></h4>
              <div class="valuebox" style="min-height:89px;">
                <template>
                  <dl><dt>aa</dt><dd>aa times</dd><dd>aa minutes</dd></dl>
                </template>
              </div>
              <!--<div class="valuebox" style="min-height:89px;">-->
                <!--<dl><dt>No information yet</dt></dl>-->
              <!--</div>-->
            </div>
          </div><!--/.overall-->
          <div class="overall" style="min-height:308px; width: 33%;">
            <h3>성능가동률</h3>
            <div class="gage">
              <div id="gauge2"></div>
              <span>전일 : <strong>85%</strong></span>
            </div>
            <div class="chtvalue">
              <h4>Reason for Performance<a href="/muRepoPerformance" class="btn"><i class="fa fa-file-o"></i> 상세보기</a></h4>
              <div class="valuebox" style="min-height:89px;">
                <template>
                  <dl><dt>aa</dt><dd>aa</dd><dd>aa</dd></dl>
                </template>
              </div>
              <!--<div class="valuebox" style="min-height:89px;">-->
                <!--<dl><dt>No information yet</dt></dl>-->
              <!--</div>-->
            </div>
          </div><!--/.overall-->
          <div class="overall" style="min-height:308px; width: 33%;">
            <h3>양품률</h3>
            <div class="gage">
              <div id="gauge3"></div>
              <span>전월 : <strong>55%</strong></span>
            </div>
            <div class="chtvalue">
              <h4>Low Quality Rate Products<a href="/muRepoQuality" class="btn"><i class="fa fa-file-o"></i> 상세보기</a></h4>
              <div class="valuebox" style="min-height:89px;">
                <template>
                  <dl><dt>aa</dt><dd>aa %</dd><dd>aa kg</dd></dl>
                </template>
              </div>
              <!--<div class="valuebox" style="min-height:89px;">-->
                <!--<dl><dt>No information yet</dt></dl>-->
              <!--</div>-->
            </div>
          </div><!--/.overall-->
        </div><!--/.splitwrap-->
      </v-flex>
    </v-layout>


    <v-layout row wrap style="margin-top: 3px;">
      <v-card color="grey lighten-4">
        <div style="padding: 10px;">
          <div style="background-color: red ; width:60px; height:3px; margin-left: 3px;"></div>
          <h2>설비가동현황</h2>
          <div style="overflow: scroll;">
            <div style="width:200px; display:inline-block">asd</div>
            <div style="width:4800px; display: inline-block;">asd</div>
          </div>
        </div>
      </v-card>

    </v-layout>









  </div>
</template>

<script>
  export default {
    name: 'display1',
    data () {
      return {
        msg: '화면 1'
      }
    },
    created () {
      // let justgage = document.createElement ( 'script');
      // justgage.setAttribute ( 'src', "/static/justgage/justgage.js");
      // document.head.appendChild (justgage);
      // let raphael = document.createElement ( 'script');
      // raphael.setAttribute ( 'src', "/static/justgage/raphael-2.1.4.min.js");
      // document.head.appendChild (raphael);
    },
    mounted() {
      var g = new JustGage({
        id: "gauge1",
        value: 67,
        min: 0,
        max: 100,
        title: "",
        label: "%",
        levelColors:['#FF4848'],
        shadowOpacity: 0.5,
      });
      var g = new JustGage({
        id: "gauge2",
        value: 67,
        min: 0,
        max: 100,
        title: "",
        label: "%",
        levelColors:['#00C6ED'],
        shadowOpacity: 0.5,
      });
      var g = new JustGage({
        id: "gauge3",
        value: 67,
        min: 0,
        max: 100,
        title: "",
        label: "%",
        levelColors:['#FF5E00'],
        shadowOpacity: 0.5,
      });
    },
    destroyed(){
      console.log('화면1 소멸')
    }
  }


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
