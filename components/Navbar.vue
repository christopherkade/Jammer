<template>
  <nav v-if="displayNav" class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item nav-logo-mobile">
        <img src="~/static/icons/logo-dark.svg">
      </div>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-target"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div class="navbar-item nav-logo">
      <img src="~/static/icons/logo-dark.svg">
    </div>

    <div id="navbar-target" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <div class="navbar-item">
          <nuxt-link to="/songs" class="button nav-button">
            <img class="nav-icon" src="~/static/icons/music.svg"></img>
            Songs
          </nuxt-link>
        </div>

        <div class="navbar-item">
          <nuxt-link to="/match" class="button nav-button">
            <img class="nav-icon" src="~/static/icons/guitar.svg"></img>
            Match
          </nuxt-link>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <span>
            Welcome, {{ displayName }}
          </span>
        </div>
        <div class="navbar-item">
          <a class="button nav-button" @click="$store.dispatch('auth/signOut')">
            <img class="nav-icon sign-out" src="~/static/icons/sign-out.svg"></img>
            Sign out
          </a>
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
    },
    displayName() {
      const user = this.$store.getters['auth/getUser']

      if (!user) return

      if (!user.displayName) {
        return this.$store.getters['auth/getUser'].email
      }
      return user.displayName
    }
  }
}
</script>

<style lang="scss">
.nav-button {
  background-color: $secondary;
  color: $text;
  padding: 20px;
}

.navbar-item.nav-logo {
   position: absolute;
   left: 50%;
   margin-left: -30px;
   height: 100%;
   display: flex;
   align-items: center;
}

.navbar-item.nav-logo:hover {
  background: transparent;
}

.nav-logo-mobile {
  display: none;
}

.nav-icon {
  margin-right: 8px;
}

.nuxt-link-active {
  opacity: .8;
}

.sign-out {
  width: 20px;
}

@media only screen and (max-width: $breakpoint-medium) {
  .nav-logo-mobile {
    display: block;
  }

  .navbar-item.nav-logo {
    display: none;
  }

  .navbar-start, .navbar-end {
    text-align: center;
  }
}
</style>
