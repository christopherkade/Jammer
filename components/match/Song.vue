<template>
  <div class="song-card">
    <h1 class="song-title">
      {{ song.name }}
      <h2 class="song-artist">
        {{ song.artist }}
      </h2>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    song: {
      default: () => {},
      type: Object
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
</style>
