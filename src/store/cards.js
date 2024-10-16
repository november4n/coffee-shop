const cards = {
  state: {
    coffee: [],
    bestsellers: [],
    goods: [],
    searchValue: '',
    sortValue: '',
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
    setSearchValue(state, value) {
      state.searchValue = value
    },
    setSortValue(state, value) {
      console.log(value)
      state.sortValue = value
    }
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit('setCoffeeData', data)
    },
    setBestData({ commit }, data) {
      commit('setBestData', data)
    },
    setGoodsData({ commit }, data) {
      commit('setGoodsData', data)
    },
    setSearchValue({ commit }, value) {
      commit('setSearchValue', value)
    },
    setSortValue({ commit }, value) {
      commit('setSortValue', value)
    },
  },
  getters: {
    // сортировка на клиенте
    // getCoffeeCards(state) {
    //   return { coffee: state.coffee.filter(item => item.name
    //     .toLowerCase()
    //     .includes(state.searchValue.toLowerCase())
    //   ).filter(item => item.country
    //     .toLowerCase()
    //     .includes(state.sortValue.toLowerCase())) }
    // },
    // сортировка на сервере
    getCoffeeCards(state) {
      return state.coffee
    },
    getBestCards(state) {
      return state.bestsellers
    },
    getGoodsCards(state) {
      return state.goods
    },
    getProductById(state) {
      return (id) => {
        return state.goods.find((card) => card.id === +id)
      }
    },
    getSearchValue(state) {
      return state.searchValue
    },
  }
}

export default cards;
