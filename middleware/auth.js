export default function ({ store, redirect }) {
  if (!localStorage.getItem('user')) {
    store.dispatch('auth/redirectUser', '/')
  } else {
    console.log('-- YES, user =', store.state.user)
    if (!store.state.user) {
      console.log('Object not found, parsing...')
      store.state.user = JSON.parse(localStorage.getItem('user'))
      console.log('Now have : ', store.state.user)
    }
  }
}
