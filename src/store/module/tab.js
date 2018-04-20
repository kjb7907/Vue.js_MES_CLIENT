import * as types from '../mutation-types'

const state = {
  tabs: [
    {
      id: 'tab1',
      isOnOff: true,
      isSelect:true,
      currPage: 'page1',
      color:'amber'
    },
    {
      id: 'tab2',
      isOnOff: true,
      isSelect:false,
      currPage: 'page1',
      color:''
    },
    {
      id: 'tab3',
      isOnOff: false,
      isSelect:true,
      currPage: 'page1',
      color:''
    },
    {
      id: 'tab4',
      isOnOff: false,
      isSelect:true,
      currPage: 'page1',
      color:''
    }
  ],
  currTabIndex:0,
  tabCount: 0,
  tabCountMax:4
}

const mutations = {
  // [types.TOGGLE_DEVICE] (state, device) {
  //   state.device.isMobile = device === 'mobile'
  //   state.device.isTablet = device === 'tablet'
  // },
  tabSelect (state, index) {
    state.tabs[index].isSelect=true;
    state.tabs[index].color='amber';
    state.currTabIndex=index;
  },
  tabDeselect (state, index) {
    state.tabs[index].isSelect=false;
    state.tabs[index].color='';
  }
}

const actions= {
  tabSelect ({commit, state}, index) {
    commit('tabDeselect', state.currTabIndex);
    commit('tabSelect', index);
  }
}

export default {
  state,
  mutations,
  actions
}
