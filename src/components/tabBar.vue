<template>
  <div>

    <v-card>
      <v-chip v-for="(i, key, index) in tabs" :key="index"
              v-if="i.isOnOff"
              v-model="i.isOnOff"
              label small close
              :color="i.color"
              @click="tabSelect(key)"
              >{{ i.currPage }}</v-chip>
      <v-chip label small><v-icon color="black">add</v-icon></v-chip>
    </v-card>

  </div>
</template>

<script>
  import tab1 from '@/components/tab1'
  import tab2 from '@/components/tab2'
  import tab3 from '@/components/tab3'
  import tab4 from '@/components/tab4'

  export default {
    name: 'tabBar',
    components:{ tab1, tab2 ,tab3 ,tab4 },
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
      tabSelect(index){
        this.$store.dispatch('tabSelect', index);
      }
    },
    mounted(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
