<template>
  <div class="hello">

    <v-layout row wrap style="margin-top: 3px;">
      <v-flex xs12>
        <v-card>
          <div style="height: 90px; width: 100%; padding: 10px;">
            <h2>성능가동률 리포트</h2>
            <div style="display: inline-block;">
              <v-menu
                ref="menu2"
                lazy
                :close-on-content-click="false"
                v-model="menu2"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-right="40"
                min-width="100px"
                :return-value.sync="date"
              >
                <v-text-field
                  slot="activator"
                  label=""
                  v-model="date"
                  prepend-icon="event"
                  readonly
                  style="width:130px;"
                ></v-text-field>
                <v-date-picker v-model="date" @input="$refs.menu2.save(date)"></v-date-picker>

              </v-menu>
            </div>
            <div style="display: inline-block; float:right;">
              <v-btn @click="printPage()" class="no-print-page" small depressed color="amber lighten-1"style="margin: 10px 0px 0px 0px"><v-icon small>local_printshop</v-icon>&nbsp;리포트 출력</v-btn>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap style="margin-top: 1px;">
      <v-flex xs12>
        <v-card color="grey lighten-3">
          <div style="height: 30px; width: 100%; padding: 5px 10px 5px 10px;">
            <h3><v-icon small>description</v-icon>&nbsp; 제품별 실제 Cycle Time 추이</h3>
          </div>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap style="margin-top: 1px;">
      <v-flex xs12>
        <div id="chart1" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
      </v-flex>
    </v-layout>

    <v-layout row wrap style="margin-top: 1px;">
      <v-flex xs12>
        <v-card color="grey lighten-3">
          <div style="height: 30px; width: 100%; padding: 5px 10px 5px 10px;">
            <h3><v-icon small>description</v-icon>&nbsp;제품별 실제 Cycle Time 표준편차</h3>
          </div>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs12>
        <div style="width: 100%; padding: 5px 20px 5px 20px;">
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
            class="elevation-1"
            style="margin-top:20px;"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.calories }}</td>
              <td class="text-xs-right">{{ props.item.fat }}</td>
              <td class="text-xs-right">{{ props.item.carbs }}</td>
              <td class="text-xs-right">{{ props.item.protein }}</td>
              <td class="text-xs-right">{{ props.item.iron }}</td>
            </template>
          </v-data-table>
        </div>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
  export default {
    name: 'display3',
    data () {
      return {
        date:'',
        menu2:'',
        headers: [
          {
            text: '제품명',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: '최소 C/T', value: 'calories' },
          { text: '평균 C/T', value: 'fat' },
          { text: '최대 C/T', value: 'carbs' },
          { text: '표준편차', value: 'protein' },
          { text: '비고', value: 'iron' }
        ],
        items: [
          {
            value: false,
            name: 'PB 육성돈',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'PB 육성돈',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
        ]
      }
    },
    mounted(){
      drawChart();

    },
    methods:{
      printPage(){
        this.$store.dispatch('printPage');
      }
    },
    destroyed(){
      console.log('화면3 소멸')
    }
  }

  var chart1;
  function drawChart() {
    chart1 = Highcharts.chart('chart1', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Monthly Average Temperature'
      },
      subtitle: {
        text: 'Source: WorldClimate.com'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }]
    });
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
