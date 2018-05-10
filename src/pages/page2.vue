<template>
  <div id="page2">

    <v-layout row wrap style="margin-top: 3px;">
      <v-flex xs12>
        <v-card>
          <div style="height: 90px; width: 100%; padding: 10px;">
            <h2>시간가동률 리포트</h2>
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
              <v-btn @click="printPage()" small depressed color="amber lighten-1"style="margin: 10px 0px 0px 0px"><v-icon small>local_printshop</v-icon>&nbsp;리포트 출력</v-btn>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap style="margin-top: 1px;">
      <v-flex xs12>
        <v-card color="grey lighten-3">
          <div style="height: 30px; width: 100%; padding: 5px 10px 5px 10px;">
            <h3><v-icon small>description</v-icon>&nbsp;설비별 시간가동률 리포트</h3>
          </div>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap style="margin-top: 3px;">
      <v-flex xs12 color="grey lighten-4">
        <div style="width: 100%; padding: 5px 20px 5px 20px;">
          <h2 style="margin-bottom: 10px;"><v-icon>build</v-icon>펠렛1호기</h2>
          <v-card dark color="cyan" style="display: inline-block; width:15%;height: 40px;text-align: center; padding: 10px;"><h3>예방정비</h3></v-card>
          <v-card style="display: inline-block; width:34%; height: 40px;padding: 10px;"><h3>asdasd</h3></v-card>

          <v-card dark color="cyan" style="display: inline-block; width:15%;height: 40px;text-align: center; padding: 10px;"><h3>다운타임</h3></v-card>
          <v-card style="display: inline-block; width:34%; height: 40px;padding: 10px;"><h3>asdss</h3></v-card>

          <div style="margin-top:10px;">
            <v-card dark color="blue-grey lighten-2" style="display: inline-block; width:25%;height: 40px;text-align: center;padding: 10px;"><h3>총조업시간</h3></v-card>
            <v-card style="display: inline-block; width:74.5%; height: 40px;padding: 10px;"><h3>asdss</h3></v-card>
          </div>

          <div style="margin-top:10px;">
            <v-card dark color="blue-grey lighten-2" style="display: inline-block; width:25%;height: 40px;text-align: center;padding: 10px;"><h3>계획정지</h3></v-card>
            <v-card style="display: inline-block; width:74.5%; height: 40px;padding: 10px;"><h3>asdss</h3></v-card>
          </div>

          <div style="margin-top:10px;">
            <v-card dark color="blue-grey lighten-2" style="display: inline-block; width:25%;height: 40px;text-align: center;padding: 10px;"><h3>총가용시간</h3></v-card>
            <v-card style="display: inline-block; width:74.5%; height: 40px;padding: 10px;"><h3>asdss</h3></v-card>
          </div>

          <div style="margin-top:10px;">
            <v-card dark color="blue-grey lighten-2" style="display: inline-block; width:25%;height: 40px;text-align: center;padding: 10px;"><h3>다운타임정지시간</h3></v-card>
            <v-card style="display: inline-block; width:74.5%; height: 40px;padding: 10px;"><h3>asdss</h3></v-card>
          </div>

          <div style="margin-top:10px;">
            <v-card dark color="blue-grey lighten-2" style="display: inline-block; width:25%;height: 40px;text-align: center;padding: 10px;"><h3>실제가동시간</h3></v-card>
            <v-card style="display: inline-block; width:74.5%; height: 40px;padding: 10px;"><h3>asdss</h3></v-card>
          </div>

        </div>
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
    name: 'display2',
    data () {
      return {
        date:'',
        menu2:'',
        headers: [
          {
            text: '설비명',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: '순위', value: 'calories' },
          { text: '정지사유', value: 'fat' },
          { text: '정지시간', value: 'carbs' },
          { text: '비율', value: 'protein' },
          { text: '건수', value: 'iron' }
        ],
        items: [
          {
            value: false,
            name: '펠렛1호기',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: '펠렛2호기',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
        ]
      }
    },
    computed: {

    },
    methods:{
      printPage(){
        this.$store.dispatch('printPage');
      }
    },
    destroyed(){
      console.log('화면2 소멸')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
