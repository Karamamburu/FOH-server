import { MENU_ITEMS, MIN_DISHES, MAX_DISHES, MIN_DISH_COUNT, MAX_DISH_COUNT } from "./const.js";
import { getRandomInt } from './util.js';

const generateRandomOrder = () => {

  const order = new Array;
  const itemsCount = getRandomInt(MIN_DISHES, MAX_DISHES);

  for (let i = 0; i < itemsCount; i++) {
    const randomMenuItem = MENU_ITEMS[getRandomInt(0, MENU_ITEMS.length - 1)];
    
    order.push(randomMenuItem);
  }
  console.log(order);
  return order;
};

export { generateRandomOrder }