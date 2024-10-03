function createGoods(id, title, price, img = 'coffee-3.jpg', country = 'Brazil') {
  return {
    id,
    title,
    price,
    img,
    country,
  }
}

export default createGoods;
