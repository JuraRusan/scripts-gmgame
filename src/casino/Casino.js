const fixed_slot_one = [10, 16, 20, 24, 22];

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

module.exports.fixed_slot_one = fixed_slot_one;
module.exports.token_code = token_code;
module.exports.netherite_pickaxe_random_base = netherite_pickaxe_random_base;
module.exports.netherite_shovel_random_base = netherite_shovel_random_base;
module.exports.netherite_axe_random_base = netherite_axe_random_base;
module.exports.netherite_hoe_random_base = netherite_hoe_random_base;
