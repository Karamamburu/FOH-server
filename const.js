const PORT = 3500;
const URL = {
  getRandomOrder: "get_random_order"
};

const MIN_DISHES = 1;
const MAX_DISHES = 7;
const MIN_DISH_COUNT = 1;
const MAX_DISH_COUNT = 2;

// const MENU_ITEMS = {
//   friesSmall: 'friesSmall',
//   friesStandard: 'friesStandard',
//   friesBucket: 'friesBucket',
//   cheeseFries: 'cheeseFries',
//   potatoWedgesSmall: 'potatoWedgesSmall',
//   potatoWedgesStandard: 'potatoWedgesStandard',
//   cheesePotatoWedges: 'cheesePotatoWedges',

//   cheeseMaestroBurger: 'cheeseMaestroBurger',
//   maestroVeggieBurger: 'maestroVeggieBurger',
//   bigMaestroBurgerOR: 'bigMaestroBurgerOR',
//   bigMaestroBurgerHS: 'bigMaestroBurgerHS',
//   maestroBurgerOR: 'maestroBurgerOR',
//   maestroBurgerHS: 'maestroBurgerHS',
//   chefburgerDeLuxeOR: 'chefburgerDeLuxeOR',
//   chefburgerDeLuxeHS: 'chefburgerDeLuxeHS',
//   chefburgerOR: 'chefburgerOR',
//   chefburgerHS: 'chefburgerHS',
//   chefburgerJuniorOR: 'chefburgerJuniorOR',
//   chefburgerJuniorHS: 'chefburgerJuniorHS',
//   cheeseburger: 'cheeseburger',
//   cheeseburgerDeLuxe: 'cheeseburgerDeLuxe',
//   chickenburger: 'chickenburger',
//   longer: 'longer',

//   boxmasterOR: 'boxmasterOR',
//   boxmasterHS: 'boxmasterHS',
//   twisterOR: 'twisterOR',
//   twisterHS: 'twisterHS',
//   twisterDeLuxeOR: 'twisterDeLuxeOR',
//   twisterDeLuxeHS: 'twisterDeLuxeHS',
//   twisterJunior: 'twisterJunior',
//   iTwister: 'iTwister',

//   teriyakiRiceBowl: 'teriyakiRiceBowl',
//   teriyakiBytes: 'teriyakiBytes',
//   wings3: 'wings3',
//   wings5: 'wings5',
//   wings8: 'wings8',
//   stripsOR3: 'stripsOR3',
//   stripsOR5: 'stripsOR5',
//   stripsOR8: 'stripsOR8',
//   stripsHS3: 'stripsHS3',
//   stripsHS5: 'stripsHS5',
//   stripsHS8: 'stripsHS8',
//   bitesSmall: 'bitesSmall',
//   bitesMedium: 'bitesMedium',
//   bitesLarge: 'bitesLarge',
//   drumsticksOR1: 'drumsticksOR1',
//   drumsticksOR2: 'drumsticksOR2',
//   drumsticksOR3: 'drumsticksOR3',
//   drumsticksHS1: 'drumsticksHS1',
//   drumsticksHS2: 'drumsticksHS2',
//   drumsticksHS3: 'drumsticksHS3',
//   drumsticks: 'drumsticks',
//   nuggets6: 'nuggets6',
//   nuggets9: 'nuggets9',
//   nuggets18: 'nuggets18',
//   nuggetsBox: 'nuggetsBox',

//   cola03: 'cola03',
//   cola04: 'cola04',
//   cola05: 'cola05',
//   cola08: 'cola08',
//   lemonLime03: 'lemonLime03',
//   lemonLime04: 'lemonLime04',
//   lemonLime05: 'lemonLime05',
//   lemonLime08: 'lemonLime08',
//   orange03: 'orange03',
//   orange04: 'orange04',
//   orange05: 'orange05',
//   orange08: 'orange08',
//   blackRoyal03: 'blackRoyal03',
//   blackRoyal04: 'blackRoyal04',
//   blackRoyal05: 'blackRoyal05',
//   blackRoyal08: 'blackRoyal08',
//   blackRoyal08: 'blackRoyal08',
//   liptonGreen: 'liptonGreen',
//   liptonLemon: 'liptonLemon',
// };

const MENU_ITEMS = [
  {
    name: "Чизбургер",
    type: "bun-sandwich",
    size: "small",
    img: "cheeseburger.png",
    condiments: {
      napkin: 1,
      wetNapkin: 0,
      blueStraw: 0,
      redStraw: 0,
      sugar: 0,
      stirrer: 0,
      fork: 0,
    }
  },
  {
    name: "Крылья 3",
    type: "box-chicken",
    size: "medium",
    img: "wings_3.png",
    condiments: {
      napkin: 2,
      wetNapkin: 1,
      blueStraw: 0,
      redStraw: 0,
      sugar: 0,
      stirrer: 0,
      fork: 0,
    }
  },
  {
    name: "Баскет L",
    type: "bucket-chicken",
    size: "large",
    img: "bucket_L.png",
    condiments: {
      napkin: 4,
      wetNapkin: 2,
      blueStraw: 0,
      redStraw: 0,
      sugar: 0,
      stirrer: 0,
      fork: 0,
    }
  },  
  {
    name: "Американо 0,2",
    type: "drink",
    size: "small",
    img: "americano_02.png",
    condiments: {
      napkin: 1,
      wetNapkin: 0,
      blueStraw: 0,
      redStraw: 0,
      sugar: 2,
      stirrer: 1,
      fork: 0,
    }
  },
  {
    name: "Кола 0,4",
    type: "drink",
    size: "medium",
    img: "cola_04.png",
    condiments: {
      napkin: 1,
      wetNapkin: 0,
      blueStraw: 1,
      redStraw: 0,
      sugar: 0,
      stirrer: 0,
      fork: 0,
    }
  },
  {
    name: "Милкшейк клубника 0,4",
    type: "drink",
    size: "medium",
    img: "shake_strawberry_04.png",
    condiments: {
      napkin: 1,
      wetNapkin: 0,
      blueStraw: 0,
      redStraw: 1,
      sugar: 0,
      stirrer: 0,
      fork: 0,
    }
  },
  {
    name: "Байтсы большие",
    type: "small-bucket",
    size: "medium",
    img: "bites_large.png",
    condiments: {
      napkin: 2,
      wetNapkin: 0,
      blueStraw: 0,
      redStraw: 1,
      sugar: 0,
      stirrer: 0,
      fork: 1,
    }
  },
]

export {
  PORT,
  URL,
  MIN_DISHES,
  MIN_DISH_COUNT,
  MAX_DISH_COUNT,
  MAX_DISHES,
  MENU_ITEMS
}