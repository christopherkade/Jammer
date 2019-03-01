
export const state = () => ({
  message: '',
  isShown: false,
  type: 'is-danger'
})

export const getters = {
  getMessage(state) {
    return state.message
  },
  getIsShow(state) {
    return state.isShown
  }
}

export const mutations = {
  setNotification(state, { message, type }) {
    state.message = message
    state.type = type
    state.isShown = true
  },
  setIsShown(state, isShown) {
    state.isShown = isShown
  }
}
