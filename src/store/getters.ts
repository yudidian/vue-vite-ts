import { IAppState } from './module/app'
interface IState {
  app: IAppState
}
export interface IAllGetters {
  isCollapse: boolean
}
export default {
  isCollapse: (state:IState):boolean => {
    return state.app.isCollapse
  }
}
