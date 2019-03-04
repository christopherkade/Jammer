<template>
  <transition name="fade">
    <article v-if="isShown" class="message notification" :class="classType">
      <div class="message-body">
        {{ message }}
      </div>
    </article>
  </transition>
</template>

<script>
import { setTimeout } from 'timers'

export default {
  computed: {
    isShown() {
      return this.$store.state.notification.isShown
    },
    classType() {
      return this.$store.state.notification.type
    },
    message() {
      return this.$store.state.notification.message
    },
    duration() {
      return this.$store.state.notification.duration
    }
  },
  watch: {
    isShown(bool) {
      if (bool) {
        setTimeout(() => this.$store.commit('notification/setIsShown', false), this.duration)
      }
    }
  }
}
</script>

<style>
.notification {
  margin: 0 4px 4px 0;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 0;
}

.fade-leave-active {
  transition: opacity 0.5s;
  opacity: 0;
}

@media only screen and (max-width: 1028px) {
  .notification {
    width: auto;
  }
}
</style>
