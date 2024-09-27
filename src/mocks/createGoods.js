import { v4 as uuidv4 } from 'uuid';

function createGoods(title, price, img = 'coffee-3.jpg') {
  return {
    id: uuidv4(),
    title,
    country: 'Brazil',
    price,
    img,
  }
}

export default createGoods;
