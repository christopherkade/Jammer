const firebase = require('firebase/app')
require('firebase/auth')

export const state = () => ({
  user: {}
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  resetUser(state) {
    state.user = {}
  }
}

export const getters = {
  getUser(state) {
    return state.user
  }
}

export const actions = {
  googleSignIn({ commit, dispatch }) {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider).then((res) => {
      dispatch('redirectUser', '/songs')
    }).catch((error) => {
      commit('notification/setNotification', {
        message: error.message,
        type: 'is-danger'
      }, { root: true })
    })
  },
  signOut({ dispatch, commit }) {
    firebase.auth().signOut().then(() => {
      // On sign out, reset the application's state
      commit('resetUser')
      commit('songs/resetSongs', null, { root: true })
      commit('match/resetMatch', null, { root: true })
      dispatch('redirectUser', '/')
    })
  },
  redirectUser(context, path) {
    this.$router.replace({ path })
  }
}

export const strict = false
