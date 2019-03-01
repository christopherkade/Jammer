const firebase = require('firebase/app')
require('firebase/auth')

export default ({ store, route }) => {
  if (!firebase.apps.length) {
    const config = {
      apiKey: 'AIzaSyDFS8Wk6B7ontvZeargY3z7k0u92EJvlN0',
      authDomain: 'jammer-bd4bc.firebaseapp.com',
      databaseURL: 'https://jammer-bd4bc.firebaseio.com',
      projectId: 'jammer-bd4bc',
      storageBucket: 'jammer-bd4bc.appspot.com',
      messagingSenderId: '156254683024'
    }

    firebase.initializeApp(config)
  }

  window.onNuxtReady(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user && route.fullPath !== '/') {
        store.dispatch('auth/redirectUser', '/')
      }

      if (!user) {
        localStorage.setItem('user', null)
      } else {
        localStorage.setItem('user', JSON.stringify(user))
      }
    })
  })
}
