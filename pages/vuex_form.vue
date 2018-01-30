<template lang="pug">
div
  p form page
  HeadComp
  TextareaComp
  StringComp
  button(v-on:click="buttonAction") {{button}}
</template>

<script>
import HeadComp from '@/pages/modules/vuex_headcomp'
import TextareaComp from '@/pages/modules/vuex_textareacomp'
import StringComp from '@/pages/modules/vuex_stringcomp'
import { mapActions, mapGetters } from "vuex"

export default {
  name: 'form',
  data() {
    return {
      button: "確認"
    }
  },
  methods: mapActions("Form", {"buttonAction": "buttonAction"}),
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
}
</script>

<style lang="sass">
</style>

