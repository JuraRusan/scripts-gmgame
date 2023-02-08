const fixed_slot_one = [10, 16, 20, 24, 22];
const fixed_slot_two = [11, 12, 14, 15, 19, 20, 24, 25];
const fixed_slot_three = [11, 15, 21, 23];
const fixed_slot_four = [13];

const token_code = `paper{display:{Name:'[{"text":"Уникальный токен предмет","italic":true,"color":"#3399ff"}]',Lore:['[{"text":"","italic":false}]','[{"text":" ","italic":true,"color":"green"},{"text":"*","color":"aqua"},{"text":" "},{"text":"Токен предмет защищен от подделки","color":"gray"},{"text":"","color":"dark_purple","italic":false}]','[{"text":" ","italic":true,"color":"green"},{"text":"*","color":"aqua"},{"text":" "},{"text":"и предназначенный только для","italic":true,"color":"gray"}]','[{"text":" ","italic":true,"color":"gray"},{"text":"*","color":"aqua"},{"text":" использования в казино для того что бы..."},{"text":"","italic":false,"color":"dark_purple"}]','[{"text":"","italic":false,"color":"dark_purple"}]','[{"text":" ","italic":true,"color":"green"},{"text":"*","color":"aqua"},{"text":" "},{"text":"Но это совсем другая история...","color":"gray"}]']},Enchantments:[{id:unbreaking,lvl:10}],HideFlags:1}`;

const netherite_pickaxe_random_base = {
 1: { material: "NETHERITE_PICKAXE", name: "Незеритовая кирка", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Эффективность 1 - 6", "Починка", "Шёлковое касание", "Прочность 1 - 5"], console_name: "netherite_pickaxe{Enchantments:[{id:efficiency,lvl:%rand/1-6%},{id:mending,lvl:1},{id:silk_touch,lvl:1},{id:unbreaking,lvl:%rand/1-5%}]}" },
 2: { material: "NETHERITE_PICKAXE", name: "Незеритовая кирка", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Эффективность 1 - 6", "Починка", "Удача 1 - 4", "Прочность 1 - 5"], console_name: "netherite_pickaxe{Enchantments:[{id:efficiency,lvl:%rand/1-6%},{id:mending,lvl:1},{id:fortune,lvl:%rand/1-4%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 3: { material: "NETHERITE_PICKAXE", name: "Незеритовая кирка", rate_price: 250, token: "%rand/0-5%", token_ru: "0 - 5", enchantments: ["Эффективность 1 - 8", "Починка", "Шёлковое касание", "Прочность 1 - 5"], console_name: "netherite_pickaxe{Enchantments:[{id:efficiency,lvl:%rand/1-8%},{id:mending,lvl:1},{id:silk_touch,lvl:1},{id:unbreaking,lvl:%rand/1-5%}]}" },
 4: { material: "NETHERITE_PICKAXE", name: "Незеритовая кирка", rate_price: 250, token: "%rand/0-5%", token_ru: "0 - 5", enchantments: ["Эффективность 1 - 8", "Починка", "Удача 1 - 4", "Прочность 1 - 5"], console_name: "netherite_pickaxe{Enchantments:[{id:efficiency,lvl:%rand/1-8%},{id:mending,lvl:1},{id:fortune,lvl:%rand/1-4%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 5: { material: "NETHERITE_PICKAXE", name: "Незеритовая кирка", rate_price: 225, token: "%rand/0-4%", token_ru: "0 - 4", enchantments: ["Эффективность 1 - 8", "Починка", "Прочность 1 - 5"], console_name: "netherite_pickaxe{Enchantments:[{id:efficiency,lvl:%rand/1-8%},{id:mending,lvl:1},{id:unbreaking,lvl:%rand/1-5%}]}" }
};

const netherite_axe_random_base = {
 1: { material: "NETHERITE_AXE", name: "Незеритовый топор", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Эффективность 1 - 6", "Починка", "Шёлковое касание", "Прочность 1 - 5"], console_name: "netherite_axe{Enchantments:[{id:efficiency,lvl:%rand/1-6%},{id:mending,lvl:1},{id:silk_touch,lvl:1},{id:unbreaking,lvl:%rand/1-5%}]}" },
 2: { material: "NETHERITE_AXE", name: "Незеритовый топор", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Эффективность 1 - 6", "Починка", "Удача 1 - 4", "Прочность 1 - 5"], console_name: "netherite_axe{Enchantments:[{id:efficiency,lvl:%rand/1-6%},{id:mending,lvl:1},{id:fortune,lvl:%rand/1-4%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 3: { material: "NETHERITE_AXE", name: "Незеритовый топор", rate_price: 250, token: "%rand/0-5%", token_ru: "0 - 5", enchantments: ["Эффективность 1 - 8", "Починка", "Шёлковое касание", "Прочность 1 - 5"], console_name: "netherite_axe{Enchantments:[{id:efficiency,lvl:%rand/1-8%},{id:mending,lvl:1},{id:silk_touch,lvl:1},{id:unbreaking,lvl:%rand/1-5%}]}" },
 4: { material: "NETHERITE_AXE", name: "Незеритовый топор", rate_price: 250, token: "%rand/0-5%", token_ru: "0 - 5", enchantments: ["Эффективность 1 - 8", "Починка", "Удача 1 - 4", "Прочность 1 - 5"], console_name: "netherite_axe{Enchantments:[{id:efficiency,lvl:%rand/1-8%},{id:mending,lvl:1},{id:fortune,lvl:%rand/1-4%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 5: { material: "NETHERITE_AXE", name: "Незеритовый топор", rate_price: 225, token: "%rand/0-4%", token_ru: "0 - 4", enchantments: ["Эффективность 1 - 8", "Починка", "Прочность 1 - 5"], console_name: "netherite_axe{Enchantments:[{id:efficiency,lvl:%rand/1-8%},{id:mending,lvl:1},{id:unbreaking,lvl:%rand/1-5%}]}" }
};

const netherite_shovel_random_base = {
 1: { material: "NETHERITE_SHOVEL", name: "Незеритовая лопата", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Эффективность 1 - 6", "Починка", "Шёлковое касание", "Прочность 1 - 5"], console_name: "netherite_shovel{Enchantments:[{id:efficiency,lvl:%rand/1-6%},{id:mending,lvl:1},{id:silk_touch,lvl:1},{id:unbreaking,lvl:%rand/1-5%}]}" },
 2: { material: "NETHERITE_SHOVEL", name: "Незеритовая лопата", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Эффективность 1 - 6", "Починка", "Удача 1 - 4", "Прочность 1 - 5"], console_name: "netherite_shovel{Enchantments:[{id:efficiency,lvl:%rand/1-6%},{id:mending,lvl:1},{id:fortune,lvl:%rand/1-4%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 3: { material: "NETHERITE_SHOVEL", name: "Незеритовая лопата", rate_price: 250, token: "%rand/0-5%", token_ru: "0 - 5", enchantments: ["Эффективность 1 - 8", "Починка", "Шёлковое касание", "Прочность 1 - 5"], console_name: "netherite_shovel{Enchantments:[{id:efficiency,lvl:%rand/1-8%},{id:mending,lvl:1},{id:silk_touch,lvl:1},{id:unbreaking,lvl:%rand/1-5%}]}" },
 4: { material: "NETHERITE_SHOVEL", name: "Незеритовая лопата", rate_price: 250, token: "%rand/0-5%", token_ru: "0 - 5", enchantments: ["Эффективность 1 - 8", "Починка", "Удача 1 - 4", "Прочность 1 - 5"], console_name: "netherite_shovel{Enchantments:[{id:efficiency,lvl:%rand/1-8%},{id:mending,lvl:1},{id:fortune,lvl:%rand/1-4%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 5: { material: "NETHERITE_SHOVEL", name: "Незеритовая лопата", rate_price: 225, token: "%rand/0-4%", token_ru: "0 - 4", enchantments: ["Эффективность 1 - 8", "Починка", "Прочность 1 - 5"], console_name: "netherite_shovel{Enchantments:[{id:efficiency,lvl:%rand/1-8%},{id:mending,lvl:1},{id:unbreaking,lvl:%rand/1-5%}]}" }
};

const netherite_hoe_random_base = {
 1: { material: "NETHERITE_HOE", name: "Незеритовая мотыга", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Эффективность 1 - 6", "Починка", "Шёлковое касание", "Прочность 1 - 5"], console_name: "netherite_hoe{Enchantments:[{id:efficiency,lvl:%rand/1-6%},{id:mending,lvl:1},{id:silk_touch,lvl:1},{id:unbreaking,lvl:%rand/1-5%}]}" },
 2: { material: "NETHERITE_HOE", name: "Незеритовая мотыга", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Эффективность 1 - 6", "Починка", "Удача 1 - 4", "Прочность 1 - 5"], console_name: "netherite_hoe{Enchantments:[{id:efficiency,lvl:%rand/1-6%},{id:mending,lvl:1},{id:fortune,lvl:%rand/1-4%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 3: { material: "NETHERITE_HOE", name: "Незеритовая мотыга", rate_price: 250, token: "%rand/0-5%", token_ru: "0 - 5", enchantments: ["Эффективность 1 - 8", "Починка", "Шёлковое касание", "Прочность 1 - 5"], console_name: "netherite_hoe{Enchantments:[{id:efficiency,lvl:%rand/1-8%},{id:mending,lvl:1},{id:silk_touch,lvl:1},{id:unbreaking,lvl:%rand/1-5%}]}" },
 4: { material: "NETHERITE_HOE", name: "Незеритовая мотыга", rate_price: 250, token: "%rand/0-5%", token_ru: "0 - 5", enchantments: ["Эффективность 1 - 8", "Починка", "Удача 1 - 4", "Прочность 1 - 5"], console_name: "netherite_hoe{Enchantments:[{id:efficiency,lvl:%rand/1-8%},{id:mending,lvl:1},{id:fortune,lvl:%rand/1-4%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 5: { material: "NETHERITE_HOE", name: "Незеритовая мотыга", rate_price: 225, token: "%rand/0-4%", token_ru: "0 - 4", enchantments: ["Эффективность 1 - 8", "Починка", "Прочность 1 - 5"], console_name: "netherite_hoe{Enchantments:[{id:efficiency,lvl:%rand/1-8%},{id:mending,lvl:1},{id:unbreaking,lvl:%rand/1-5%}]}" }
};

const bow_crossbow_trident_random_base = {
 1: { material: "BOW", name: "Лук", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Воспламенение", "Починка", "Сила 1 - 6", "Откидывание 1 - 3", "Прочность 1 - 5"], console_name: "bow{Enchantments:[{id:flame,lvl:1},{id:mending,lvl:1},{id:power,lvl:%rand/1-6%},{id:punch,lvl:%rand/1-3%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 2: { material: "BOW", name: "Лук", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Воспламенение", "Бесконечность", "Сила 1 - 6", "Откидывание 1 - 3", "Прочность 1 - 5"], console_name: "bow{Enchantments:[{id:flame,lvl:1},{id:infinity,lvl:1},{id:power,lvl:%rand/1-6%},{id:punch,lvl:%rand/1-3%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 3: { material: "BOW", name: "Лук", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Починка", "Сила 1 - 6", "Откидывание 1 - 3", "Прочность 1 - 5"], console_name: "bow{Enchantments:[{id:mending,lvl:1},{id:power,lvl:%rand/1-6%},{id:punch,lvl:%rand/1-3%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 4: { material: "BOW", name: "Лук", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Бесконечность", "Сила 1 - 6", "Откидывание 1 - 3", "Прочность 1 - 5"], console_name: "bow{Enchantments:[{id:infinity,lvl:1},{id:power,lvl:%rand/1-6%},{id:punch,lvl:%rand/1-3%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 5: { material: "CROSSBOW", name: "Арбалет", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Починка", "Пронзающая стрела 1 - 5", "Быстрая перезарядка 1 - 4", "Прочность 1 - 5"], console_name: "crossbow{Enchantments:[{id:mending,lvl:1},{id:piercing,lvl:%rand/1-5%},{id:quick_charge,lvl:%rand/1-4%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 6: { material: "CROSSBOW", name: "Арбалет", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Починка", "Тройной выстрел", "Быстрая перезарядка 1 - 4", "Прочность 1 - 5"], console_name: "crossbow{Enchantments:[{id:mending,lvl:1},{id:multishot,lvl:1},{id:quick_charge,lvl:%rand/1-4%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 7: { material: "TRIDENT", name: "Трезубец", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Починка", "Тягун 1 - 4", "Пронзатель 1 - 6", "Прочность 1 - 5"], console_name: "trident{Enchantments:[{id:mending,lvl:1},{id:riptide,lvl:%rand/1-4%},{id:impaling,lvl:%rand/1-6%},{id:unbreaking,lvl:%rand/1-5%}]}" },
 8: { material: "TRIDENT", name: "Трезубец", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Починка", "Верность 1 - 4", "Пронзатель 1 - 6", "Прочность 1 - 5", "Громовержец"], console_name: "trident{Enchantments:[{id:mending,lvl:1},{id:loyalty,lvl:%rand/1-4%},{id:impaling,lvl:%rand/1-6%},{id:unbreaking,lvl:%rand/1-5%},{id:channeling,lvl:1}]}" }
};

const all_tools_random_base = {
 1: { material: "FISHING_ROD", name: "Удочка", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Приманка 1 - 4", "Починка", "Везучий рыбак 1 - 5", "Прочность 1 - 5"], console_name: "fishing_rod{Enchantments:[{id:mending,lvl:1},{id:lure,lvl:%rand/1-4%},{id:luck_of_the_sea,lvl:%rand/1-5%},{id:unbreaking,lvl:%rand/1-6%}]}" },
 2: { material: "SHEARS", name: "Ножницы", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Эффективность 1 - 6", "Починка", "Прочность 1 - 7"], console_name: "shears{Enchantments:[{id:mending,lvl:1},{id:efficiency,lvl:%rand/1-6%},{id:unbreaking,lvl:%rand/1-7%}]}" },
 3: { material: "SHIELD", name: "Щит", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Починка", "Прочность 1 - 6"], console_name: "shield{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:%rand/1-6%}]}" },
 4: { material: "FLINT_AND_STEEL", name: "Огниво", rate_price: 50, token: "%rand/0-1%", token_ru: "0 - 1", enchantments: ["Починка", "Прочность 1 - 6"], console_name: "flint_and_steel{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:%rand/1-6%}]}" }
};

const money_10_rate_random = {
 1: { material: "PAPER", name: "Монеты", rate_price: 10, rate_victory: "%rand/0-15%", rate_victory_ru: "0 - 15", token: "%rand/0-1%", token_ru: "0 - 1" }
};

const money_25_rate_random = {
 1: { material: "PAPER", name: "Монеты", rate_price: 25, rate_victory: "%rand/0-35%", rate_victory_ru: "0 - 35", token: "%rand/0-1%", token_ru: "0 - 1" }
};

const money_50_rate_random = {
 1: { material: "PAPER", name: "Монеты", rate_price: 50, rate_victory: "%rand/0-75%", rate_victory_ru: "0 - 75", token: "%rand/0-2%", token_ru: "0 - 2" }
};

const money_75_rate_random = {
 1: { material: "PAPER", name: "Монеты", rate_price: 75, rate_victory: "%rand/0-100%", rate_victory_ru: "0 - 100", token: "%rand/0-2%", token_ru: "0 - 2" }
};

const money_100_rate_random = {
 1: { material: "PAPER", name: "Монеты", rate_price: 100, rate_victory: "%rand/0-150%", rate_victory_ru: "0 - 150", token: "%rand/0-4%", token_ru: "0 - 4" }
};

const money_250_rate_random = {
 1: { material: "PAPER", name: "Монеты", rate_price: 250, rate_victory: "%rand/0-375%", rate_victory_ru: "0 - 375", token: "%rand/0-5%", token_ru: "0 - 5" }
};

const money_500_rate_random = {
 1: { material: "PAPER", name: "Монеты", rate_price: 500, rate_victory: "%rand/0-750%", rate_victory_ru: "0 - 750", token: "%rand/0-6%", token_ru: "0 - 6" }
};

const money_750_rate_random = {
 1: { material: "PAPER", name: "Монеты", rate_price: 750, rate_victory: "%rand/0-1125%", rate_victory_ru: "0 - 1125", token: "%rand/0-10%", token_ru: "0 - 10" }
};

const money_1000_rate_random = {
 1: { material: "PAPER", name: "Монеты", rate_price: 1000, rate_victory: "%rand/0-1500%", rate_victory_ru: "0 - 1500", token: "%rand/0-14%", token_ru: "0 - 14" }
};

const money_1500_rate_random = {
 1: { material: "PAPER", name: "Монеты", rate_price: 1500, rate_victory: "%rand/0-2250%", rate_victory_ru: "0 - 2250", token: "%rand/0-16%", token_ru: "0 - 16" }
};

module.exports.fixed_slot_one = fixed_slot_one;
module.exports.fixed_slot_two = fixed_slot_two;
module.exports.fixed_slot_three = fixed_slot_three;
module.exports.fixed_slot_four = fixed_slot_four;
module.exports.token_code = token_code;
module.exports.netherite_pickaxe_random_base = netherite_pickaxe_random_base;
module.exports.netherite_shovel_random_base = netherite_shovel_random_base;
module.exports.netherite_axe_random_base = netherite_axe_random_base;
module.exports.netherite_hoe_random_base = netherite_hoe_random_base;
module.exports.bow_crossbow_trident_random_base = bow_crossbow_trident_random_base;
module.exports.all_tools_random_base = all_tools_random_base;
module.exports.money_10_rate_random = money_10_rate_random;
module.exports.money_25_rate_random = money_25_rate_random;
module.exports.money_50_rate_random = money_50_rate_random;
module.exports.money_75_rate_random = money_75_rate_random;
module.exports.money_100_rate_random = money_100_rate_random;
module.exports.money_250_rate_random = money_250_rate_random;
module.exports.money_500_rate_random = money_500_rate_random;
module.exports.money_750_rate_random = money_750_rate_random;
module.exports.money_1000_rate_random = money_1000_rate_random;
module.exports.money_1500_rate_random = money_1500_rate_random;