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
