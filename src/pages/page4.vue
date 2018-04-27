<template>
  <div class="hello">
    <v-layout row wrap style="margin-top: 3px;">
      <v-flex xs12>
        <v-card>
          <div style="height: 90px; width: 100%; padding: 10px;">
            <h2>양품률 리포트</h2>
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
              <v-btn small depressed color="amber lighten-1"style="margin: 10px 0px 0px 0px"><v-icon small>local_printshop</v-icon>&nbsp;리포트 출력</v-btn>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'display4',
    data () {
      return {
        msg: '화면 4'
      }
    },
    destroyed(){
      console.log('화면4 소멸')
    }
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
