<template>
  <div>
    <page1></page1>
    <page2></page2>
    <page3></page3>
    <page4></page4>
  </div>
</template>
pages
<script>
  import page1 from '@/pages/page1'
  import page2 from '@/pages/page2'
  import page3 from '@/pages/page3'
  import page4 from '@/pages/page4'

  export default {
    name: 'tabContent',
    components:{ page1, page2 ,page3 , page4  },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed:{
      tabs(){
        return this.$store.state.tabs;
      }
    },
    mounted(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
