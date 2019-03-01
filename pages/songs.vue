<template>
  <section class="section songs-section">
    <search-bar :is-async="true" :items="data" @input="userInput" @select="songSelected" />
    <song-list :songs="$store.state.songs.songs" />
  </section>
</template>

<script>
import axios from 'axios'
import SearchBar from '@/components/songs/SearchBar.vue'
import SongList from '@/components/songs/SongList.vue'

export default {
  middleware: 'auth',
  components: {
    SearchBar,
    SongList
  },
  data() {
    return {
      data: []
    }
  },
  mounted() {
    // Fix call stack bug
    this.$store.dispatch('songs/getSongs', this.$store.state.user)
  },
  methods: {
    /**
     * Called when the user inputs in the search field
     */
    userInput(input) {
      if (input.length > 0) {
        const root = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${input}&api_key=${process.env.SONG_API_KEY}&format=json`
        axios.get(`${root}`)
          .then((res) => {
            this.data = res.data.results.trackmatches.track
          }).catch((err) => {
            this.$store.commit('notification/setNotification', {
              message: err,
              type: 'is-danger'
            })
          })
      }
    },
    /**
     * Calls the action to save the selected song with Firebase
     */
    songSelected(song) {
      this.$store.dispatch('songs/addSong', song)
    }
  }
}
</script>

<style>
.songs-section {
  padding: 120px 200px;
}

@media only screen and (max-width: 1028px) {
  .songs-section {
    padding: 40px;
  }
}
</style>
