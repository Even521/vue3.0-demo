<template>
  <div id="bind-attribute">
    <p>绑定元素属性</p>>
    <span v-bind:title="message">
    Hover your mouse over me for a few seconds to see my dynamically bound
    title!
  </span>
  </div>
</template>

<script>
  export default {
    name: "VBindDemo",
    data() {
      return {
        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
    }
  }
</script>

<style scoped>

</style>