<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <page1></page1>
    <page2></page2>
    <page3></page3>
    <page4></page4>
  </div>
</template>

<script>
  import page1 from '@/pages/page1'
  import page2 from '@/pages/page2'
  import page3 from '@/pages/page3'
  import page4 from '@/pages/page4'

  export default {
    components: {page1 , page2 , page3 , page4},
    name: 'HelloWorld',
    data () {
      return {
        msg: '탭 1'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
