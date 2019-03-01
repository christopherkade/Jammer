<template>
  <nav v-if="displayNav" class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/dashboard" class="navbar-item">
        <img src="~/static/icons/logo-dark.svg">
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button button-signout" @click="$store.dispatch('auth/signOut')">
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    displayNav() {
      return (this.$route.fullPath !== '/')
    }
  }
}
</script>

<style>
.button-signout {
  background-color: #EF3054;
  color: white;
}
</style>
