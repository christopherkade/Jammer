<template>
  <article v-if="$store.state.notification.isShown" class="message notification" :class="$store.state.notification.type">
    <button class="delete" aria-label="delete" @click="$store.commit('notification/setIsShown', false)" />
    <div class="message-body">
      {{ $store.state.notification.message }}
    </div>
  </article>
</template>

<style>
.notification {
  margin: 0 4px 4px 0;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 500px;
  padding: 0;
}

@media only screen and (max-width: 1028px) {
  .notification {
    width: auto;
  }
}
</style>
