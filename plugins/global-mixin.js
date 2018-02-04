import Vue from 'vue'
import portfolio from "../portfolio.config.json"

Vue.mixin({
  data() {
    return { portfolio: portfolio }
  }
})
