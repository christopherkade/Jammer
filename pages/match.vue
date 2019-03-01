<template>
  <section class="section">
    <presentation />
  </section>
</template>

<script>
import Presentation from '@/components/match/Presentation.vue'

export default {
  components: {
    Presentation
  },
  middleware: 'auth'
}
</script>

<style lang="scss">
@media only screen and (max-width: $breakpoint-large) {
  .songs-section {
    padding: $section-padding-large;
  }
}

@media only screen and (max-width: $breakpoint-medium) {
  .songs-section {
    padding: $section-padding-medium;
  }
}

@media only screen and (max-width: $breakpoint-small) {
  .songs-section {
    padding: $section-padding-small;
  }
}

@media only screen and (max-width: $breakpoint-extra-small) {
  .songs-section {
    padding: $section-padding-extra-small;
  }
}
</style>
