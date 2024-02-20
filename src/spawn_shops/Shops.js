const fixed_slot_minecraft = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

const ore_base = {
 1: { material: "COAL_ORE", console_name: "coal_ore", name: "Угольная руда", amount: 0.025 },
 2: { material: "DEEPSLATE_COAL_ORE", console_name: "deepslate_coal_ore", name: "Угленосный глубинный сланец", amount: 0.025 },
 3: { material: "IRON_ORE", console_name: "iron_ore", name: "Железная руда", amount: 0.025 },
 4: { material: "DEEPSLATE_IRON_ORE", console_name: "deepslate_iron_ore", name: "Железоносный глубинный сланец", amount: 0.025 },
 5: { material: "COPPER_ORE", console_name: "copper_ore", name: "Медная руда", amount: 0.05 },
 6: { material: "DEEPSLATE_COPPER_ORE", console_name: "deepslate_copper_ore", name: "Меденосный глубинный сланец", amount: 0.05 },
 7: { material: "REDSTONE_ORE", console_name: "redstone_ore", name: "Редстоуновая руда", amount: 0.05 },
 8: { material: "DEEPSLATE_REDSTONE_ORE", console_name: "deepslate_redstone_ore", name: "Редстоуноносный глубинный сланец", amount: 0.05 },
 9: { material: "GOLD_ORE", console_name: "gold_ore", name: "Золотая руда", amount: 0.1 },
 10: { material: "DEEPSLATE_GOLD_ORE", console_name: "deepslate_gold_ore", name: "Золотоносный глубинный сланец", amount: 0.1 },
 11: { material: "LAPIS_ORE", console_name: "lapis_ore", name: "Лазуритовая руда", amount: 0.25 },
 12: { material: "DEEPSLATE_LAPIS_ORE", console_name: "deepslate_lapis_ore", name: "Лазуритоносный глубинный сланец", amount: 0.25 },
 13: { material: "DIAMOND_ORE", console_name: "diamond_ore", name: "Алмазная руда", amount: 1 },
 14: { material: "DEEPSLATE_DIAMOND_ORE", console_name: "deepslate_diamond_ore", name: "Алмазоносный глубинный сланец", amount: 1 },
 15: { material: "EMERALD_ORE", console_name: "emerald_ore", name: "Изумрудная руда", amount: 2 },
 16: { material: "DEEPSLATE_EMERALD_ORE", console_name: "deepslate_emerald_ore", name: "Изумрудоносный глубинный сланец", amount: 2 },
 17: { material: "NETHER_QUARTZ_ORE", console_name: "nether_quartz_ore", name: "Незер-кварцевая руда", amount: 0.05 },
 18: { material: "NETHER_GOLD_ORE", console_name: "nether_gold_ore", name: "Незерская золотая руда", amount: 0.1 },
 19: { material: "ANCIENT_DEBRIS", console_name: "ancient_debris", name: "Древние обломки", amount: 2.5 },
 20: { material: "GILDED_BLACKSTONE", console_name: "gilded_blackstone", name: "Золочёный чернит", amount: 1.25 }
};

const item_vanilla_base = {
 1: { material: "HEART_OF_THE_SEA", console_name: "heart_of_the_sea", name: "Сердце моря", amount: 25 }
}

const item_creative_no_sell_base = {
 1: { material: "BUDDING_AMETHYST", console_name: "budding_amethyst", name: "Цветущий аметист", amount: 280 },
 2: { material: "ENCHANTED_GOLDEN_APPLE", console_name: "enchanted_golden_apple", name: "Зачарованное золотое яблоко", amount: 175 },
}

const tools_base = {
 1: { material: "NETHERITE_PICKAXE", console_name: "netherite_pickaxe{Enchantments:[{id:efficiency,lvl:5},{id:mending,lvl:1},{id:silk_touch,lvl:1},{id:unbreaking,lvl:4}]}", name: "Незеритовая кирка", amount: 150, enchantments: ["Эффективность 5", "Починка", "Шёлковое касание", "Прочность 4"] },
 2: { material: "NETHERITE_PICKAXE", console_name: "netherite_pickaxe{Enchantments:[{id:efficiency,lvl:5},{id:mending,lvl:1},{id:fortune,lvl:4},{id:unbreaking,lvl:4}]}", name: "Незеритовая кирка", amount: 300, enchantments: ["Эффективность 5", "Починка", "Удача 4", "Прочность 4"] },
 3: { material: "NETHERITE_AXE", console_name: "netherite_axe{Enchantments:[{id:efficiency,lvl:5},{id:mending,lvl:1},{id:silk_touch,lvl:1},{id:unbreaking,lvl:4}]}", name: "Незеритовый топор", amount: 150, enchantments: ["Эффективность 5", "Починка", "Шёлковое касание", "Прочность 4"] },
 4: { material: "NETHERITE_AXE", console_name: "netherite_axe{Enchantments:[{id:efficiency,lvl:5},{id:mending,lvl:1},{id:fortune,lvl:4},{id:unbreaking,lvl:4}]}", name: "Незеритовый топор", amount: 300, enchantments: ["Эффективность 5", "Починка", "Удача 4", "Прочность 4"] },
 5: { material: "NETHERITE_SHOVEL", console_name: "netherite_shovel{Enchantments:[{id:efficiency,lvl:5},{id:mending,lvl:1},{id:silk_touch,lvl:1},{id:unbreaking,lvl:4}]}", name: "Незеритовая лопата", amount: 150, enchantments: ["Эффективность 5", "Починка", "Шёлковое касание", "Прочность 4"] },
 6: { material: "NETHERITE_SHOVEL", console_name: "netherite_shovel{Enchantments:[{id:efficiency,lvl:5},{id:mending,lvl:1},{id:fortune,lvl:4},{id:unbreaking,lvl:4}]}", name: "Незеритовая лопата", amount: 300, enchantments: ["Эффективность 5", "Починка", "Удача 4", "Прочность 4"] },
 7: { material: "NETHERITE_HOE", console_name: "netherite_hoe{Enchantments:[{id:efficiency,lvl:5},{id:mending,lvl:1},{id:silk_touch,lvl:1},{id:unbreaking,lvl:4}]}", name: "Незеритовая мотыга", amount: 150, enchantments: ["Эффективность 5", "Починка", "Шёлковое касание", "Прочность 4"] },
 8: { material: "NETHERITE_HOE", console_name: "netherite_hoe{Enchantments:[{id:efficiency,lvl:5},{id:mending,lvl:1},{id:fortune,lvl:4},{id:unbreaking,lvl:4}]}", name: "Незеритовая мотыга", amount: 300, enchantments: ["Эффективность 5", "Починка", "Удача 4", "Прочность 4"] },
 9: { material: "NETHERITE_SWORD", console_name: "netherite_sword{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:4},{id:sweeping,lvl:3},{id:looting,lvl:3},{id:fire_aspect,lvl:2},{id:smite,lvl:6},{id:knockback,lvl:2}]}", name: "Незеритовый меч", amount: 350, enchantments: ["Починка", "Прочность 4", "Разящий клинок 3", "Добыча 3", "Заговор огня 2", "Небесная кара 6", "Отдача 2"] },
 10: { material: "NETHERITE_SWORD", console_name: "netherite_sword{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:4},{id:sweeping,lvl:3},{id:looting,lvl:3},{id:fire_aspect,lvl:2},{id:smite,lvl:6}]}", name: "Незеритовый меч", amount: 350, enchantments: ["Починка", "Прочность 4", "Разящий клинок 3", "Добыча 3", "Заговор огня 2", "Небесная кара 6"] },
 11: { material: "NETHERITE_SWORD", console_name: "netherite_sword{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:4},{id:sweeping,lvl:3},{id:looting,lvl:3},{id:smite,lvl:6}]}", name: "Незеритовый меч", amount: 350, enchantments: ["Починка", "Прочность 4", "Разящий клинок 3", "Добыча 3", "Небесная кара 6"] },
 12: { material: "NETHERITE_SWORD", console_name: "netherite_sword{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:4},{id:sweeping,lvl:3},{id:looting,lvl:3},{id:smite,lvl:6},{id:knockback,lvl:2}]}", name: "Незеритовый меч", amount: 350, enchantments: ["Починка", "Прочность 4", "Разящий клинок 3", "Добыча 3", "Небесная кара 6", "Отдача 2"] },
 13: { material: "NETHERITE_SWORD", console_name: "netherite_sword{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:4},{id:sweeping,lvl:3},{id:looting,lvl:3},{id:fire_aspect,lvl:2},{id:sharpness,lvl:6},{id:knockback,lvl:2}]}", name: "Незеритовый меч", amount: 350, enchantments: ["Починка", "Прочность 4", "Разящий клинок 3", "Добыча 3", "Заговор огня 2", "Острота 6", "Отдача 2"] },
 14: { material: "NETHERITE_SWORD", console_name: "netherite_sword{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:4},{id:sweeping,lvl:3},{id:looting,lvl:3},{id:fire_aspect,lvl:2},{id:sharpness,lvl:6}]}", name: "Незеритовый меч", amount: 350, enchantments: ["Починка", "Прочность 4", "Разящий клинок 3", "Добыча 3", "Заговор огня 2", "Острота 6"] },
 15: { material: "NETHERITE_SWORD", console_name: "netherite_sword{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:4},{id:sweeping,lvl:3},{id:looting,lvl:3},{id:sharpness,lvl:6}]}", name: "Незеритовый меч", amount: 350, enchantments: ["Починка", "Прочность 4", "Разящий клинок 3", "Добыча 3", "Острота 6"] },
 16: { material: "NETHERITE_SWORD", console_name: "netherite_sword{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:4},{id:sweeping,lvl:3},{id:looting,lvl:3},{id:sharpness,lvl:6},{id:knockback,lvl:2}]}", name: "Незеритовый меч", amount: 350, enchantments: ["Починка", "Прочность 4", "Разящий клинок 3", "Добыча 3", "Острота 6", "Отдача 2"] },
 17: { material: "NETHERITE_SWORD", console_name: "netherite_sword{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:4},{id:sweeping,lvl:3},{id:looting,lvl:3},{id:fire_aspect,lvl:2},{id:bane_of_arthropods,lvl:6},{id:knockback,lvl:2}]}", name: "Незеритовый меч", amount: 350, enchantments: ["Починка", "Прочность 4", "Разящий клинок 3", "Добыча 3", "Заговор огня 2", "Бич членистоногих 6", "Отдача 2"] },
 18: { material: "NETHERITE_SWORD", console_name: "netherite_sword{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:4},{id:sweeping,lvl:3},{id:looting,lvl:3},{id:fire_aspect,lvl:2},{id:bane_of_arthropods,lvl:6}]}", name: "Незеритовый меч", amount: 350, enchantments: ["Починка", "Прочность 4", "Разящий клинок 3", "Добыча 3", "Заговор огня 2", "Бич членистоногих 6"] },
 19: { material: "NETHERITE_SWORD", console_name: "netherite_sword{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:4},{id:sweeping,lvl:3},{id:looting,lvl:3},{id:bane_of_arthropods,lvl:6}]}", name: "Незеритовый меч", amount: 350, enchantments: ["Починка", "Прочность 4", "Разящий клинок 3", "Добыча 3", "Бич членистоногих 6"] },
 20: { material: "NETHERITE_SWORD", console_name: "netherite_sword{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:4},{id:sweeping,lvl:3},{id:looting,lvl:3},{id:bane_of_arthropods,lvl:6},{id:knockback,lvl:2}]}", name: "Незеритовый меч", amount: 350, enchantments: ["Починка", "Прочность 4", "Разящий клинок 3", "Добыча 3", "Бич членистоногих 6", "Отдача 2"] },
 21: { material: "BOW", console_name: "bow{Enchantments:[{id:flame,lvl:1},{id:mending,lvl:1},{id:power,lvl:6},{id:punch,lvl:2},{id:unbreaking,lvl:4}]}", name: "Лук", amount: 300, enchantments: ["Воспламенение", "Починка", "Сила 6", "Откидывание 2", "Прочность 4"] },
 22: { material: "BOW", console_name: "bow{Enchantments:[{id:flame,lvl:1},{id:infinity,lvl:1},{id:power,lvl:6},{id:punch,lvl:2},{id:unbreaking,lvl:4}]}", name: "Лук", amount: 300, enchantments: ["Воспламенение", "Бесконечность", "Сила 6", "Откидывание 2", "Прочность 4"] },
 23: { material: "BOW", console_name: "bow{Enchantments:[{id:flame,lvl:1},{id:mending,lvl:1},{id:power,lvl:6},{id:unbreaking,lvl:4}]}", name: "Лук", amount: 300, enchantments: ["Воспламенение", "Починка", "Сила 6", "Прочность 4"] },
 24: { material: "BOW", console_name: "bow{Enchantments:[{id:flame,lvl:1},{id:infinity,lvl:1},{id:power,lvl:6},{id:unbreaking,lvl:4}]}", name: "Лук", amount: 300, enchantments: ["Воспламенение", "Бесконечность", "Сила 6", "Прочность 4"] },
 25: { material: "CROSSBOW", console_name: "crossbow{Enchantments:[{id:mending,lvl:1},{id:piercing,lvl:5},{id:quick_charge,lvl:4},{id:unbreaking,lvl:4}]}", name: "Арбалет", amount: 300, enchantments: ["Починка", "Пронзающая стрела 5", "Быстрая перезарядка 4", "Прочность 4"] },
 26: { material: "CROSSBOW", console_name: "crossbow{Enchantments:[{id:mending,lvl:1},{id:multishot,lvl:1},{id:quick_charge,lvl:4},{id:unbreaking,lvl:4}]}", name: "Арбалет", amount: 300, enchantments: ["Починка", "Тройной выстрел", "Быстрая перезарядка 4", "Прочность 4"] },
 27: { material: "TRIDENT", console_name: "trident{Enchantments:[{id:mending,lvl:1},{id:riptide,lvl:3},{id:impaling,lvl:6},{id:unbreaking,lvl:4}]}", name: "Трезубец", amount: 300, enchantments: ["Починка", "Тягун 3", "Прочность 4", "Пронзатель 6"] },
 28: { material: "FISHING_ROD", console_name: "fishing_rod{Enchantments:[{id:mending,lvl:1},{id:lure,lvl:4},{id:luck_of_the_sea,lvl:4},{id:unbreaking,lvl:4}]}", name: "Удочка", amount: 300, enchantments: ["Починка", "Приманка 4", "Прочность 4", "Везучий рыбак 4"] },
 29: { material: "SHEARS", console_name: "shears{Enchantments:[{id:mending,lvl:1},{id:efficiency,lvl:5},{id:unbreaking,lvl:5}]}", name: "Ножницы", amount: 300, enchantments: ["Починка", "Эффективность 5", "Прочность 5"] },
 30: { material: "SHIELD", console_name: "shield{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:5}]}", name: "Щит", amount: 300, enchantments: ["Починка", "Прочность 5"] },
 31: { material: "FLINT_AND_STEEL", console_name: "flint_and_steel{Enchantments:[{id:mending,lvl:1},{id:unbreaking,lvl:5}]}", name: "Огниво", amount: 300, enchantments: ["Починка", "Прочность 5"] }
}

const turtle_helmet_base = {
 1: { material: "TURTLE_HELMET", console_name: "turtle_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Черепаший панцирь", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Защита 5", "Прочность 4"] },
 2: { material: "TURTLE_HELMET", console_name: "turtle_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Черепаший панцирь", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Защита 5", "Прочность 4", "Шипы 3"] },
 3: { material: "TURTLE_HELMET", console_name: "turtle_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:projectile_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Черепаший панцирь", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Защита от снарядов 5", "Прочность 4"] },
 4: { material: "TURTLE_HELMET", console_name: "turtle_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:projectile_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Черепаший панцирь", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Защита от снарядов 5", "Прочность 4", "Шипы 3"] },
 5: { material: "TURTLE_HELMET", console_name: "turtle_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:fire_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Черепаший панцирь", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Огнеупорность 5", "Прочность 4"] },
 6: { material: "TURTLE_HELMET", console_name: "turtle_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:fire_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Черепаший панцирь", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Огнеупорность 5", "Прочность 4", "Шипы 3"] },
 7: { material: "TURTLE_HELMET", console_name: "turtle_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:blast_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Черепаший панцирь", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Взрывоустойчивость 5", "Прочность 4"] },
 8: { material: "TURTLE_HELMET", console_name: "turtle_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:blast_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Черепаший панцирь", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Взрывоустойчивость 5", "Прочность 4", "Шипы 3"] }
}

const netherite_helmet_base = {
 1: { material: "NETHERITE_HELMET", console_name: "netherite_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовый шлем", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Защита 5", "Прочность 4"] },
 2: { material: "NETHERITE_HELMET", console_name: "netherite_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовый шлем", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Защита 5", "Прочность 4", "Шипы 3"] },
 3: { material: "NETHERITE_HELMET", console_name: "netherite_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:projectile_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовый шлем", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Защита от снарядов 5", "Прочность 4"] },
 4: { material: "NETHERITE_HELMET", console_name: "netherite_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:projectile_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовый шлем", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Защита от снарядов 5", "Прочность 4", "Шипы 3"] },
 5: { material: "NETHERITE_HELMET", console_name: "netherite_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:fire_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовый шлем", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Огнеупорность 5", "Прочность 4"] },
 6: { material: "NETHERITE_HELMET", console_name: "netherite_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:fire_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовый шлем", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Огнеупорность 5", "Прочность 4", "Шипы 3"] },
 7: { material: "NETHERITE_HELMET", console_name: "netherite_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:blast_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовый шлем", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Взрывоустойчивость 5", "Прочность 4"] },
 8: { material: "NETHERITE_HELMET", console_name: "netherite_helmet{Enchantments:[{id:mending,lvl:1},{id:aqua_affinity,lvl:1},{id:respiration,lvl:4},{id:blast_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовый шлем", amount: 600, enchantments: ["Починка", "Подводник", "Подводное дыхание 4", "Взрывоустойчивость 5", "Прочность 4", "Шипы 3"] }
}

const netherite_chestplate_base = {
 1: { material: "NETHERITE_CHESTPLATE", console_name: "netherite_chestplate{Enchantments:[{id:mending,lvl:1},{id:protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовый нагрудник", amount: 600, enchantments: ["Починка", "Защита 5", "Прочность 4"] },
 2: { material: "NETHERITE_CHESTPLATE", console_name: "netherite_chestplate{Enchantments:[{id:mending,lvl:1},{id:protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовый нагрудник", amount: 600, enchantments: ["Починка", "Защита 5", "Прочность 4", "Шипы 3"] },
 3: { material: "NETHERITE_CHESTPLATE", console_name: "netherite_chestplate{Enchantments:[{id:mending,lvl:1},{id:projectile_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовый нагрудник", amount: 600, enchantments: ["Починка", "Защита от снарядов 5", "Прочность 4"] },
 4: { material: "NETHERITE_CHESTPLATE", console_name: "netherite_chestplate{Enchantments:[{id:mending,lvl:1},{id:projectile_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовый нагрудник", amount: 600, enchantments: ["Починка", "Защита от снарядов 5", "Прочность 4", "Шипы 3"] },
 5: { material: "NETHERITE_CHESTPLATE", console_name: "netherite_chestplate{Enchantments:[{id:mending,lvl:1},{id:fire_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовый нагрудник", amount: 600, enchantments: ["Починка", "Огнеупорность 5", "Прочность 4"] },
 6: { material: "NETHERITE_CHESTPLATE", console_name: "netherite_chestplate{Enchantments:[{id:mending,lvl:1},{id:fire_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовый нагрудник", amount: 600, enchantments: ["Починка", "Огнеупорность 5", "Прочность 4", "Шипы 3"] },
 7: { material: "NETHERITE_CHESTPLATE", console_name: "netherite_chestplate{Enchantments:[{id:mending,lvl:1},{id:blast_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовый нагрудник", amount: 600, enchantments: ["Починка", "Взрывоустойчивость 5", "Прочность 4"] },
 8: { material: "NETHERITE_CHESTPLATE", console_name: "netherite_chestplate{Enchantments:[{id:mending,lvl:1},{id:blast_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовый нагрудник", amount: 600, enchantments: ["Починка", "Взрывоустойчивость 5", "Прочность 4", "Шипы 3"] }
}

const netherite_leggings_base = {
 1: { material: "NETHERITE_LEGGINGS", console_name: "netherite_leggings{Enchantments:[{id:mending,lvl:1},{id:protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовые поножи", amount: 600, enchantments: ["Починка", "Защита 5", "Прочность 4"] },
 2: { material: "NETHERITE_LEGGINGS", console_name: "netherite_leggings{Enchantments:[{id:mending,lvl:1},{id:protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовые поножи", amount: 600, enchantments: ["Починка", "Защита 5", "Прочность 4", "Шипы 3"] },
 3: { material: "NETHERITE_LEGGINGS", console_name: "netherite_leggings{Enchantments:[{id:mending,lvl:1},{id:projectile_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовые поножи", amount: 600, enchantments: ["Починка", "Защита от снарядов 5", "Прочность 4"] },
 4: { material: "NETHERITE_LEGGINGS", console_name: "netherite_leggings{Enchantments:[{id:mending,lvl:1},{id:projectile_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовые поножи", amount: 600, enchantments: ["Починка", "Защита от снарядов 5", "Прочность 4", "Шипы 3"] },
 5: { material: "NETHERITE_LEGGINGS", console_name: "netherite_leggings{Enchantments:[{id:mending,lvl:1},{id:fire_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовые поножи", amount: 600, enchantments: ["Починка", "Огнеупорность 5", "Прочность 4"] },
 6: { material: "NETHERITE_LEGGINGS", console_name: "netherite_leggings{Enchantments:[{id:mending,lvl:1},{id:fire_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовые поножи", amount: 600, enchantments: ["Починка", "Огнеупорность 5", "Прочность 4", "Шипы 3"] },
 7: { material: "NETHERITE_LEGGINGS", console_name: "netherite_leggings{Enchantments:[{id:mending,lvl:1},{id:blast_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовые поножи", amount: 600, enchantments: ["Починка", "Взрывоустойчивость 5", "Прочность 4"] },
 8: { material: "NETHERITE_LEGGINGS", console_name: "netherite_leggings{Enchantments:[{id:mending,lvl:1},{id:blast_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовые поножи", amount: 600, enchantments: ["Починка", "Взрывоустойчивость 5", "Прочность 4", "Шипы 3"] }
}

const netherite_boots_base = {
 1: { material: "NETHERITE_BOOTS", console_name: "netherite_boots{Enchantments:[{id:depth_strider,lvl:3},{id:feather_falling,lvl:5},{id:soul_speed,lvl:3},{id:mending,lvl:1},{id:protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовые ботинки", amount: 600, enchantments: ["Подводная ходьба 3", "Невесомость 5", "Скорость души 3", "Починка", "Защита 5", "Прочность 4"] },
 2: { material: "NETHERITE_BOOTS", console_name: "netherite_boots{Enchantments:[{id:depth_strider,lvl:3},{id:feather_falling,lvl:5},{id:soul_speed,lvl:3},{id:mending,lvl:1},{id:protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовые ботинки", amount: 600, enchantments: ["Подводная ходьба 3", "Невесомость 5", "Скорость души 3", "Починка", "Защита 5", "Прочность 4", "Шипы 3"] },
 3: { material: "NETHERITE_BOOTS", console_name: "netherite_boots{Enchantments:[{id:depth_strider,lvl:3},{id:feather_falling,lvl:5},{id:soul_speed,lvl:3},{id:mending,lvl:1},{id:projectile_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовые ботинки", amount: 600, enchantments: ["Подводная ходьба 3", "Невесомость 5", "Скорость души 3", "Починка", "Защита от снарядов 5", "Прочность 4"] },
 4: { material: "NETHERITE_BOOTS", console_name: "netherite_boots{Enchantments:[{id:depth_strider,lvl:3},{id:feather_falling,lvl:5},{id:soul_speed,lvl:3},{id:mending,lvl:1},{id:projectile_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовые ботинки", amount: 600, enchantments: ["Подводная ходьба 3", "Невесомость 5", "Скорость души 3", "Починка", "Защита от снарядов 5", "Прочность 4", "Шипы 3"] },
 5: { material: "NETHERITE_BOOTS", console_name: "netherite_boots{Enchantments:[{id:depth_strider,lvl:3},{id:feather_falling,lvl:5},{id:soul_speed,lvl:3},{id:mending,lvl:1},{id:fire_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовые ботинки", amount: 600, enchantments: ["Подводная ходьба 3", "Невесомость 5", "Скорость души 3", "Починка", "Огнеупорность 5", "Прочность 4"] },
 6: { material: "NETHERITE_BOOTS", console_name: "netherite_boots{Enchantments:[{id:depth_strider,lvl:3},{id:feather_falling,lvl:5},{id:soul_speed,lvl:3},{id:mending,lvl:1},{id:fire_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовые ботинки", amount: 600, enchantments: ["Подводная ходьба 3", "Невесомость 5", "Скорость души 3", "Починка", "Огнеупорность 5", "Прочность 4", "Шипы 3"] },
 7: { material: "NETHERITE_BOOTS", console_name: "netherite_boots{Enchantments:[{id:depth_strider,lvl:3},{id:feather_falling,lvl:5},{id:soul_speed,lvl:3},{id:mending,lvl:1},{id:blast_protection,lvl:5},{id:unbreaking,lvl:4}]}", name: "Незеритовые ботинки", amount: 600, enchantments: ["Подводная ходьба 3", "Невесомость 5", "Скорость души 3", "Починка", "Взрывоустойчивость 5", "Прочность 4"] },
 8: { material: "NETHERITE_BOOTS", console_name: "netherite_boots{Enchantments:[{id:depth_strider,lvl:3},{id:feather_falling,lvl:5},{id:soul_speed,lvl:3},{id:mending,lvl:1},{id:blast_protection,lvl:5},{id:unbreaking,lvl:4},{id:thorns,lvl:3}]}", name: "Незеритовые ботинки", amount: 600, enchantments: ["Подводная ходьба 3", "Невесомость 5", "Скорость души 3", "Починка", "Взрывоустойчивость 5", "Прочность 4", "Шипы 3"] }
}

module.exports.fixed_slot_minecraft = fixed_slot_minecraft;
module.exports.ore_base = ore_base;
module.exports.item_vanilla_base = item_vanilla_base;
module.exports.item_creative_no_sell_base = item_creative_no_sell_base;
module.exports.tools_base = tools_base;
module.exports.turtle_helmet_base = turtle_helmet_base;
module.exports.netherite_helmet_base = netherite_helmet_base;
module.exports.netherite_chestplate_base = netherite_chestplate_base;
module.exports.netherite_leggings_base = netherite_leggings_base;
module.exports.netherite_boots_base = netherite_boots_base;