export default function ({ store }) {
  if (!localStorage.getItem('user')) {
    store.dispatch('auth/redirectUser', '/')
  } else if (!store.user) {
    store.commit('auth/setUser', JSON.parse(localStorage.getItem('user')))
  }
}
