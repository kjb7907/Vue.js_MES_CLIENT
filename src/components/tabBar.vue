<template>
  <div>

    <v-card>
      <v-chip v-for="(i, key, index) in tabs" :key="index"
              v-if="i.isOnOff"
              label small
              :color="i.color"
              @click="selectTab(key)"
              >
        {{key}}. {{ i.currPage }} &nbsp;
        <v-icon @click="closeTab(i.isSelect,key)" color="black" small>clear</v-icon>
      </v-chip>
      <v-chip label small @click="addTab()"><v-icon color="black">add_circle_outline</v-icon></v-chip>
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
