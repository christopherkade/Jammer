import firebase from 'firebase'

export default ({ store, redirect, route }) => {
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
      if (user && route.fullPath === '/') {
        store.state.user = user
        console.log('AUTH OK: ', store.state.user.email)
        localStorage.setItem('user', JSON.stringify(user))
        store.dispatch('auth/redirectUser', '/dashboard')
      } else if (!user) {
        console.log('AUTH NOT OK')
        localStorage.setItem('user', null)
        store.state.user = null
        store.dispatch('auth/redirectUser', '/')
      }
    })
  })
}
