<template lang="pug">
div
  p.error {{error}}
  textarea(v-model="impression")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "textareaComp",
  computed: {
    impression: {
      get() {
        return this.$store.state.impression
      },
      set(value) {
        this.$store.commit("updateImpression", value)
      }
    },
    ...mapGetters('Textarea', {
      "error": "getError"
        })

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
