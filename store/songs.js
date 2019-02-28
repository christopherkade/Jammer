const firebase = require('firebase/app')
require('firebase/firestore')

export const state = () => ({
  songs: [],
  dbRef: null
})

export const getters = {
  getUserSongs(state) {
    return state.songs
  }
}

export const mutations = {
  setSongs(state, songs) {
    state.songs = songs
  }
}

export const actions = {
  addSong({ rootState, getters, commit }, song) {
    const user = rootState.user
    const newSongList = getters.getUserSongs.slice()
    newSongList.push(song)
    firebase.firestore().collection('song-lists').doc(user.uid).set({ list: newSongList }, { merge: true }).then((snapshot) => {
      commit('setSongs', newSongList)
    })
  },
  /**
   * Get the list of songs for a given user
   * @param {*} param0
   * @param {Object} user
   */
  getSongs({ commit, state }, user) {
    firebase.firestore().collection('song-lists').doc(user.uid).get().then((snapshot) => {
      const songList = snapshot.data().list
      commit('setSongs', songList)
    })
  }
}
