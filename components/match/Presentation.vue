<template>
  <div v-if="this.$store.state.match.matchUsers.length === 0">
    <h1 class="match-title">
      Find the songs you and your friends can jam to 🎹
    </h1>
    <h2 class="match-subtitle">
      Make sure everyone has a Jammer account and fills their
      <nuxt-link class="link" to="/songs">
        song list
      </nuxt-link>
      <br>
      <br>
      Only 1 on 1 musician comparison is supported for now, multiple user comparison should be coming soon
    </h2>
  </div>
</template>

<style>
.match-title {
  text-align: center;
  color: white;
  font-size: 2em;
}

.match-subtitle {
  text-align: center;
  color: white;
  font-size: 1.25em;
}
</style>
