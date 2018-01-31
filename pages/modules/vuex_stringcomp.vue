<template lang="pug">
p {{string}}
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "stringcomp",
  computed: mapGetters("String", {
    "string": "getString"
      })
}
</script>

<style lang="sass">
</style>
