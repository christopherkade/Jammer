<template>
  <div class="autocomplete">
    <div class="field has-addons">
      <div class="control search-control">
        <input
          id="input"
          v-model="search.name"
          placeholder="Search for a song"
          class="input input-searchbar"
          type="text"
          @input="onChange"
          @keydown.down="onArrowDown"
          @keydown.up="onArrowUp"
          @keydown.enter="onEnter"
        ></input>
        <ul
          v-show="isOpen"
          class="autocomplete-results"
        >
          <li
            v-if="isLoading"
            class="loading"
          >
            Loading results...
          </li>

          <li
            v-for="(result, i) in results"
            v-else
            :key="i"
            class="autocomplete-result"
            :class="{ 'is-active': i === arrowCounter }"
            @click="setResult(result)"
          >
            {{ result.name }} - {{ result.artist }}
          </li>
        </ul>
      </div>
      <div class="control">
        <a class="button search-button" @click="handleSongSelection">
          +
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: false,
      default: () => []
    },
    isAsync: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      search: {},
      results: [],
      isOpen: false,
      isLoading: false,
      arrowCounter: -1
    }
  },
  watch: {
    items: function (value, oldValue) {
      if (this.isAsync) {
        this.results = value
        this.isOpen = true
        this.isLoading = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    onChange() {
      this.$emit('input', this.search.name)

      if (this.isAsync) {
        this.isLoading = true
      } else {
        this.filterResults()
        this.isOpen = true
      }

      if (this.search.name.length === 0) {
        this.isLoading = false
        this.isOpen = false
      }
    },
    filterResults() {
      this.results = this.items.filter(item => item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
    },
    setResult(result) {
      this.search = result
      this.isOpen = false
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1
      }
    },
    onEnter() {
      if (!this.search.name) return

      // When no results are shown, close the pannel
      if (this.results.length === 0 && this.isOpen) {
        this.isOpen = false
        return
      }

      // When the arrow keys were not used
      if (this.arrowCounter === -1) {
        this.search = this.results.find(song => song.name === this.search.name)
        if (!this.search) this.search = {}
      } else {
        this.search = this.results[this.arrowCounter]
      }
      this.isOpen = false
      this.arrowCounter = -1
      this.$emit('select', this.search)
      this.search = {}
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false
        this.arrowCounter = -1
      }
    },
    handleSongSelection() {
      this.$emit('select', this.search)
      this.isOpen = false
      this.search = {}
    }
  }
}
</script>

<style lang="scss">
.autocomplete {
  text-align: center;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: $secondary;
  color: $text;
}

.search-button {
  background-color: $secondary;
  color: $text;
  font-weight: bold;
}

.search-button:hover {
  opacity: .75;
}

.autocomplete-result.is-active,
  .autocomplete-result:hover {
    background-color: $secondary;
    color: $text;
}
</style>
