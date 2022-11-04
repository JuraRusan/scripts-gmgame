const drinks_slot = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

const drinks_base = {
  1: { main: "POTION", info_item: "любое зелье", material_name: "Пиво", variability_name: ["Пиво", "Beer"] },
  2: { main: "POTION", info_item: "любое зелье", material_name: "Пузырьковый чай", variability_name: ["Пузырьковый чай", "Boba"] },
  3: { main: "POTION", info_item: "любое зелье", material_name: "Шампанское", variability_name: ["Шампанское", "Champagne"] },
  4: { main: "POTION", info_item: "любое зелье", material_name: "Кофе", variability_name: ["Кофе", "Coffee"] },
  5: { main: "POTION", info_item: "любое зелье", material_name: "Горячий шоколад", variability_name: ["Горячий шоколад", "Hot chocolate"] },
  6: { main: "POTION", info_item: "любое зелье", material_name: "Сок", variability_name: ["Сок", "Juice"] },
  7: { main: "POTION", info_item: "любое зелье", material_name: "Маргарита", variability_name: ["Маргарита", "Margarita"] },
  8: { main: "POTION", info_item: "любое зелье", material_name: "Мартини", variability_name: ["Мартини", "Martini"] },
  9: { main: "POTION", info_item: "любое зелье", material_name: "Пинаколада", variability_name: ["Пинаколада", "Pinacolada"] },
  10: { main: "POTION", info_item: "любое зелье", material_name: "Шот", variability_name: ["Шот", "Shot"] },
  11: { main: "POTION", info_item: "любое зелье", material_name: "Вино", variability_name: ["Вино", "Wine"] }
};

module.exports.drinks_base = drinks_base;
module.exports.drinks_slot = drinks_slot;