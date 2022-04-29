export interface IAppState {
  isCollapse: boolean
}
export default {
  state: {
    isCollapse: false
  },
  mutations: {
    changeCollapse (state:IAppState, value:boolean) {
      state.isCollapse = value
    }
  }
}
