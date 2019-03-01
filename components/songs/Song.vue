<template>
  <div class="song-card" @mouseover="displayDelete = true" @mouseleave="displayDelete = false">
    <h1 class="song-title">
      {{ song.name }}
      <h2 class="song-artist">
        {{ song.artist }}
      </h2>
    </h1>
    <div v-if="displayDelete" class="delete-song" @click="deleteSong">
      Delete
    </div>
  </div>
</template>

<script>
export default {
  props: {
    song: {
      default: () => {},
      type: Object
    }
  },
  data() {
    return {
      displayDelete: false
    }
  },
  methods: {
    deleteSong() {
      this.$store.dispatch('songs/deleteSong', this.song)
    }
  }
}
</script>

<style lang="scss">
.song-card {
  background-color: white;
  color: $secondary;
  margin: 12px;
  border-radius: 4px;
  display: flex;
  width: auto;
  flex-direction: row;
}

.song-title {
  padding: 20px;
  width: 100%;
  font-size: 1.5em;
}

.song-artist {
  color: $primary;
}

.delete-song {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: $secondary;
  color: $text;
  font-size: 1em;
  padding: 40px 20px;
}

.delete-song:hover {
  cursor: pointer;
  opacity: .75;
}
</style>
