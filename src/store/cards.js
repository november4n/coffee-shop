const cards = {
  state: {
    coffee: [],
    bestsellers: [],
    goods: [],
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data
    },
    setBestData(state, data) {
      state.bestsellers = data
    },
    setGoodsData(state, data) {
      state.goods = data
    },
  },
  actions: {
    setCoffeeData({commit}, data) {
      commit('setCoffeeData', data)
    },
    setBestData({commit}, data) {
      commit('setBestData', data)
    },
    setGoodsData({commit}, data) {
      commit('setGoodsData', data)
    }
  },
  getters: {
    getCoffeeCards(state) {
      return {coffee: state.coffee}
    },
    getBestCards(state) {
      return {bestsellers: state.bestsellers}
    },
    getGoodsCards(state) {
      return {goods: state.goods}
    },
    getProductById(state) {
      return (id) => {
        return state.goods.find((card) => card.id === +id)
      }
    }
  }
}

export default cards;
