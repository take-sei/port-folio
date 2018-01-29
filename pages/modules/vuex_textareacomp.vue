<template lang="pug">
div
  p.error {{error}}
  textarea
</template>

<script>
export default {
  name: "textareaComp",
  data() {
    return { error: "入力は必須です!" }
  }
}
</script>

<style lang="sass">
h1, h2
  font-weight: normal

ul
 list-style-type: none
 padding: 0

li
  display: inline-block
  margin: 0 10px
a
  color: #42b983
.error
  color: red
</style>
