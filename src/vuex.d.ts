import { Store } from 'vuex'

declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        count: number
    }

    // eslint-disable-next-line no-unused-vars
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}
