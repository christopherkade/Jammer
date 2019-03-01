<template>
  <div class="layout-wrapper">
    <navbar />
    <nuxt />
    <notification />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Notification from '@/components/Notification.vue'

export default {
  components: {
    Navbar,
    Notification
  }
}
</script>

<style lang="scss">
.layout-wrapper {
  height: 100%;
}

body {
  height: 100%;
}

html {
  height: 100%;
  background-color: $primary;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
