<template>
  <div id="customBtn" @click="googleSignIn">
    <span class="icon" />
    <span class="buttonText">Connect with Google</span>
  </div>
</template>

<script>
export default {
  methods: {
    googleSignIn() {
      this.$store.dispatch('auth/googleSignIn')
    }
  }
}
</script>

<style>
#customBtn {
  display: inline-block;
  background: white;
  color: #1e1e24;
  width: auto;
  padding: 8px;
  border-radius: 2px;
  border: thin solid #888;
  white-space: nowrap;
}
#customBtn:hover {
  cursor: pointer;
}
span.label {
  font-family: serif;
  font-weight: normal;
}
span.icon {
  background: url("/icons/search.svg") transparent 5px no-repeat;
  display: inline-block;
  vertical-align: middle;
  padding: 4px;
  width: 50px;
  height: 42px;
}
span.buttonText {
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  padding-left: 8px;
  font-size: 14px;
  font-weight: bold;
}
</style>
