const item = {
  state: {
    item: {}
  },
  mutations: {
    setCardItem(state, payload) {
      state.item = payload
    }
  },
  actions: {
    setCardItem({commit}, payload) {
      commit('setCardItem', payload)
    }
  },
  getters: {
    getCardItem(state) {
      return state.item
    }
  }
}

export default item;
