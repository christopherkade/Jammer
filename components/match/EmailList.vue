<template>
  <div class="columns">
    <div v-for="user in userList" :key="user.email" class="column">
      <span class="email-tag">
        {{ user.email }}
        <button class="delete" aria-label="delete" @click="$store.commit('match/removeMatchEmail', user.email)" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userList() {
      return this.$store.state.match.matchUsers
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
