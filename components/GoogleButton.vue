<template>
  <div class="customBtn" @click="googleSignIn">
    <img class="icon" src="~/static/icons/search.svg"></img>
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
.customBtn {
  display: flex;
  flex-direction: row;
  align-content: center;
  text-align: center;
  margin: 0 auto;
  background: white;
  color: #1e1e24;
  width: 200px;
  padding: 8px;
  border-radius: 4px;
  border: thin solid #888;
  white-space: nowrap;
}

.customBtn:hover {
  cursor: pointer;
}

span.label {
  font-family: serif;
  font-weight: normal;
}

span.icon {
  display: inline-block;
  vertical-align: middle;
  padding: 4px;
  width: 50px;
  height: 50px;
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
