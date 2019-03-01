<template>
  <div>
    <div v-if="this.$store.state.songs.songs.length > 0">
      <h1 class="title songs-title">
        My songs
      </h1>
      <div v-for="song in songs" :key="song.name">
        <song :song="song" />
      </div>
    </div>
    <div v-else class="not-found">
      No songs found, you can add them using the search bar above.
    </div>
    <spinner v-if="this.$store.state.songs.isLoading" />
  </div>
</template>

<script>
import Song from '@/components/songs/Song.vue'
import Spinner from '@/components/Spinner.vue'

export default {
  components: {
    Song,
    Spinner
  },
  props: {
    songs: {
      default: () => [],
      type: Array
    }
  }
}
</script>

<style>
.songs-title {
  color: white;
  margin-top: 140px;
}

.not-found {
  text-align: center;
  font-size: 2em;
  margin-top: 40px;
}
</style>
