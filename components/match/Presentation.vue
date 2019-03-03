<template>
  <div v-if="this.$store.getters['match/getUsers'].length === 1">
    <h1 class="match-title">
      Find the songs you and your friends can jam to 🎹
    </h1>
    <h2 class="match-subtitle">
      Make sure everyone has a Jammer account and fills their
      <nuxt-link class="link" to="/songs">
        song list
      </nuxt-link>
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
