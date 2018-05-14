import Vue from 'vue'
import Vuex from 'vuex'

import tab from './module/tab.js'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    tab
  },
  state: {
    isPrint: true    // 프린트시 보여주지 않을 영역(메뉴바, 상단바)
  },
  mutations: {
    showPrint(state){
      state.isPrint = true;
    },
    hidePrint(state){
      state.isPrint = false;
    }
  },
  actions: {
    printPage({commit}, payload) {
      commit('hidePrint');
      window.setTimeout(function () {
        window.print();
        commit('showPrint');

      },100);

    }
  }
})
