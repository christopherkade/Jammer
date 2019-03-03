const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

export const state = () => ({
  // Users to be compared to
  users: [],
  // Array of songs that match between one or multiple users
  matchingSongs: []
})

export const getters = {
  getUsers(state) {
    return state.users
  },
  getMatchingSongs(state) {
    return state.matchingSongs
  }
}

export const mutations = {
  /**
   * Add a user to be matched to the array
   * @param {*} state
   * @param {*} user
   */
  addMatchUser(state, user) {
    state.users.push(user)
  },
  /**
   * Remove specific user from matched user array
   * @param {*} state
   * @param {*} email
   */
  removeMatchEmail(state, email) {
    state.users = state.users.filter(user => user.email !== email)
  },
  /**
   * Finds which songs the user and its input have in common
   * @param {*} state
   */
  updateMatchingSongs(state) {
    // Reset the matching song list
    state.matchingSongs = []

    const matchedUsers = state.users.slice()
    // Get the list of songs of all inputed users
    const songs = []
    matchedUsers.map((user) => {
      songs.push(user.list)
    })

    // Count each unique mbid
    const counts = songs.reduce((count, arr) => {
      arr.forEach((obj) => {
        if (!count[obj.mbid]) {
          count[obj.mbid] = {
            obj,
            count: 0
          }
        }
        count[obj.mbid].count += 1
      })
      return count
    }, {})

    // Filter out all whose count isn't the length
    // and map to retrieve just the object
    const intersect = Object.values(counts)
      .filter(o => o.count === songs.length)
      .map(o => o.obj)

    state.matchingSongs = intersect
  },
  resetMatch(state) {
    state.users = []
    state.matchingSongs = []
  }
}

export const actions = {
  /**
   * Gets data of a user based on their email
   * @param {*} param0
   * @param {*} email
   */
  getMatchUser({ commit, rootState, state }, email) {
    // In case the user inputed their own email
    if (email === rootState.auth.user.email && state.users.length >= 1) {
      commit('notification/setNotification', {
        message: 'Why input your own email? 🤔',
        type: 'is-danger'
      }, { root: true })
      return
    }

    const songsRef = firebase.firestore().collection('song-lists')

    songsRef.where('owner', '==', email).get().then((snapshot) => {
      // If user has not been found
      if (snapshot.docs.length === 0) {
        commit('notification/setNotification', {
          message: 'User not found, make sure they have a Jammer account',
          type: 'is-danger'
        }, { root: true })
        return
      }
      // User has been found, get his data
      snapshot.forEach((doc) => {
        const data = doc.data()
        // Save the data in our state
        commit('addMatchUser', { list: data.list, email })
        // Update our matching songs based on the new user
        commit('updateMatchingSongs', rootState.songs.songs)
      })
    })
  }
}
