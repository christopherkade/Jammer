<template>
  <section class="section landing-section">
    <div class="container landing-container">
      <img class="index-logo" src="~/static/icons/logo.svg"></img>
      <h2 class="title">
        Jammer
      </h2>
    </div>

    <google-button />
  </section>
</template>

<script>
import GoogleButton from '@/components/GoogleButton.vue'

export default {
  components: {
    GoogleButton
  }
}
</script>

<style lang="scss">
.landing-section {
  text-align: center;
}

.landing-container {
  margin-top: 20vh;
  margin-bottom: 40px;
}

.index-logo {
  width: 150px;
}

.title {
  display: block;
  font-size: 4em;
  color: $secondary;
  letter-spacing: 1px;
}
</style>
