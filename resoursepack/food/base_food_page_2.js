const food_slot = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

const base_food = {
  36: { main: "COOKED_CHICKEN", info_item: "жареную курятину", material_name: "Бурито", variability_name: ["Бурито", "Burrito"] },
  37: { main: "COOKED_MUTTON", info_item: "жареную баринину", material_name: "Бурито", variability_name: ["Бурито", "Burrito"] },
  38: { main: "COOKED_PORKCHOP", info_item: "жареную свинину", material_name: "Бурито", variability_name: ["Бурито", "Burrito"] },
  39: { main: "COOKED_RABBIT", info_item: "жареную крольчатину", material_name: "Бурито", variability_name: ["Бурито", "Burrito"] },
  40: { main: "COOKED_BEEF", info_item: "стейк", material_name: "Хотдог", variability_name: ["Хотдог", "Hotdog"] },
  41: { main: "COOKED_CHICKEN", info_item: "жареную курятину", material_name: "Хотдог", variability_name: ["Хотдог", "Hotdog"] },
  42: { main: "COOKED_MUTTON", info_item: "жареную баринину", material_name: "Хотдог", variability_name: ["Хотдог", "Hotdog"] },
  43: { main: "COOKED_PORKCHOP", info_item: "жареную свинину", material_name: "Хотдог", variability_name: ["Хотдог", "Hotdog"] },
  44: { main: "COOKED_RABBIT", info_item: "жареную крольчатину", material_name: "Хотдог", variability_name: ["Хотдог", "Hotdog"] },
  45: { main: "COOKED_BEEF", info_item: "стейк", material_name: "Пицца", variability_name: ["Пицца", "Pizza"] },
  46: { main: "COOKED_CHICKEN", info_item: "жареную курятину", material_name: "Пицца", variability_name: ["Пицца", "Pizza"] },
  47: { main: "COOKED_MUTTON", info_item: "жареную баринину", material_name: "Пицца", variability_name: ["Пицца", "Pizza"] },
  48: { main: "COOKED_PORKCHOP", info_item: "жареную свинину", material_name: "Пицца", variability_name: ["Пицца", "Pizza"] },
  49: { main: "COOKED_RABBIT", info_item: "жареную крольчатину", material_name: "Пицца", variability_name: ["Пицца", "Pizza"] },
  50: { main: "COOKED_BEEF", info_item: "стейк", material_name: "Сосиска", variability_name: ["Сосиска", "Sausage"] },
  51: { main: "COOKED_CHICKEN", info_item: "жареную курятину", material_name: "Сосиска", variability_name: ["Сосиска", "Sausage"] },
  52: { main: "COOKED_MUTTON", info_item: "жареную баринину", material_name: "Сосиска", variability_name: ["Сосиска", "Sausage"] },
  53: { main: "COOKED_PORKCHOP", info_item: "жареную свинину", material_name: "Сосиска", variability_name: ["Сосиска", "Sausage"] },
  54: { main: "COOKED_RABBIT", info_item: "жареную крольчатину", material_name: "Сосиска", variability_name: ["Сосиска", "Sausage"] },
  55: { main: "COOKED_BEEF", info_item: "стейк", material_name: "Тако", variability_name: ["Тако", "Taco"] },
  56: { main: "COOKED_CHICKEN", info_item: "жареную курятину", material_name: "Тако", variability_name: ["Тако", "Taco"] },
  57: { main: "COOKED_MUTTON", info_item: "жареную баринину", material_name: "Тако", variability_name: ["Тако", "Taco"] },
  58: { main: "COOKED_PORKCHOP", info_item: "жареную свинину", material_name: "Тако", variability_name: ["Тако", "Taco"] },
  59: { main: "COOKED_RABBIT", info_item: "жареную крольчатину", material_name: "Тако", variability_name: ["Тако", "Taco"] },
  60: { main: "COOKED_CHICKEN", info_item: "жареную курятину", material_name: "Крылышки", variability_name: ["Крылышки", "Chickenwings"] },
  61: { main: "PUMPKIN_PIE", info_item: "тыквенный пирог", material_name: "Шоколадный пирог", variability_name: ["Шоколадный пирог", "Chocolate pie"] },
  62: { main: "PUMPKIN_PIE", info_item: "тыквенный пирог", material_name: "Малиновый пирог", variability_name: ["Малиновый пирог", "Raspberry pie"] },
  63: { main: "PUMPKIN_PIE", info_item: "тыквенный пирог", material_name: "Трайфл", variability_name: ["Трайфл", "Trifle"] },
  64: { main: "MUSHROOM_STEW", info_item: "тушённые грибы", material_name: "Бульон", variability_name: ["Бульон", "Broth"] },
  65: { main: "MUSHROOM_STEW", info_item: "тушённые грибы", material_name: "Пельмени", variability_name: ["Пельмени", "Pelmenei"] }
};

module.exports.base_food = base_food;
module.exports.food_slot = food_slot;