const firebase = require('firebase/app')
require('firebase/auth')

export const state = () => ({
  user: {}
})

export const actions = {
  googleSignIn({ commit, dispatch }) {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider).then((res) => {
      state.user = res.user
      dispatch('redirectUser', '/dashboard')
    }).catch((error) => {
      commit('notification/setNotification', {
        message: error.message,
        type: 'is-danger'
      }, { root: true })
    })
  },
  signOut({ dispatch }) {
    state.user = null
    firebase.auth().signOut().then(() => {
      dispatch('redirectUser', '/')
    })
  },
  redirectUser(context, path) {
    this.$router.replace({ path })
  }
}

export const strict = false
