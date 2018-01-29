<template lang="pug">
div
  p form page
  HeadComp
  TextareaComp
  StringComp
</template>

<script>
import HeadComp from '@/pages/modules/vuex_headcomp'
import TextareaComp from '@/pages/modules/vuex_textareacomp'
import StringComp from '@/pages/modules/vuex_stringcomp'

export default {
  name: 'form',
  data() {
    return {value: null}
  },
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
}
</script>

<style lang="sass">
</style>

