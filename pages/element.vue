<template lang="pug">
  div
    div.block
    h4 Element with Nuxt.js!
    el-rate(v-model="value", :colors="['#2F3D4D', '#64B486', '#4B7C6E']")
</template>


<style scoped lang="sass">
.block
  padding: 0 20px
</style>

<script>
export default {
  data() {
    return {value: null}
  }
}
</script>
