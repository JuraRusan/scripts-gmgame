const food_slot = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

const base_food = {
  1: { main: "SWEET_BERRIES", info_item: "сладкие ягоды", material_name: "Черника", variability_name: ["Черника", "Blueberry"] },
  2: { main: "SWEET_BERRIES", info_item: "сладкие ягоды", material_name: "Вишня", variability_name: ["Вишня", "Cherries"] },
  3: { main: "SWEET_BERRIES", info_item: "сладкие ягоды", material_name: "Синий виноград", variability_name: ["Синий виноград", "Blue grapes"] },
  4: { main: "SWEET_BERRIES", info_item: "сладкие ягоды", material_name: "Зелёный виноград", variability_name: ["Зелёный виноград", "Green grapes"] },
  5: { main: "SWEET_BERRIES", info_item: "сладкие ягоды", material_name: "Малина", variability_name: ["Малина", "Raspberry"] },
  6: { main: "SWEET_BERRIES", info_item: "сладкие ягоды", material_name: "Клубника", variability_name: ["Клубника", "Strawberry"] },
  7: { main: "BREAD", info_item: "хлеб", material_name: "Шоколадный пончик", variability_name: ["Шоколадный пончик", "Chocolate donut"] },
  8: { main: "BREAD", info_item: "хлеб", material_name: "Глазурный пончик", variability_name: ["Глазурный пончик", "Sprinkle donut"] },
  9: { main: "BREAD", info_item: "хлеб", material_name: "Блины", variability_name: ["Блины", "Pancakes"] },
  10: { main: "COOKIE", info_item: "печенье", material_name: "Леденец", variability_name: ["Леденец", "Candy cane"] },
  11: { main: "COOKIE", info_item: "печенье", material_name: "Карамельное яблоко", variability_name: ["Карамельное яблоко", "Caramel apple"] },
  12: { main: "COOKIE", info_item: "печенье", material_name: "Сладкая вата", variability_name: ["Сладкая вата", "Cottoncandy"] },
  13: { main: "COOKIE", info_item: "печенье", material_name: "Пряник", variability_name: ["Пряник", "Gingerbread"] },
  14: { main: "COOKIE", info_item: "печенье", material_name: "Шоколадное мороженое", variability_name: ["Шоколадное мороженое", "Chocolate icecream"] },
  15: { main: "COOKIE", info_item: "печенье", material_name: "Ванильное мороженое", variability_name: ["Ванильное мороженое", "Vanilla icecream"] },
  16: { main: "COOKIE", info_item: "печенье", material_name: "Орео", variability_name: ["Орео", "oreo"] },
  17: { main: "COOKIE", info_item: "печенье", material_name: "Крендель", variability_name: ["Крендель", "Pretzel"] },
  18: { main: "COOKED_SALMON", info_item: "жаренный лосось", material_name: "Нигири", variability_name: ["Нигири", "Nigiri"] },
  19: { main: "SALMON", info_item: "сырой лосось", material_name: "Нигири", variability_name: ["Нигири", "Nigiri"] },
  20: { main: "DRIED_KELP", info_item: "сушённую ламинарию", material_name: "Онигири", variability_name: ["Онигири", "Onigiri"] },
  21: { main: "COOKED_COD", info_item: "жаренную треску", material_name: "Суши", variability_name: ["Суши", "Sushi"] },
  22: { main: "COD", info_item: "сырую треску", material_name: "Суши", variability_name: ["Суши", "Sushi"] },
  23: { main: "APPLE", info_item: "яблоко", material_name: "Абрикос", variability_name: ["Абрикос", "Apricot"] },
  24: { main: "APPLE", info_item: "яблоко", material_name: "Банан", variability_name: ["Банан", "Banana"] },
  25: { main: "APPLE", info_item: "яблоко", material_name: "Кокос", variability_name: ["Кокос", "Coconut"] },
  26: { main: "APPLE", info_item: "яблоко", material_name: "Манго", variability_name: ["Манго", "Mango"] },
  27: { main: "APPLE", info_item: "яблоко", material_name: "Персик", variability_name: ["Персик", "Peach"] },
  28: { main: "APPLE", info_item: "яблоко", material_name: "Груша", variability_name: ["Груша", "Pear"] },
  29: { main: "APPLE", info_item: "яблоко", material_name: "Ананас", variability_name: ["Ананас", "Pineapple"] },
  30: { main: "COOKED_BEEF", info_item: "стейк", material_name: "Бургер", variability_name: ["Бургер", "Burger"] },
  31: { main: "COOKED_CHICKEN", info_item: "жареную курятину", material_name: "Бургер", variability_name: ["Бургер", "Burger"] },
  32: { main: "COOKED_MUTTON", info_item: "жареную баринину", material_name: "Бургер", variability_name: ["Бургер", "Burger"] },
  33: { main: "COOKED_PORKCHOP", info_item: "жареную свинину", material_name: "Бургер", variability_name: ["Бургер", "Burger"] },
  34: { main: "COOKED_RABBIT", info_item: "жареную крольчатину", material_name: "Бургер", variability_name: ["Бургер", "Burger"] },
  35: { main: "COOKED_BEEF", info_item: "стейк", material_name: "Бурито", variability_name: ["Бурито", "Burrito"] },
  36: { main: "COOKED_CHICKEN", info_item: "жареную курятину", material_name: "Бурито", variability_name: ["Бурито", "Burrito"] }
};

module.exports.base_food = base_food;
module.exports.food_slot = food_slot;