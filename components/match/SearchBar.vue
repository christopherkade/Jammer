<template>
  <div class="match-search">
    <div class="field has-addons">
      <div class="control search-control">
        <input v-model="emailInput" class="input" type="email" placeholder="Musician's Email">
      </div>
      <div class="control">
        <a class="button is-rounded search-button" @click="handleUserInput">
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
      emailInput: ''
    }
  },
  methods: {
    handleUserInput() {
      if (this.emailInput.length === 0) return

      this.$emit('select', this.emailInput)
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

.search-control {
  width: 100%;
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
