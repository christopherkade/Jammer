const firebase = require('firebase/app')
require('firebase/auth')

export const state = () => ({
  user: {}
})

export const actions = {
  googleSignIn({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider).catch(function (error) {
      commit('notification/setNotification', {
        message: error.message,
        type: 'is-danger'
      })
    })
  },
  signOut(context) {
    state.user = null
    firebase.auth().signOut()
  },
  redirectUser(context, path) {
    this.$router.replace({ path })
  }
}

export const strict = false
