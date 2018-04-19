<template>
  <div>

    <v-card>
      <v-chip close v-model="chip1"  label color="amber">Complete</v-chip>
      <v-chip close v-model="chip2"  label>Complete</v-chip>
      <v-chip close v-model="chip3"  label>Complete</v-chip>
      <v-chip close v-model="chip4"  label>Complete</v-chip>
      <v-icon large color="orange darken-2">note_add</v-icon>

    </v-card>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        chip1: true,
        chip2: true,
        chip3: true,
        chip4: true,
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
