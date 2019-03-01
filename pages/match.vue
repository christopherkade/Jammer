<template>
  <section class="section">
    <h1 class="coming-soon">
      Song matching will be coming soon
    </h1>
  </section>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style lang="scss">
.coming-soon {
  text-align: center;
  color: white;
  font-size: 2em;
}

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
