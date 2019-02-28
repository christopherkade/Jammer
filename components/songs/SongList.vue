<template>
  <div>
    <h1 class="title songs-title">
      My songs
    </h1>
    <div v-if="this.$store.state.songs.songs.length > 0">
      <div v-for="song in songs" :key="song.name">
        <song :song="song" />
      </div>
    </div>
    <spinner v-else />
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
  margin-top: 40px;
}
</style>
