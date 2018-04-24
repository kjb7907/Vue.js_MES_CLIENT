<template>
  <div class="hello">
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

    <v-layout row wrap style="margin-top: 3px;">
      <v-flex xs4 text-md-center>
        <v-card color="grey lighten-4">
          <h2>시간가동률</h2>
          <div id="gauge" class="200x160px"></div>
        </v-card>
      </v-flex>
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
      let justgage = document.createElement ( 'script');
      justgage.setAttribute ( 'src', "/static/justgage/justgage.js");
      document.head.appendChild (justgage);
      let raphael = document.createElement ( 'script');
      raphael.setAttribute ( 'src', "/static/justgage/raphael-2.1.4.min.js");
      document.head.appendChild (raphael);
    },
    mounted() {
      var g = new JustGage({
        id: "gauge",
        value: 67,
        min: 0,
        max: 100,
        title: "Visitors"
      });
    },
    destroyed(){
      console.log('화면1 소멸')
    }
  }


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
