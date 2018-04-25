<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-text-field></v-text-field>
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
