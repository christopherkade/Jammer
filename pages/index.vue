<template>
  <section class="section landing-section">
    <div class="container landing-container">
      <img class="index-logo" src="~/static/icons/logo.svg"></img>
      <h2 class="jammer-title">
        Jammer
      </h2>
    </div>

    <google-button />
    <h1 class="contribute">
      Like Jammer? Contribute to it on <a class="link" href="https://github.com/christopherkade/Jammer">Github</a>
      <br>
      Made with ♥ by <a class="link" href="https://twitter.com/christo_kade">Christopher Kade</a>
    </h1>
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

.jammer-title {
  display: block;
  font-size: 4em;
  color: $secondary;
  letter-spacing: 1px;
}

.contribute {
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  color: white;
}

@media only screen and (max-width: $breakpoint-medium) {
  .contribute {
    font-size: .9em;
  }
}

</style>
