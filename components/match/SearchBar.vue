<template>
  <div class="match-search">
    <div class="field has-addons">
      <div class="control search-control">
        <input
          id="input"
          v-model="emailInput"
          class="input input-searchbar"
          type="email"
          placeholder="Musician's Email"
          @keydown.enter="handleUserInput"
        >
      </div>
      <div class="control">
        <a class="button search-button" @click="handleUserInput">
          +
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailInput: '',
      emailRegex: RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    }
  },
  methods: {
    handleUserInput() {
      if (this.emailInput.length === 0) return

      // Test email format
      if (!this.emailRegex.test(this.emailInput)) {
        this.$store.commit('notification/setNotification', {
          message: 'Please input a valid email address',
          type: 'is-danger'
        })
      } else {
        this.$emit('select', this.emailInput)
      }

      this.emailInput = ''
    }
  }
}
</script>

<style lang="scss">
.match-search {
  text-align: center;
  margin-bottom: 40px;
}

.search-button {
  background-color: $secondary;
  color: $text;
  font-weight: bold;
}

.search-button:hover {
  opacity: .75;
}
</style>
