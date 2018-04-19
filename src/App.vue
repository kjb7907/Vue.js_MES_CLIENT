<template>
  <v-app id="inspire">

    <v-navigation-drawer
      fixed
      clipped
      class="grey lighten-4"
      app
      v-model="drawer"
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            dark
            v-else-if="item.divider"
            class="my-3"
            :key="i"
          ></v-divider>
          <v-list-tile
            :key="i"
            v-else
            @click=""
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="amber" app absolute clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Tab&nbsp;<span class="text">Test</span></span>
      <v-text-field
        solo-inverted
        flat
        label="Search"
        prepend-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-tabs
        v-model="active"
        color="cyan"
        dark
        slider-color="yellow"
      >
        <v-tab v-for="(tab, index) in tabs" :key="tab.name" v-if="tab.isOnOff">{{key}} {{index}} {{tab.currPage}}</v-tab>
        <v-tab-item v-for="(tab, key) in tabs" :key="tab.name">
          <template v-if="key == 'tab1'">
            <tab1></tab1>
          </template>
          <template v-if="key == 'tab2'">
            <tab2></tab2>
          </template>
          <template v-if="key == 'tab3'">
            <tab3></tab3>
          </template>
          <template v-if="key == 'tab4'">
            <tab4></tab4>
          </template>
        </v-tab-item>

        <!--<v-tab>tab1</v-tab>-->
        <!--<v-tab-item><tab2></tab2></v-tab-item>-->

        <!--<v-tab>tab1</v-tab>-->
        <!--<v-tab-item><tab3></tab3></v-tab-item>-->

        <!--<v-tab>tab1</v-tab>-->
        <!--<v-tab-item><tab4></tab4></v-tab-item>-->

      </v-tabs>

    </v-content>
  </v-app>
</template>

<script>
  import tab1 from '@/components/tab1'
  import tab2 from '@/components/tab2'
  import tab3 from '@/components/tab3'
  import tab4 from '@/components/tab4'
  export default {
    components:{tab1, tab2, tab3 ,tab4 },
    data: () => ({
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
      tabs(){
        return this.$store.state.tabs
      }
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
