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
.delete-song {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: $secondary;
  color: $text;
  font-size: 1em;
  padding: 40px 20px;
}

.delete-song:hover {
  cursor: pointer;
  opacity: .75;
}

@media only screen and (max-width: $breakpoint-medium) {
  .delete-song {
    font-size: .9em;
    padding: 45px 8px;
  }
}
</style>
