<template>
  <div>

    <!--<tab1></tab1>-->
    <!--<tab2></tab2>-->
    <!--<tab3></tab3>-->
    <!--<tab4></tab4>-->

  </div>
</template>

<script>
  import tab1 from '@/components/tab1'
  import tab2 from '@/components/tab2'
  import tab3 from '@/components/tab3'
  import tab4 from '@/components/tab4'

  export default {
    name: 'HelloWorld',
    components:{ tab1, tab2 ,tab3 ,tab4 },
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
