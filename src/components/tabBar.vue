<template>
  <div>

    <v-card style="width:100%;margin-bottom: 5px; position: fixed; z-index: 2;">
      <v-chip v-for="(i, key, index) in tabs" v-if="i.isOnOff" :key="index"
              label small
              :color="i.color"
              @click="selectTab(key)"
              >
        {{ i.pageText }} &nbsp;
        <v-icon @click="closeTab(i.isSelect,key)" color="black" small>clear</v-icon>
      </v-chip>
      <!--<v-chip label small @click="addTab()"><v-icon color="black">add_circle_outline</v-icon></v-chip>-->
    </v-card>

  </div>
</template>

<script>

  export default {
    name: 'tabBar',
    components:{ },
    data () {
      return {
        msg: ''
      }
    },
    computed:{
      tabs(){
        return this.$store.state.tab.tabs;
      }
    },
    methods: {
      addTab(){
        this.$store.dispatch('addTab');
      },
      selectTab(index){
        this.$store.dispatch('selectTab', index);
      },
      closeTab(isSelect, index){
          this.$store.dispatch('closeTab', index);
      }
    },
    mounted(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
