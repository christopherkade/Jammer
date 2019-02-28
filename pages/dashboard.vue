<template>
  <section class="section dashboard-section">
    <div class="columns is-centered is-multiline">
      <nuxt-link to="/songs" class="column is-2 dashboard-button">
        Manage my songs
      </nuxt-link>
      <nuxt-link to="/match" class="column is-2 dashboard-button">
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
.dashboard-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  height: 90%;
}

.dashboard-button {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 1.8em;
  color: white;
  background-color: #EF3054;
  margin: 12px;
  height: 150px;
}

.dashboard-button:hover {
  color: white;
  opacity: .75;
}

@media only screen and (max-width: 1028px) {
  .dashboard-section {
    margin: 12px;
  }
}

</style>
