<template>
  <div class="layout-wrapper">
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
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
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  height: 100%;
  word-spacing: 1px;
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
