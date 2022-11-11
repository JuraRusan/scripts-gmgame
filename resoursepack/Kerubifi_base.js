// Как добавлять елементы новые в массив 
// Пример возмем `base_food_1` там всего 36 элементов 
// Потом мы идем `base_food_2` там уже с 37 начинается и должно быть тоже 36 элементов, закончится должно на 72 
// Если нужно больше то создаем `base_food_3` и продолжаем из 73 и далее до 108
// Соответствено для тотемов аналогично, если нужно больше то `totem_base` переименовываем в `totem_base_1` и создаем ниже `totem_base_2` И так жалее пока не надоест. 


const fixed_slot_minecraft = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

const totem_base = {
 1: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "BaXy", variability_name: ["BaXy", "Бакси"] },
 2: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Blackirita", variability_name: ["Blackirita", "Блэки"] },
 3: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Blackirite", variability_name: ["Blackirite", "Срань Господня"] },
 4: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "BlackPirat", variability_name: ["BlackPirat", "Пиратик"] },
 5: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Cytrynid", variability_name: ["Cytrynid", "Lemonid", "Desert Cytrynid"] },
 6: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Dalandis", variability_name: ["Dalandis", "Даландис"] },
 7: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Dunno59", variability_name: ["Dunno59", "Дуно"] },
 8: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Dunno59c", variability_name: ["Dunno59c"] },
 9: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Dunno69", variability_name: ["Dunno69"] },
 10: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "gerhugwsif", variability_name: ["gerhugwsif", "ger", "Гер"] },
 11: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Hazquard", variability_name: ["Hazquard", "Хаз"] },
 12: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Kerubifi", variability_name: ["Kerubifi", "Кирубифи"] },
 13: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "kurlykepty", variability_name: ["kurlykepty", "Kurlyk", "Курлык"] },
 14: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "KIPO4", variability_name: ["KIPO4", "Кипа"] },
 15: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Li_Ora", variability_name: ["Li_Ora", "Лиора"] },
 16: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Matychka", variability_name: ["Matychka", "Матюша"] },
 17: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Niksa_Viento", variability_name: ["Niksa_Viento", "Niksa", "Никса", "Никс"] },
 18: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Jean_Viento", variability_name: ["Jean_Viento", "Jean", "Жаник"] },
 19: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "prestig9110", variability_name: ["prestig9110", "Престиж"] },
 20: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "SoftPanda3", variability_name: ["SoftPanda3", "SoftPanda", "Панда", "Пандочка"] },
 21: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "SoftPanda3_ng", variability_name: ["SoftPanda3ng", "SoftPandang", "Pandang","Панданг", "Пандочканг"] },
 22: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "SoftPanda3_c", variability_name: ["SoftPanda3c", "SoftPandac", "Pandac", "Пандас", "Пандочкас" ] },
 23: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Solyanka", variability_name: ["Solyanka", "Soniaka", "Soni4ka"] },
 24: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Steinyasha", variability_name: ["Steinyasha", "Stein", "Штейн"] },
 25: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "VessAy", variability_name: ["VessAy"] },
 26: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "VessAyR", variability_name: ["VessAyR", "Грэг"] },
 27: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "WiCry", variability_name: ["WiCry", "Вай"] },
 28: { main: "TOTEM_OF_UNDYING", info_item: "тотем", material_name: "Ytka_sorry_t9", variability_name: ["Ytka_sorry_t9", "Ytka", "Утка", "Уточка"] }
};
const hats_base = {
 1: { main: "CARVED_PUMPKIN", info_item: "вырезаную тыкву", material_name: "Шляпа лучника", variability_name: ["Шляпа лучника"] },
 2: { main: "CARVED_PUMPKIN", info_item: "вырезаную тыкву", material_name: "Шляпа бронника", variability_name: ["Шляпа бронника"] },
 3: { main: "CARVED_PUMPKIN", info_item: "вырезаную тыкву", material_name: "Стрела", variability_name: ["Стрела"] },
 4: { main: "CARVED_PUMPKIN", info_item: "вырезаную тыкву", material_name: "Корона", variability_name: ["Корона"] },
 5: { main: "CARVED_PUMPKIN", info_item: "вырезаную тыкву", material_name: "Эльф", variability_name: ["Эльф"] },
 6: { main: "CARVED_PUMPKIN", info_item: "вырезаную тыкву", material_name: "Шляпа фермера", variability_name: ["Шляпа фермера"] },
 7: { main: "CARVED_PUMPKIN", info_item: "вырезаную тыкву", material_name: "Шляпа рыбака", variability_name: ["Шляпа рыбака"] },
 8: { main: "CARVED_PUMPKIN", info_item: "вырезаную тыкву", material_name: "Шляпа библиотекаря", variability_name: ["Шляпа библиотекаря"] },
 9: { main: "CARVED_PUMPKIN", info_item: "вырезаную тыкву", material_name: "Карандаш", variability_name: ["Карандаш"] },
 10: { main: "CARVED_PUMPKIN", info_item: "вырезаную тыкву", material_name: "Санта", variability_name: ["Санта"] },
 11: { main: "CARVED_PUMPKIN", info_item: "вырезаную тыкву", material_name: "Трезубец", variability_name: ["Трезубец"] },
 12: { main: "CARVED_PUMPKIN", info_item: "вырезаную тыкву", material_name: "Шляпа ведьмы", variability_name: ["Шляпа ведьмы"] },
 13: { main: "CARVED_PUMPKIN", info_item: "вырезаную тыкву", material_name: "Венок", variability_name: ["Венок"] }
};
const elytra_base = {
 1: { main: "ELYTRA", info_item: "элитру", material_name: "crimson", variability_name: ["crimson"] },
 2: { main: "ELYTRA", info_item: "элитру", material_name: "davinci", variability_name: ["davinci"] },
 3: { main: "ELYTRA", info_item: "элитру", material_name: "demon", variability_name: ["demon"] },
 4: { main: "ELYTRA", info_item: "элитру", material_name: "dragonfly", variability_name: ["dragonfly"] },
 5: { main: "ELYTRA", info_item: "элитру", material_name: "dreamtime", variability_name: ["dreamtime"] },
 6: { main: "ELYTRA", info_item: "элитру", material_name: "elysium", variability_name: ["elysium"] },
 7: { main: "ELYTRA", info_item: "элитру", material_name: "evessay", variability_name: ["evessay"] },
 8: { main: "ELYTRA", info_item: "элитру", material_name: "fairy", variability_name: ["fairy"] },
 9: { main: "ELYTRA", info_item: "элитру", material_name: "golden_beetle", variability_name: ["golden_beetle"] },
 10: { main: "ELYTRA", info_item: "элитру", material_name: "green_beetle", variability_name: ["green_beetle"] },
 11: { main: "ELYTRA", info_item: "элитру", material_name: "green_dragon", variability_name: ["green_dragon"] },
 12: { main: "ELYTRA", info_item: "элитру", material_name: "neonblue", variability_name: ["neonblue"] },
 13: { main: "ELYTRA", info_item: "элитру", material_name: "nova", variability_name: ["nova"] },
 14: { main: "ELYTRA", info_item: "элитру", material_name: "phoenix", variability_name: ["phoenix"] },
 15: { main: "ELYTRA", info_item: "элитру", material_name: "priest", variability_name: ["priest"] },
 16: { main: "ELYTRA", info_item: "элитру", material_name: "prime", variability_name: ["prime"] },
 17: { main: "ELYTRA", info_item: "элитру", material_name: "red_dragon", variability_name: ["red_dragon"] },
 18: { main: "ELYTRA", info_item: "элитру", material_name: "solar", variability_name: ["solar"] },
 19: { main: "ELYTRA", info_item: "элитру", material_name: "sunset", variability_name: ["sunset"] },
 20: { main: "ELYTRA", info_item: "элитру", material_name: "underworld", variability_name: ["underworld"] },
 21: { main: "ELYTRA", info_item: "элитру", material_name: "warped", variability_name: ["warped"] }
};
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
const base_food_1 = {
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
 16: { main: "COOKIE", info_item: "печенье", material_name: "Орео", variability_name: ["Орео", "Oreo"] },
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
const base_food_2 = {
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

module.exports.fixed_slot_minecraft = fixed_slot_minecraft;
module.exports.totem_base = totem_base;
module.exports.hats_base = hats_base;
module.exports.elytra_base = elytra_base;
module.exports.drinks_base = drinks_base;
module.exports.base_food_1 = base_food_1;
module.exports.base_food_2 = base_food_2;
