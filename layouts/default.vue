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

<style>
.layout-wrapper {
  height: 100%;
}

body {
  height: 100%;
}

html {
  height: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #1e1e24;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
