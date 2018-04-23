import * as types from '../mutation-types'

const state = {
  tabs: [
    {
      isOnOff: true,
      isSelect:true,
      pageId: 'newTab',
      pageText: '새 탭',
      color:'amber'
    }
  ],
  currTabIndex:0,
  tabCountMax:5
}

const mutations = {
  // [types.TOGGLE_DEVICE] (state, device) {
  //   state.device.isMobile = device === 'mobile'
  //   state.device.isTablet = device === 'tablet'
  // },
  addTab (state) {
    state.tabs.push({
      isOnOff: true,
      isSelect:false,
      pageId: 'newTab',
      pageText: '새 탭',
      color:''
    })
  },
  selectTab (state, index) {
    state.tabs[index].isSelect=true;
    state.tabs[index].color='amber';
    state.currTabIndex=index;
  },
  deselectTab (state, index) {
    state.tabs[index].isSelect=false;
    state.tabs[index].color='';
  },
  closeTab (state,index) {
    state.tabs.splice(index,1)
  },
  selectMenu (state, payload){
    state.tabs[state.currTabIndex].pageId = payload.pageId;
    state.tabs[state.currTabIndex].pageText = payload.pageText;
  }
}

const actions= {
  addTab ({commit, state}) {
    if(state.tabs.length < state.tabCountMax){
      commit('addTab');
      commit('deselectTab', state.currTabIndex);
      commit('selectTab', state.tabs.length-1);
    }
  },
  selectTab ({commit, state}, index) {
    if (state.tabs[index] != undefined) {
      commit('deselectTab', state.currTabIndex);
      commit('selectTab', index);
    };
  },
  closeTab ({commit}, index) {
    commit('deselectTab', state.currTabIndex);
    commit('selectTab', index-1);
    commit('closeTab', index)
  },
  selectMenu ({commit}, payload) {
    commit('selectMenu', payload)
  }
}

export default {
  state,
  mutations,
  actions
}
