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
  },
  resetSongs(state) {
    state.songs = []
  }
}

export const actions = {
  addSong({ rootState, getters, commit }, song) {
    // If the song doesn't have an artist, the user didn't select from the DD list
    if (song.artist) {
      const user = rootState.auth.user
      const newSongList = getters.getUserSongs.slice()

      // Check if the song selected is already in our list
      let duplicate = false
      newSongList.map((listSong) => {
        // Sometimes lastfm songs don't have an id, if not, use the name and artist to check for duplicates
        if (listSong.mbid) {
          if (listSong.mbid === song.mbid) {
            duplicate = true
          }
        } else if (listSong.name === song.name && listSong.artist === song.artist) {
          duplicate = true
        }
      })

      // If it is, display a notification and abort the action
      if (duplicate) {
        commit('notification/setNotification', {
          message: "The song you've selected is already in your list",
          type: 'is-info'
        }, { root: true })
        return
      }

      newSongList.push(song)

      firebase.firestore().collection('song-lists').doc(user.uid).set({ list: newSongList, owner: user.email }, { merge: true }).then((snapshot) => {
        commit('setSongs', newSongList)
        commit('notification/setNotification', {
          message: `${song.name} (${song.artist}) added`,
          type: 'is-success',
          duration: 1000
        }, { root: true })
      }).catch((err) => {
        commit('notification/setNotification', {
          message: err,
          type: 'is-danger'
        }, { root: true })
      })
    } else {
      commit('notification/setNotification', {
        message: 'Please select a song in the drop-down list',
        type: 'is-info'
      }, { root: true })
    }
  },
  /**
   * Get the list of songs for a given user
   * @param {*} param0
   * @param {Object} user
   */
  getSongs({ commit }, user) {
    commit('setLoading', true)
    firebase.firestore().collection('song-lists').doc(user.uid).get().then((snapshot) => {
      // On first connection, creates document and returns since no songs are available on it
      if (!snapshot.data()) {
        return
      }
      // Get song list data
      const songList = snapshot.data().list
      // Save it in our state
      commit('setSongs', songList)
    }).catch((err) => {
      commit('notification/setNotification', {
        message: err,
        type: 'is-danger'
      }, { root: true })
    }).finally(() => commit('setLoading', false))
  },
  deleteSong({ rootState, getters, commit }, delSong) {
    const user = rootState.auth.user
    const currentSongList = getters.getUserSongs.slice()
    const newSongList = currentSongList.filter(song => song.mbid !== delSong.mbid).slice()
    firebase.firestore().collection('song-lists').doc(user.uid).set({ list: newSongList }, { merge: true }).then((snapshot) => {
      commit('setSongs', newSongList)
      commit('notification/setNotification', {
        message: `${delSong.name} (${delSong.artist}) deleted`,
        type: 'is-danger',
        duration: 1000
      }, { root: true })
    }).catch((err) => {
      commit('notification/setNotification', {
        message: err,
        type: 'is-danger'
      }, { root: true })
    })
  }
}
