import createGoods from '@/mocks/createGoods.js';

const cards = {
  state: {
    goods: [
      createGoods('Solimo Coffee Beans 2kg', 10.73),
      createGoods('Presto Coffee Beans 1kg', 15.99),
      createGoods('AROMISTICO Coffee 1kg', 6.99),
      createGoods('Solid Coffee Beans 2kg', 8.73),
      createGoods('Movep Coffee Beans 1kg', 9.99),
      createGoods('Lava Coffee 1kg', 5.99),
    ],
    bestsellers: [
      createGoods('Solimo Coffee Beans 2kg', 10.73, 'coffee-1.jpg'),
      createGoods('Presto Coffee Beans 1kg', 15.99, 'coffee-2.jpg'),
      createGoods('AROMISTICO Coffee 1kg', 6.99, 'coffee-1.jpg'),
    ]
  },
  getters: {
    getGoodsCards(state) {
      return {goods: state.goods}
    },
    getBestCards(state) {
      return {bestsellers: state.bestsellers}
    }
  }
}

export default cards;
