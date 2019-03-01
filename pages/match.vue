<template>
  <section class="section match-section">
    <search-bar @select="onUserInput" />
    <email-list />
    <presentation />
    <song-list :songs="$store.state.match.matchingSongs" />
  </section>
</template>

<script>
import Presentation from '@/components/match/Presentation.vue'
import SearchBar from '@/components/match/SearchBar.vue'
import EmailList from '@/components/match/EmailList.vue'
import SongList from '@/components/match/SongList.vue'

export default {
  components: {
    Presentation,
    SearchBar,
    EmailList,
    SongList
  },
  middleware: 'auth',
  created() {
    if (this.$store.state.songs.songs.length === 0) {
      this.$store.dispatch('songs/getSongs', this.$store.state.user, { root: true })
    }
  },
  methods: {
    onUserInput(email) {
      // TODO: Handle multiple users
      // Get user's songs based on email
      this.$store.dispatch('match/getMatchSongs', email)
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
