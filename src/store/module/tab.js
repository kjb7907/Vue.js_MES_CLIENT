import * as types from '../mutation-types'

const state = {
  tabs: [
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
      isSelect:true,
      pageId: 'newTab',
      pageText: '새 탭',
      color:'amber'
    })
  },
  selectTab (state, index) {              // 탭 선택
    state.tabs[index].isSelect=true;
    state.tabs[index].color='amber';
    state.currTabIndex=index;
  },
  deselectTab (state, index) {            // 탭 선택해제
    state.tabs[index].isSelect=false;
    state.tabs[index].color='';
  },
  closeTab (state,index) {                // 탭 닫기
    state.tabs.splice(index,1)
  },
  selectMenu (state, payload){            // 메뉴 선택
    state.tabs[state.currTabIndex].pageId = payload.pageId;
    state.tabs[state.currTabIndex].pageText = payload.pageText;
  }
}

const actions= {
  addTab ({commit, state}) {                      // 탭추가
    if(state.tabs.length < state.tabCountMax){
      commit('addTab');                           // 새탭추가
      commit('deselectTab', state.currTabIndex);  // 선택되있던 탭 선택해제
      commit('selectTab', state.tabs.length-1);   // 새탭 선택
    }
  },
  selectTab ({commit, state}, index) {            // 탭선택
    if (state.tabs[index] != undefined) {
      commit('deselectTab', state.currTabIndex);  // 선택되있던 탭 선택해제
      commit('selectTab', index);                 // 선택한탭 선택
    };
  },
  closeTab ({commit}, index) {                    // 탭 닫기
    commit('deselectTab', state.currTabIndex);    // 선택되었던 탭 선택해제
    commit('selectTab', index-1);                 // 닫을 탭 이전 인덱스 탭 선택
    commit('closeTab', index)                     // 선택한 탭 닫기
  },
  selectMenu ({commit, state}, payload) {

  }
}

export default {
  state,
  mutations,
  actions
}
