<template lang="pug">
div
  p form page
  HeadComp
  component(:is="isComponent")
  button(v-on:click="buttonAction") {{button}}
</template>

<script>
import HeadComp from '@/pages/modules/vuex_headcomp'
import TextareaComp from '@/pages/modules/vuex_textareacomp'
import StringComp from '@/pages/modules/vuex_stringcomp'
import { mapActions, mapGetters } from "vuex"

export default {
  name: 'form',
  methods: mapActions("Form", {"buttonAction": "buttonAction"}),
  computed: mapGetters('Form', {
    'button': 'getButton',
    "isComponent": "getComponent"
      }),
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
}
</script>

<style lang="sass">
</style>

