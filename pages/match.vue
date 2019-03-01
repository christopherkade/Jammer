<template>
  <section class="section match-section">
    <search-bar @select="onUserInput" />
    <email-list />
    <presentation />
  </section>
</template>

<script>
import Presentation from '@/components/match/Presentation.vue'
import SearchBar from '@/components/match/SearchBar.vue'
import EmailList from '@/components/match/EmailList.vue'

export default {
  components: {
    Presentation,
    SearchBar,
    EmailList
  },
  middleware: 'auth',
  methods: {
    onUserInput(email) {
      this.$store.commit('match/addMatchEmail', email)
    }
  }
}
</script>

<style lang="scss">
.match-section {
  padding: $section-padding-default;
}

@media only screen and (max-width: $breakpoint-large) {
  .match-section {
    padding: $section-padding-large;
  }
}

@media only screen and (max-width: $breakpoint-medium) {
  .match-section {
    padding: $section-padding-medium;
  }
}

@media only screen and (max-width: $breakpoint-small) {
  .match-section {
    padding: $section-padding-small;
  }
}

@media only screen and (max-width: $breakpoint-extra-small) {
  .match-section {
    padding: $section-padding-extra-small;
  }
}
</style>
