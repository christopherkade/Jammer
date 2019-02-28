<template>
  <section class="section">
    <search-bar :isAsync="false" :items="data" @input="userInput" @select="songSelected" />
  </section>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

export default {
  middleware: 'auth',
  components: {
    SearchBar
  },
  data() {
    return {
      data: ['Apple', 'Banana', 'Orange', 'Mango', 'Pear', 'Peach', 'Grape', 'Tangerine', 'Pineapple']
    }
  },
  methods: {
    userInput(input) {
      console.log('Searched:', input)
    },
    songSelected(song) {
      console.log('Selected song ', song)
    }
  }
}
</script>

<style>
</style>
