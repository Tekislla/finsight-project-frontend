import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export const store = createStore({
  state () {
    return {
      user: {
        name: '',
        email: '',
        token: ''
      }
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    logout (state) {
      state.user = {
        name: 'John',
        email: '',
        token: ''
      }
    }
  },
  getters: {
    isLogged: state => {
      return state.user.token !== ''
    }
  },
  plugins: [createPersistedState({
    storage: window.localStorage
  })]
})
