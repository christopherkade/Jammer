const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

export const state = () => ({
  // Users to be compared to
  matchUsers: [],
  // Array of songs that match between one or multiple users
  matchingSongs: []
})

export const mutations = {
  /**
   * Add a user to be matched to the array
   * @param {*} state
   * @param {*} user
   */
  addMatchUser(state, user) {
    state.matchUsers.push(user)
  },
  /**
   * Remove specific user from matched user array
   * @param {*} state
   * @param {*} email
   */
  removeMatchEmail(state, email) {
    state.matchUsers = state.matchUsers.filter(user => user.email !== email)
    // TODO: Handle removal of specific songs based on the removed user
    state.matchingSongs = []
  },
  /**
   * Checks which songs the selected users and current one have
   * @param {*} state
   * @param {*} currentUserSongs
   */
  updateMatchingSongs(state, currentUserSongs) {
    const matchedUsers = state.matchUsers

    // Idea: Put all the songs in one data structure and purge objects with duplicate mbid
    currentUserSongs.filter((song) => {
      return matchedUsers.filter((user) => {
        return user.list.find((mSong) => {
          if (mSong.mbid === song.mbid) {
            state.matchingSongs.push(mSong)
          }
        })
      })
    })
  }
}

export const actions = {
  /**
   * Gets data of a user based on their email
   * @param {*} param0
   * @param {*} email
   */
  getMatchSongs({ commit, rootState, dispatch }, email) {
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
