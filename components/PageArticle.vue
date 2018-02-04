<template lang="pug">
div
  .ribbon
    slot(name="ribbon-img")
  div
    div
      article.container
        .title
          slot.container
</template>

<script>
export default {
  name: "PageArticle",
}
</script>

<style scoped lang="sass">
</style>
