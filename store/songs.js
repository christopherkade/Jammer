const firebase = require('firebase/app')
require('firebase/firestore')

export const state = () => ({
  songs: [],
  isLoading: false,
  dbRef: null
})

export const getters = {
  getUserSongs(state) {
    return state.songs
  },
  getNumSongs(state) {
    return state.songs.length
  }
}

export const mutations = {
  setSongs(state, songs) {
    state.songs = songs
  },
  setLoading(state, loading) {
    state.isLoading = loading
  }
}

export const actions = {
  addSong({ rootState, getters, commit }, song) {
    const user = rootState.user
    const newSongList = getters.getUserSongs.slice()
    newSongList.push(song)
    firebase.firestore().collection('song-lists').doc(user.uid).set({ list: newSongList }, { merge: true }).then((snapshot) => {
      commit('setSongs', newSongList)
    }).catch((err) => {
      commit('notification/setNotification', {
        message: err,
        type: 'is-danger'
      })
    })
  },
  /**
   * Get the list of songs for a given user
   * @param {*} param0
   * @param {Object} user
   */
  getSongs({ commit }, user) {
    commit('setLoading', true)
    firebase.firestore().collection('song-lists').doc(user.uid).get().then((snapshot) => {
      const songList = snapshot.data().list
      commit('setSongs', songList)
      commit('setLoading', false)
    }).catch((err) => {
      commit('notification/setNotification', {
        message: err,
        type: 'is-danger'
      })
    })
  },
  deleteSong({ rootState, getters, commit }, delSong) {
    const user = rootState.user
    const currentSongList = getters.getUserSongs.slice()
    const newSongList = currentSongList.filter(song => song.mbid !== delSong.mbid).slice()
    firebase.firestore().collection('song-lists').doc(user.uid).set({ list: newSongList }, { merge: true }).then((snapshot) => {
      commit('setSongs', newSongList)
    }).catch((err) => {
      commit('notification/setNotification', {
        message: err,
        type: 'is-danger'
      })
    })
  }
}
