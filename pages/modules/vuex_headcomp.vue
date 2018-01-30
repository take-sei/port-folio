<template lang="pug">
  h1 {{title}}
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "headComp",
  computed: mapGetters({
    "title": "getTitle"
      })
}
</script>

<style lang="sass">
</style>
