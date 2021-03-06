<template>
  <section class="section match-section">
    <search-bar @select="onUserInput" />
    <email-list />
    <presentation />
    <song-list :songs="$store.getters['match/getMatchingSongs']" />
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
  data() {
    return {
      users: this.$store.getters['match/getUsers'],
      currentUser: this.$store.getters['auth/getUser']
    }
  },
  created() {
    // Get the current user's data if we don't have it
    if (this.users.length === 0) {
      this.$store.dispatch('match/getMatchUser', this.$store.getters['auth/getUser'].email)
    }
  },
  methods: {
    /**
     * Called after the user inputs an email
     * Calls an action to get all the matching songs
     */
    onUserInput(email) {
      // Check if the email is the current user's
      if (email === this.currentUser.email) {
        this.$store.commit('notification/setNotification', {
          message: 'Why input your own email? 🤔',
          type: 'is-danger'
        }, { root: true })
        return
      }

      // Check for duplicate emails
      const duplicate = this.users.find(user => user.email === email)
      if (duplicate) {
        this.$store.commit('notification/setNotification', {
          message: `${email} is already in your list`,
          type: 'is-danger'
        })
        return
      }

      this.$store.dispatch('match/getMatchUser', email)
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
