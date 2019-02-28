export default function ({ store, redirect }) {
  if (!localStorage.getItem('user')) {
    store.dispatch('auth/redirectUser', '/')
  } else if (!store.state.user) {
    store.state.user = JSON.parse(localStorage.getItem('user'))
  }
}
