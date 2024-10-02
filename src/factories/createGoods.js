import { v4 as uuidv4 } from 'uuid';

function createGoods(title, price, img = 'coffee-3.jpg', country = 'Brazil') {
  return {
    id: uuidv4(),
    title,
    price,
    img,
    country,
  }
}

export default createGoods;
