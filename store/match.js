export const state = () => ({
  matchUsers: []
})

export const mutations = {
  addMatchEmail(state, email) {
    state.matchUsers.push({ email })
  },
  removeMatchEmail(state, email) {
    state.matchUsers = state.matchUsers.filter(user => user.email !== email)
  }
}
