<template>
  <div>
    <div v-if="this.$store.getters['match/getUsers'].length > 1">
      <h1 class="songs-title">
        Matched songs
      </h1>
      <div v-for="song in songs" :key="song.name">
        <song :song="song" />
      </div>
    </div>
    <div v-if="this.$store.getters['match/getMatchingSongs'].length === 0 && this.$store.getters['match/getUsers'].length > 1" class="not-found">
      No matching songs found, time to improvise !
    </div>
  </div>
</template>

<script>
import Song from '@/components/match/Song.vue'

export default {
  components: {
    Song
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
  font-size: 2em;
}

.not-found {
  text-align: center;
  font-size: 2em;
  margin-top: 140px;
}
</style>
