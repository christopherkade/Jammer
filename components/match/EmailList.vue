<template>
  <div class="columns">
    <div v-for="user in userList" :key="user.email">
      <div v-if="user.email !== userEmail" class="column">
        <span class="email-tag">
          {{ user.email }}
          <button class="delete" aria-label="delete" @click="handleUserRemoval(user)" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userList() {
      return this.$store.getters['match/getUsers']
    },
    userEmail() {
      return this.$store.getters['auth/getUser'].email
    }
  },
  methods: {
    handleUserRemoval(user) {
      this.$store.commit('match/removeMatchEmail', user.email)
      this.$store.commit('match/updateMatchingSongs')
    }
  }
}
</script>

<style lang="scss">
.email-tag {
  background-color: $secondary;
  border-radius: 4px;
  color: $text;
  font-size: 0.75em;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding: 0.75em;
}
</style>
