import { MENU_ITEMS, MIN_DISHES, MAX_DISHES, MIN_DISH_COUNT, MAX_DISH_COUNT } from "./const.js";
import { getRandomInt } from './util.js';

const generateRandomOrder = () => {

  const order = new Object;
  const itemsCount = getRandomInt(MIN_DISHES, MAX_DISHES);

  const menuKeys = Object.keys(MENU_ITEMS);

  for (let i = 0; i < itemsCount; i++) {
    const randomMenuItem = menuKeys[getRandomInt(0, menuKeys.length - 1)];
    const randomItemCount = getRandomInt(MIN_DISH_COUNT, MAX_DISH_COUNT)
    
    order[randomMenuItem] = randomItemCount;
  }

  return order;
};

export { generateRandomOrder }