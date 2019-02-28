<template>
  <div>
    {{ song.name }} - {{ song.artist }}
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

<style>

</style>
