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


    <div class="section" style="margin-top: 10px;">
      <div style="background-color: red ; width:60px; height:3px; margin-left: 3px;"></div>
      <h2 class="tit">설비가동현황</h2>


      <div class="gantt" style="margin-top:0;"  id="operPrediction">


        <div class="linearea">
          <template>
            <div class="line">
              <div class="lineInfo">
                <h2>펠렛1호</h2>
                <p class="product">PB 원더플 마블</p>
                <dl><dt>OEE</dt><dd>22%</dd></dl>
                <dl><dt>시간가동률</dt><dd>22%</dd></dl>
                <dl><dt>성능가동률</dt><dd>22%</dd></dl>
                <dl><dt>양품률</dt><dd>22%</dd></dl>
              </div>
              <ul>
                <li>계획</li>
                <li>예상</li>
                <li>가동</li>
              </ul>
            </div><!--/.line-->
            <div class="line">
              <div class="lineInfo">
                <h2>펠렛1호</h2>
                <p class="product">PB 원더플 마블</p>
                <dl><dt>OEE</dt><dd>22%</dd></dl>
                <dl><dt>시간가동률</dt><dd>22%</dd></dl>
                <dl><dt>성능가동률</dt><dd>22%</dd></dl>
                <dl><dt>양품률</dt><dd>22%</dd></dl>
              </div>
              <ul>
                <li>계획</li>
                <li>예상</li>
                <li>가동</li>
              </ul>
            </div><!--/.line-->
            <div class="line">
              <div class="lineInfo">
                <h2>펠렛1호</h2>
                <p class="product">PB 원더플 마블</p>
                <dl><dt>OEE</dt><dd>22%</dd></dl>
                <dl><dt>시간가동률</dt><dd>22%</dd></dl>
                <dl><dt>성능가동률</dt><dd>22%</dd></dl>
                <dl><dt>양품률</dt><dd>22%</dd></dl>
              </div>
              <ul>
                <li>계획</li>
                <li>예상</li>
                <li>가동</li>
              </ul>
            </div><!--/.line-->
          </template>
        </div><!--/.linearea-->

        <div class="chartwrap" id="chartScroll">

          <div class="chartarea" style="width:2525px;"><!-- width값 시간 * 40 -->

            <ol class="day">
              <li class="active"><p id="calcToday"></p>
                <ol class="time">
                  <li>07</li><li>08</li><li>09</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li>
                </ol>
              </li>
              <li class="active"><p id="calcTomorrow"></p>
                <ol class="time">
                  <li>00</li><li>01</li><li>02</li><li>03</li><li>04</li><li>05</li><li>06</li><li>07</li>
                </ol>
              </li>
            </ol>

            <template>
              <div class="mchart">
                <div class="currLine" style="display:none;border-left: 2.5px solid rgb(234, 71, 44);position: absolute;height: 135px;"></div>
                <ul class="bg">
                  <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                  <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                </ul>

                <div class="plan">
                  <p style="left:0px;width:200px;"><span>PB 캠펜 (15,000kg)</span><em> 22 ~ 22  <br> 22 (22kg) </em></p>
                </div><!--/.plan-->

                <div class="figure">
                  <template>
                    <p style="left:0px;width:200px;" class="fin"><span>asdd(22 kg)</span>
                      <em>Production Date : 212<br>22 ~ 22<br> asd<br> Amount : 123 kg </em>
                    </p>
                    <template><span><i style="left:200px;"></i></span></template>
                  </template>
                </div><!--/.figure-->

                <div class="present">
                  <template>
                    <p @click="getPop(run.runYn, run.procRunId)" style="left:0px;width:200px;cursor:pointer;" class="run"><b>asdd</b>
                      <em>321 ~ 3213 (123)<br>123</em>
                      <em>312 ~ 123 (123)<br>Operation of equipment</em>
                    </p>
                  </template>
                </div><!--/.present-->

              </div><!--/.mchart-->
            </template>

            <template>
              <div class="mchart">
                <div class="currLine" style="display:none;border-left: 2.5px solid rgb(234, 71, 44);position: absolute;height: 135px;"></div>
                <ul class="bg">
                  <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                  <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                </ul>

                <div class="plan">
                  <p style="left:0px;width:200px;"><span>PB 캠펜 (15,000kg)</span><em> 22 ~ 22  <br> 22 (22kg) </em></p>
                </div><!--/.plan-->

                <div class="figure">
                  <template>
                    <p style="left:0px;width:200px;" class="fin"><span>asdd(22 kg)</span>
                      <em>Production Date : 212<br>22 ~ 22<br> asd<br> Amount : 123 kg </em>
                    </p>
                    <template><span><i style="left:200px;"></i></span></template>
                  </template>
                </div><!--/.figure-->

                <div class="present">
                  <template>
                    <p @click="getPop(run.runYn, run.procRunId)" style="left:0px;width:200px;cursor:pointer;" class="run"><b>asdd</b>
                      <em>321 ~ 3213 (123)<br>123</em>
                      <em>312 ~ 123 (123)<br>Operation of equipment</em>
                    </p>
                  </template>
                </div><!--/.present-->

              </div><!--/.mchart-->
            </template>

            <template>
              <div class="mchart">
                <div class="currLine" style="display:none;border-left: 2.5px solid rgb(234, 71, 44);position: absolute;height: 135px;"></div>
                <ul class="bg">
                  <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                  <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                </ul>

                <div class="plan">
                  <p style="left:0px;width:200px;"><span>PB 캠펜 (15,000kg)</span><em> 22 ~ 22  <br> 22 (22kg) </em></p>
                </div><!--/.plan-->

                <div class="figure">
                  <template>
                    <p style="left:0px;width:200px;" class="fin"><span>asdd(22 kg)</span>
                      <em>Production Date : 212<br>22 ~ 22<br> asd<br> Amount : 123 kg </em>
                    </p>
                    <template><span><i style="left:200px;"></i></span></template>
                  </template>
                </div><!--/.figure-->

                <div class="present">
                  <template>
                    <p @click="getPop(run.runYn, run.procRunId)" style="left:0px;width:200px;cursor:pointer;" class="run"><b>asdd</b>
                      <em>321 ~ 3213 (123)<br>123</em>
                      <em>312 ~ 123 (123)<br>Operation of equipment</em>
                    </p>
                  </template>
                </div><!--/.present-->

              </div><!--/.mchart-->
            </template>

          </div><!--/.chartarea-->

        </div><!--/.chartwrap-->

      </div><!--/.gantt-->

    </div><!--/.section-->








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
