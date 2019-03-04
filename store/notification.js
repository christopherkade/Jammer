
export const state = () => ({
  message: '',
  isShown: false,
  type: 'is-danger',
  duration: 3000
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
  setNotification(state, { message, type, duration = 3000 }) {
    state.message = message
    state.type = type
    state.isShown = true
    state.duration = duration
  },
  setIsShown(state, isShown) {
    state.isShown = isShown
  }
}
