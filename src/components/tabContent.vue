<template>
  <div>
    <component :is="pageId"></component>
  </div>
</template>
<script>

  export default {
    name: 'tabContent',
    components:{
      newTab: ()=> import('@/pages/newTab'),
      page1: ()=> import('@/pages/page1'),
      page2: ()=> import('@/pages/page2'),
      page3: ()=> import('@/pages/page3'),
      page4: ()=> import('@/pages/page4')
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    props: [
      'pageId'
    ],
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
