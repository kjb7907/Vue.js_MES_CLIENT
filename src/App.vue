<template>
  <v-app id="inspire">
    <base_menu></base_menu>
  </v-app>
</template>

<script>
  import menu from '@/components/menu'

  export default {
    components:{ base_menu: menu },
    data: () => ({
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
      active: null,
      drawer: null,
      items: [
        { icon: 'lightbulb_outline', text: '화면1' },
        { icon: 'lightbulb_outline', text: '화면2' },
        { icon: 'lightbulb_outline', text: '화면3' },
        { icon: 'lightbulb_outline', text: '화면4' },
        // { icon: 'lightbulb_outline', text: 'Notes' },
        // { icon: 'touch_app', text: 'Reminders' },
        // { heading: 'Labels' },
        // { icon: 'add', text: 'Create new label' },
        // { divider: true },
        // { icon: 'archive', text: 'Archive' },
        // { icon: 'delete', text: 'Trash' },
        // { divider: true },
        // { icon: 'settings', text: 'Settings' },
        // { icon: 'chat_bubble', text: 'Trash' },
        // { icon: 'help', text: 'Help' },
        // { icon: 'phonelink', text: 'App downloads' },
        // { icon: 'keyboard', text: 'Keyboard shortcuts' }
      ]
    }),
    props: {
      source: String
    },
    computed: {
    },
    mounted() {

    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
