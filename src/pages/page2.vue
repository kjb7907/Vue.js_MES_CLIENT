<template>
  <div class="hello">

    <v-layout row wrap style="margin-top: 3px;">
      <v-flex xs12>
        <v-card color="grey lighten-4">
          <div style="height: 90px; width: 100%; padding: 10px;">
            <div style="background-color: red ; width:60px; height:3px; margin-left: 3px;"></div>
            <h2>시간가동률 리포트</h2>
            <v-btn small depressed color="amber lighten-1"style="margin: 10px 0px 0px 0px"><v-icon small>local_printshop</v-icon>&nbsp;리포트 출력</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap style="margin-top: 3px;">
      <v-flex xs12>
        <v-card color="grey lighten-5">
          <div style="height: 60px; width: 100%; padding: 20px 10px 20px 10px;">
            조회
          </div>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap style="margin-top: 3px;">
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
        <div style="height: 700px; width: 100%; padding: 5px 20px 5px 20px;">

          

          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
            class="elevation-1"
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
    destroyed(){
      console.log('화면2 소멸')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
