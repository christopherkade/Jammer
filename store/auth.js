import firebase from 'firebase'

export const state = () => ({
  user: {}
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const getters = {
  getUser(state, getters) {
    return state.user
  }
}

export const actions = {
  googleSignIn(context) {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider).catch(function (error) {
      /* eslint-disable */
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.email
      const credential = error.credential
      // TODO: Handle sign in error
    })
  },
  signOut(context) {
    console.log('Signing out')
    state.user = null
    firebase.auth().signOut()
  },
  redirectUser(context, path) {
    this.$router.replace({ path })
  }
}

export const strict = false
