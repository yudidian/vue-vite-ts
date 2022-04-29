import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import getters from '@/store/getters'
import app, { IAppState } from './module/app'
export interface IAllState {
  app: IAppState
}
export const key: InjectionKey<Store<IAllState>> = Symbol('store')
export const store = createStore({
  getters,
  modules: {
    app
  }
})
export function useStore () {
  return baseUseStore(key)
}
