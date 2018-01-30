import Vuex from "vuex"

const Form = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    buttonAction({commit, state, rootState}) {
      console.log("buttonAction")
    }
  }
}

const store = () => new Vuex.Store({
  modules:{
    Form
  }
})

export default store;
