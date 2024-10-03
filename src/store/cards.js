import createGoods from '@/factories/createGoods.js';

const cards = {
  state: {
    goods: [
      createGoods(1, 'Solimo Coffee Beans 2kg', 10.73),
      createGoods(2, 'Presto Coffee Beans 1kg', 15.99),
      createGoods(3, 'AROMISTICO Coffee 1kg', 6.99),
      createGoods(4, 'Solid Coffee Beans 2kg', 8.73),
      createGoods(5, 'Movep Coffee Beans 1kg', 9.99),
      createGoods(6, 'Lava Coffee 1kg', 5.99),
    ],
    bestsellers: [
      createGoods(1, 'Solimo Coffee Beans 2kg', 10.73, 'coffee-1.jpg'),
      createGoods(2, 'Presto Coffee Beans 1kg', 15.99, 'coffee-2.jpg'),
      createGoods(3, 'AROMISTICO Coffee 1kg', 6.99, 'coffee-1.jpg'),
    ]
  },
  getters: {
    getGoodsCards(state) {
      return {goods: state.goods}
    },
    getBestCards(state) {
      return {bestsellers: state.bestsellers}
    },
    getProductById(state) {
      return (id) => {
        return state.goods.find((card) => card.id === +id)
      }
    }
  }
}

export default cards;
