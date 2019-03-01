<template>
  <section class="section dashboard-section">
    <div class="columns is-centered is-multiline nav-columns">
      <nuxt-link to="/songs" class="column is-2 dashboard-button">
        <img class="logo-music" src="~/static/icons/music.svg"></img>
        <br>
        Manage my songs
      </nuxt-link>
      <nuxt-link to="/match" class="column is-2 dashboard-button">
        <img class="dashboard-logo logo-guitar" src="~/static/icons/guitar.svg"></img>
        <br>
        Find matches
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style>
.dashboard-greeting {
  color: white;
  text-align: center;
}

.dashboard-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  height: 90%;
}

.nav-columns {
  margin-top: 20px;
}

.dashboard-button {
  text-align: center;
  font-size: 1.8em;
  color: white;
  background-color: #EF3054;
  margin: 12px;
  border-radius: 4px;
}

.dashboard-button:hover {
  color: white;
  opacity: .75;
}

.logo-music {
  width: 50px;
}

.logo-guitar {
  width: 60px;
}

@media only screen and (max-width: 1028px) {
  .dashboard-section {
    margin: 12px;
  }
}

</style>
