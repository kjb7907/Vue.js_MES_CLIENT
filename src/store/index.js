import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    tabs: [
      {
        name: 'tab1',
        isOnOff: true,
        currPage: 'page1'
      },
      {
        name: 'tab2',
        isOnOff: true,
        currPage: 'page1'
      },
      {
        name: 'tab3',
        isOnOff: true,
        currPage: 'page1'
      },
      {
        name: 'tab4',
        isOnOff: true,
        currPage: 'page1'
      }
    ],
    tabCount: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
