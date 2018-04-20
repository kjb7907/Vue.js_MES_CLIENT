import * as types from '../mutation-types'

const state = {
  tabs: [
    {
      isOnOff: true,
      isSelect:true,
      currPage: 'page1',
      color:'amber'
    }
  ],
  currTabIndex:0,
  tabCountMax:4
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
      currPage: '빈페이지',
      color:''
    })
  },
  selectTab (state, index) {
    state.tabs[index].isSelect=true;
    state.tabs[index].color='amber';
    state.currTabIndex=index;
  },
  deselectTab (state, index) {
    console.log(state.tabs[index]);
    state.tabs[index].isSelect=false;
    state.tabs[index].color='';
  },
  closeTab (state,index) {
    state.tabs.splice(index,1)
  }
}

const actions= {
  addTab ({commit}) {
    commit('addTab');
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
  }
}

export default {
  state,
  mutations,
  actions
}
