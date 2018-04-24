import * as types from '../mutation-types'

const state = {
  tabs: [
    {
      isSelect:true,
      pageId: 'page1',
      pageText: '화면 1',
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
  addTab (state, payload) {
    state.tabs.push({
      isSelect:true,
      pageId: 'newTab',
      pageText: '새 탭',
      color:''
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
  selectMenu ({commit, dispatch, state}, payload) {

    var isNewTab = true;                          // 새 탭 열기 여부
    var prevIndex;                                // 선택한 메뉴가 열려있던 인덱스

    for(var i=0 ; i<state.tabs.length ; i++){     // 선택한 메뉴의 탭이 기존에 열려있는지 검사해 새 탭 여부 검사
      if(state.tabs[i].pageId == payload.pageId){
        isNewTab = false;
        prevIndex = i;
        break;
      }
    }

    if(isNewTab){                                 // 선택한 메뉴의 탭이 기존에 열려있지 않다면 새탭을 열기
      dispatch('addTab');
      commit('selectMenu',payload);
    }
    else{                                         // 선택한 메뉴의 탭이 기존에 열려있다면 기존의 탭으로 포커스 이동
      dispatch('selectTab',prevIndex);
    }
  }
}

export default {
  state,
  mutations,
  actions
}
