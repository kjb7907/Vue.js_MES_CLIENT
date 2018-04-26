import * as types from '../mutation-types'

const state = {
  tabs: [
    {
      isOnOff: true,
      isSelect:true,
      pageId: 'page1',
      pageText: '종합화면',
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
      isOnOff: true,
      isSelect:true,
      pageId: 'newTab',
      pageText: '새 탭',
      color:''
    })
  },
  selectTab (state, index) {              // 탭 선택
    state.tabs[index].isSelect=true;
    state.tabs[index].color='amber lighten-1';
    state.currTabIndex=index;
  },
  deselectTab (state, index) {            // 탭 선택해제
    state.tabs[index].isSelect=false;
    state.tabs[index].color='';
  },
  closeTab (state,index) {                // 탭 닫기
    // state.tabs.splice(index,1)
    state.tabs[index].isOnOff=false;
    state.tabs[index].pageId='';
    state.tabs[index].pageText='';
  },
  selectMenu (state, payload){            // 메뉴 선택
    state.tabs[state.currTabIndex].pageId = payload.pageId;
    state.tabs[state.currTabIndex].pageText = payload.pageText;
  },
  recycleTab (state, index) {             // 닫았던 탭 재사용
    state.tabs[index].isOnOff=true;
    state.tabs[index].isSelect=true;
    state.tabs[index].color='amber lighten-1';
    state.currTabIndex=index;
  },
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
  closeTab ({commit, state}, index) {             // 탭 닫기
    commit('deselectTab', state.currTabIndex);    // 선택되었던 탭 선택해제

    if(state.tabs.length>1){                      // 탭이 닫히고 나서 다른탭을 선택하기 위한 조건
      if(index == 0){                             // 첫번째 탭이 닫히는경우 두번째 탭 선택
        commit('selectTab', index+1);             // 두번째 탭 선택
      }
      else {                                      // 첫번째 탭이 아닌 다른 탭이 닫히는경우
        commit('selectTab', index-1);             // 닫을 탭 이전 인덱스 탭 선택
      }

    }

    commit('closeTab', index)                     // 선택한 탭 닫기
  },
  selectMenu ({commit, dispatch, state}, payload) {

    var isExistTab = false;                       // 이미 존재하는 탭인지 여부
    var prevIndex;                                // 존재하는 메뉴의 탭 인덱스
    var isRecycleTab = false;                     // 재사용 가능한 탭의 여부
    var rcIndex;                                  // 재사용 할 탭 인덱스

    for(var i=0 ; i<state.tabs.length ; i++){
      if(state.tabs[i].pageId == payload.pageId){ // 선택한 메뉴의 탭이 기존에 열려있는지 검사해 새 탭 여부 검사
        isExistTab = true;
        prevIndex = i;
        break;
      }
      if(state.tabs[i].isOnOff == false){
        isRecycleTab = true;
        rcIndex = i;
      }
    }

    if(isExistTab){                               // 이미 존재하는 탭일경우 그 탭으로 포커스 이동
      dispatch('selectTab',prevIndex);
    }
    else if(isRecycleTab){                        // 재사용 가능한 탭이 있는경우 그 탭에서 메뉴 실행
      commit('deselectTab', state.currTabIndex);  // 선택되있던 탭 선택해제
      commit('recycleTab', rcIndex);
      commit('selectMenu',payload);
    }
    else {                                        // 중복된 탭도 없고 재사용 가능한 탭도 없을 경우 새로운 탭에 메뉴 실행
      dispatch('addTab');
      commit('selectMenu',payload);
    }

  }
}

export default {
  state,
  mutations,
  actions
}
