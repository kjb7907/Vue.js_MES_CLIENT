<template>
  <v-app id="inspire">

    <v-navigation-drawer
      v-if="isPrint"
      fixed
      clipped
      class="grey lighten-4"
      app
      v-model="drawer"
      width="200"
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
            @click="selectMenu(item.pageId,item.text)"
          >
            <v-list-tile-content>
              <v-list-tile-title style="font-size:12px;">
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar v-if="isPrint" app clipped-left flat fixed height="50" style="border-bottom: solid lightgray 1px; background-color: white">
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>

      <span class="title ml-3 mr-5">DX-<span class="text">MES</span></span>

      <v-spacer></v-spacer>

      <img src="@/assets/logo_collabee.png" style="height: 30px;">

      <v-spacer></v-spacer>

      <v-btn fab depressed small>
        <v-icon>android</v-icon>
      </v-btn>

      <v-menu offset-y>
        <v-btn color="white" depressed small slot="activator">사용자<v-icon>arrow_drop_down</v-icon></v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>드롭메뉴1</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>드롭메뉴2</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>

      <tab-bar class="no-print-page"></tab-bar>
      <div class="no-print-page" style="height: 34px;"></div>
      <tab-content v-for="(i, key, index) in tabs" :key="index" v-show="i.isSelect" :pageId="i.pageId"></tab-content>

    </v-content>
  </v-app>
</template>

<script>
  import tabBar from './tabBar'
  import tabContent from './tabContent'

  export default {
    components:{
      tabBar: tabBar,
      tabContent: tabContent
    },
    data: () => ({
      active: null,
      drawer: null,
      items: [
        { icon: 'insert_chart', text: '종합화면', pageId: 'page1' },
        { icon: 'access_time', text: '시간가동률 리포트', pageId: 'page2' },
        { icon: 'fitness_center', text: '성능가동률 리포트', pageId: 'page3' },
        { icon: 'pie_chart', text: '양품률 리포트', pageId: 'page4' },

/*
        { icon: 'lightbulb_outline', text: 'Notes' },
        { icon: 'touch_app', text: 'Reminders' },
        { heading: 'Labels' },
        { icon: 'add', text: 'Create new label' },
        { divider: true },
        { icon: 'archive', text: 'Archive' },
        { icon: 'delete', text: 'Trash' },
        { divider: true },
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Trash' },
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'keyboard', text: 'Keyboard shortcuts' }
*/
      ]
    }),
    props: {
      source: String
    },
    computed: {
      tabs() {
        return this.$store.state.tab.tabs;
      },
      isPrint() {
        return this.$store.state.isPrint
      }
    },
    methods: {
      selectMenu(pageId, pageText) {
        this.$store.dispatch('selectMenu',{pageId: pageId, pageText: pageText})
      }
    },
    mounted() {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
