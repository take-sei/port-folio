<template lang="pug">
div
  p Thanksページ
  HeadComp
  p 送信ありがとうございました.
</template>

<script>
import HeadComp from "@/pages/modules/vuex_headcomp"
import { mapActions, mapGetters } from "vuex"

export default{
  name: "thanks",
  components: {
    HeadComp
  }
}

</script>

<style lang="sass">
</style>
