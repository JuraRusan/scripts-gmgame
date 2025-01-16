export const slots_sell = [0, 9, 1, 10, 2, 11, 3, 12, 4, 13, 5, 14, 6, 15, 7, 16, 8, 17, 30, 32];
export const slots_no_sell = [31];

export const yes_sell = [
  { material: "coal_ore", name: "Угольная руда", amount: 0.03 },
  { material: "deepslate_coal_ore", name: "Угленосный глубинный сланец", amount: 0.04 },

  { material: "iron_ore", name: "Железная руда", amount: 0.03 },
  { material: "deepslate_iron_ore", name: "Железоносный глубинный сланец", amount: 0.04 },

  { material: "copper_ore", name: "Медная руда", amount: 0.05 },
  { material: "deepslate_copper_ore", name: "Меденосный глубинный сланец", amount: 0.06 },

  { material: "redstone_ore", name: "Редстоуновая руда", amount: 0.05 },
  { material: "deepslate_redstone_ore", name: "Редстоуноносный глубинный сланец", amount: 0.06 },

  { material: "gold_ore", name: "Золотая руда", amount: 0.1 },
  { material: "deepslate_gold_ore", name: "Золотоносный глубинный сланец", amount: 0.11 },

  { material: "lapis_ore", name: "Лазуритовая руда", amount: 0.25 },
  { material: "deepslate_lapis_ore", name: "Лазуритоносный глубинный сланец", amount: 0.26 },

  { material: "emerald_ore", name: "Изумрудная руда", amount: 2 },
  { material: "deepslate_emerald_ore", name: "Изумрудоносный глубинный сланец", amount: 3 },

  { material: "nether_quartz_ore", name: "Незер-кварцевая руда", amount: 0.05 },
  { material: "nether_gold_ore", name: "Незерская золотая руда", amount: 0.07 },
  { material: "gilded_blackstone", name: "Золочёный чернит", amount: 0.45 },
  { material: "ancient_debris", name: "Древние обломки", amount: 2.0 },

  { material: "diamond_ore", name: "Алмазная руда", amount: 1 },
  { material: "deepslate_diamond_ore", name: "Алмазоносный глубинный сланец", amount: 1 },
];

export const no_sell = [{ material: "budding_amethyst", name: "Цветущий аметист", amount: 280 }];

export const token = `paper[custom_name='["",{"text":"Уникальный токен предмет","color":"#3399ff"}]',lore=['["",{"text":" ","color":"gray"}]','["",{"text":" * ","italic":false,"color":"aqua"},{"text":"Токен предмет защищен от подделки","color":"gray"}]','["",{"text":" ","color":"gray","italic":false},{"text":"*","italic":false,"color":"aqua"},{"text":" ","italic":false,"color":"gray"},{"text":"и предназначенный только для","color":"gray"}]','["",{"text":" ","italic":false},{"text":"*","italic":false,"color":"aqua"},{"text":" ","italic":false},{"text":"использования в казино для того что бы...","color":"gray"}]','[""]','["",{"text":" ","italic":false},{"text":"*","italic":false,"color":"aqua"},{"text":" ","italic":false},{"text":"Но это совсем другая история...","color":"gray"}]'],enchantments={levels:{unbreaking:10},show_in_tooltip:false}]`;

export const defaultEnchantments = {
  mending: { lv: 1, name: "Починка" },
  soul_speed: { lv: 3, name: "Скорость души" },
  protection: { lv: 4, name: "Защита" },
  projectile_protection: { lv: 4, name: "Защита от снарядов" },
  bane_of_arthropods: { lv: 5, name: "Бич членистоногих" },
  quick_charge: { lv: 3, name: "Быстрая перезарядка" },
  depth_strider: { lv: 3, name: "Подводная ходьба" },
  silk_touch: { lv: 1, name: "Шёлковое касание" },
  unbreaking: { lv: 3, name: "Прочность" },
  wind_burst: { lv: 3, name: "Порыв ветра" },
  blast_protection: { lv: 4, name: "Взрывоустойчивость" },
  channeling: { lv: 1, name: "Громовержец" },
  fire_aspect: { lv: 2, name: "Заговор огня" },
  flame: { lv: 1, name: "Воспламенение" },
  punch: { lv: 2, name: "Откидывание" },
  riptide: { lv: 3, name: "Тягун" },
  breach: { lv: 4, name: "Пробитие" },
  efficiency: { lv: 5, name: "Эффективность" },
  fire_protection: { lv: 4, name: "Огнеупорность" },
  piercing: { lv: 4, name: "Пронзающая стрела" },
  power: { lv: 5, name: "Сила" },
  density: { lv: 5, name: "Плотность" },
  sweeping_edge: { lv: 3, name: "Разящий клинок" },
  sharpness: { lv: 5, name: "Острота" },
  loyalty: { lv: 3, name: "Верность" },
  feather_falling: { lv: 4, name: "Невесомость" },
  aqua_affinity: { lv: 1, name: "Подводник" },
  luck_of_the_sea: { lv: 3, name: "Везучий рыбак" },
  infinity: { lv: 1, name: "Бесконечность" },
  fortune: { lv: 3, name: "Удача" },
  impaling: { lv: 5, name: "Пронзатель" },
  looting: { lv: 3, name: "Добыча" },
  smite: { lv: 5, name: "Небесная кара" },
  swift_sneak: { lv: 3, name: "Проворство" },
  respiration: { lv: 3, name: "Подводное дыхание" },
  multishot: { lv: 1, name: "Тройной выстрел" },
  frost_walker: { lv: 2, name: "Ледоход" },
  knockback: { lv: 2, name: "Отдача" },
  lure: { lv: 3, name: "Приманка" },
  thorns: { lv: 3, name: "Шипы" },
  curse_of_vanishing: { lv: 1, name: "Проклятие утраты" },
  curse_of_binding: { lv: 1, name: "Проклятие несъёмности" },
};

export const armors = [
  {
    slots: [11, 12, 13, 14, 15, 21, 22, 23],
    save: "shops_turtle_helmet.yml",
    title: "Черепашьи панцири",
    list: [
      {
        material: "TURTLE_HELMET",
        name: "Черепаший панцирь",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, protection: 5, respiration: 4, unbreaking: 4 },
      },
      {
        material: "TURTLE_HELMET",
        name: "Черепаший панцирь",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, protection: 5, respiration: 4, unbreaking: 4, thorns: 3 },
      },
      {
        material: "TURTLE_HELMET",
        name: "Черепаший панцирь",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, projectile_protection: 5, respiration: 4, unbreaking: 4 },
      },
      {
        material: "TURTLE_HELMET",
        name: "Черепаший панцирь",
        amount: 600,
        enchantments: {
          aqua_affinity: 1,
          mending: 1,
          projectile_protection: 5,
          respiration: 4,
          unbreaking: 4,
          thorns: 3,
        },
      },
      {
        material: "TURTLE_HELMET",
        name: "Черепаший панцирь",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, fire_protection: 5, respiration: 4, unbreaking: 4 },
      },
      {
        material: "TURTLE_HELMET",
        name: "Черепаший панцирь",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, fire_protection: 5, respiration: 4, unbreaking: 4, thorns: 3 },
      },
      {
        material: "TURTLE_HELMET",
        name: "Черепаший панцирь",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, blast_protection: 5, respiration: 4, unbreaking: 4 },
      },
      {
        material: "TURTLE_HELMET",
        name: "Черепаший панцирь",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, blast_protection: 5, respiration: 4, unbreaking: 4, thorns: 3 },
      },
    ],
  },
  {
    slots: [11, 12, 13, 14, 15, 21, 22, 23],
    save: "shops_netherite_helmet.yml",
    title: "Незеритовые шлемы",
    list: [
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, protection: 5, respiration: 4, unbreaking: 4 },
      },
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, protection: 5, respiration: 4, unbreaking: 4, thorns: 3 },
      },
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, projectile_protection: 5, respiration: 4, unbreaking: 4 },
      },
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: {
          aqua_affinity: 1,
          mending: 1,
          projectile_protection: 5,
          respiration: 4,
          unbreaking: 4,
          thorns: 3,
        },
      },
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, fire_protection: 5, respiration: 4, unbreaking: 4 },
      },
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, fire_protection: 5, respiration: 4, unbreaking: 4, thorns: 3 },
      },
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, blast_protection: 5, respiration: 4, unbreaking: 4 },
      },
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, blast_protection: 5, respiration: 4, unbreaking: 4, thorns: 3 },
      },
    ],
  },
  {
    slots: [11, 12, 13, 14, 15, 21, 22, 23],
    save: "shops_netherite_chestplate.yml",
    title: "Незеритовые нагрудник",
    list: [
      {
        material: "NETHERITE_CHESTPLATE",
        name: "Незеритовый нагрудник",
        amount: 600,
        enchantments: { mending: 1, protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_CHESTPLATE",
        name: "Незеритовый нагрудник",
        amount: 600,
        enchantments: { mending: 1, protection: 5, unbreaking: 4, thorns: 3 },
      },
      {
        material: "NETHERITE_CHESTPLATE",
        name: "Незеритовый нагрудник",
        amount: 600,
        enchantments: { mending: 1, projectile_protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_CHESTPLATE",
        name: "Незеритовый нагрудник",
        amount: 600,
        enchantments: { mending: 1, projectile_protection: 5, unbreaking: 4, thorns: 3 },
      },
      {
        material: "NETHERITE_CHESTPLATE",
        name: "Незеритовый нагрудник",
        amount: 600,
        enchantments: { mending: 1, fire_protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_CHESTPLATE",
        name: "Незеритовый нагрудник",
        amount: 600,
        enchantments: { mending: 1, fire_protection: 5, unbreaking: 4, thorns: 3 },
      },
      {
        material: "NETHERITE_CHESTPLATE",
        name: "Незеритовый нагрудник",
        amount: 600,
        enchantments: { mending: 1, blast_protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_CHESTPLATE",
        name: "Незеритовый нагрудник",
        amount: 600,
        enchantments: { mending: 1, blast_protection: 5, unbreaking: 4, thorns: 3 },
      },
    ],
  },
  {
    slots: [11, 12, 13, 14, 15, 21, 22, 23],
    save: "shops_netherite_leggings.yml",
    title: "Незеритовые поножи",
    list: [
      {
        material: "NETHERITE_LEGGINGS",
        name: "Незеритовые поножи",
        amount: 600,
        enchantments: { mending: 1, protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_LEGGINGS",
        name: "Незеритовые поножи",
        amount: 600,
        enchantments: { mending: 1, protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_LEGGINGS",
        name: "Незеритовые поножи",
        amount: 600,
        enchantments: { mending: 1, projectile_protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_LEGGINGS",
        name: "Незеритовые поножи",
        amount: 600,
        enchantments: { mending: 1, projectile_protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_LEGGINGS",
        name: "Незеритовые поножи",
        amount: 600,
        enchantments: { mending: 1, fire_protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_LEGGINGS",
        name: "Незеритовые поножи",
        amount: 600,
        enchantments: { mending: 1, fire_protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_LEGGINGS",
        name: "Незеритовые поножи",
        amount: 600,
        enchantments: { mending: 1, blast_protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_LEGGINGS",
        name: "Незеритовые поножи",
        amount: 600,
        enchantments: { mending: 1, blast_protection: 5, unbreaking: 4 },
      },
    ],
  },
  {
    slots: [11, 12, 13, 14, 15, 21, 22, 23],
    save: "shops_netherite_boots.yml",
    title: "Незеритовые ботинки",
    list: [
      {
        material: "NETHERITE_BOOTS",
        name: "Незеритовые ботинки",
        amount: 600,
        enchantments: { depth_strider: 3, feather_falling: 5, mending: 1, protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_BOOTS",
        name: "Незеритовые ботинки",
        amount: 600,
        enchantments: { depth_strider: 3, feather_falling: 5, mending: 1, protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_BOOTS",
        name: "Незеритовые ботинки",
        amount: 600,
        enchantments: { depth_strider: 3, feather_falling: 5, mending: 1, projectile_protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_BOOTS",
        name: "Незеритовые ботинки",
        amount: 600,
        enchantments: { depth_strider: 3, feather_falling: 5, mending: 1, projectile_protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_BOOTS",
        name: "Незеритовые ботинки",
        amount: 600,
        enchantments: { depth_strider: 3, feather_falling: 5, mending: 1, fire_protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_BOOTS",
        name: "Незеритовые ботинки",
        amount: 600,
        enchantments: { depth_strider: 3, feather_falling: 5, mending: 1, fire_protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_BOOTS",
        name: "Незеритовые ботинки",
        amount: 600,
        enchantments: { depth_strider: 3, feather_falling: 5, mending: 1, blast_protection: 5, unbreaking: 4 },
      },
      {
        material: "NETHERITE_BOOTS",
        name: "Незеритовые ботинки",
        amount: 600,
        enchantments: { depth_strider: 3, feather_falling: 5, mending: 1, blast_protection: 5, unbreaking: 4 },
      },
    ],
  },
  {
    slots: [11, 12, 13, 14, 15, 21, 22, 23, 27, 28, 34, 35],
    save: "shops_item.yml",
    title: "Инструменты",
    list: [
      {
        material: "NETHERITE_PICKAXE",
        name: "Незеритовая кирка",
        amount: 150,
        enchantments: { efficiency: 5, mending: 1, silk_touch: 1, unbreaking: 4 },
      },
      {
        material: "NETHERITE_PICKAXE",
        name: "Незеритовая кирка",
        amount: 300,
        enchantments: { efficiency: 5, mending: 1, fortune: 4, unbreaking: 4 },
      },
      {
        material: "NETHERITE_AXE",
        name: "Незеритовый топор",
        amount: 150,
        enchantments: { efficiency: 5, mending: 1, silk_touch: 1, unbreaking: 4 },
      },
      {
        material: "NETHERITE_AXE",
        name: "Незеритовый топор",
        amount: 300,
        enchantments: { efficiency: 5, mending: 1, fortune: 4, unbreaking: 4 },
      },
      {
        material: "NETHERITE_SHOVEL",
        name: "Незеритовая лопата",
        amount: 150,
        enchantments: { efficiency: 5, mending: 1, silk_touch: 1, unbreaking: 4 },
      },
      {
        material: "NETHERITE_SHOVEL",
        name: "Незеритовая лопата",
        amount: 300,
        enchantments: { efficiency: 5, mending: 1, fortune: 4, unbreaking: 4 },
      },
      {
        material: "NETHERITE_HOE",
        name: "Незеритовая мотыга",
        amount: 150,
        enchantments: { efficiency: 5, mending: 1, silk_touch: 1, unbreaking: 4 },
      },
      {
        material: "NETHERITE_HOE",
        name: "Незеритовая мотыга",
        amount: 300,
        enchantments: { efficiency: 5, mending: 1, fortune: 4, unbreaking: 4 },
      },
      {
        material: "SHIELD",
        name: "Щит",
        amount: 300,
        enchantments: { mending: 1, unbreaking: 5 },
      },
      {
        material: "FLINT_AND_STEEL",
        name: "Огниво",
        amount: 300,
        enchantments: { mending: 1, unbreaking: 5 },
      },
      {
        material: "SHEARS",
        name: "Ножницы",
        amount: 300,
        enchantments: { efficiency: 5, mending: 1, unbreaking: 5 },
      },
      {
        material: "FISHING_ROD",
        name: "Удочка",
        amount: 300,
        enchantments: { lure: 4, luck_of_the_sea: 4, mending: 1, unbreaking: 4 },
      },
    ],
  },
  {
    slots: [11, 12, 13, 14, 15, 21, 22, 23],
    save: "shops_equipment.yml",
    title: "Снаряжение",
    list: [
      {
        material: "CROSSBOW",
        name: "Арбалет",
        amount: 300,
        enchantments: { mending: 1, quick_charge: 4, piercing: 5, unbreaking: 4 },
      },
      {
        material: "CROSSBOW",
        name: "Арбалет",
        amount: 300,
        enchantments: { mending: 1, quick_charge: 4, multishot: 1, unbreaking: 4 },
      },
      {
        material: "TRIDENT",
        name: "Трезубец",
        amount: 300,
        enchantments: { riptide: 3, mending: 1, impaling: 6, unbreaking: 4 },
      },
      {
        material: "BOW",
        name: "Лук",
        amount: 300,
        enchantments: { mending: 1, unbreaking: 4, power: 6 },
      },
      {
        material: "BOW",
        name: "Лук",
        amount: 300,
        enchantments: { infinity: 1, unbreaking: 4, power: 6 },
      },
      {
        material: "NETHERITE_SWORD",
        name: "Незеритовый меч",
        amount: 300,
        enchantments: { mending: 1, unbreaking: 4, sweeping_edge: 3, looting: 3, smite: 6 },
      },
      {
        material: "NETHERITE_SWORD",
        name: "Незеритовый меч",
        amount: 300,
        enchantments: { mending: 1, unbreaking: 4, sweeping_edge: 3, looting: 3, sharpness: 6 },
      },
      {
        material: "NETHERITE_SWORD",
        name: "Незеритовый меч",
        amount: 300,
        enchantments: { mending: 1, unbreaking: 4, sweeping_edge: 3, looting: 3, bane_of_arthropods: 6 },
      },
    ],
  },
];

export const casino = [
  {
    slots: [10, 16, 20, 24, 22],
    save: "casino_netherite_pickaxe.yml",
    open_command: "casino_netherite_pickaxe_menu",
    list: [
      {
        material: "NETHERITE_PICKAXE",
        name: "Незеритовая кирка",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 6,
          },
          mending: 1,
          silk_touch: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_PICKAXE",
        name: "Незеритовая кирка",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 6,
          },
          mending: 1,
          fortune: {
            min: 1,
            max: 4,
          },
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_PICKAXE",
        name: "Незеритовая кирка",
        amount: 250,
        token: {
          min: 0,
          max: 5,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 8,
          },
          mending: 1,
          silk_touch: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_PICKAXE",
        name: "Незеритовая кирка",
        amount: 250,
        token: {
          min: 0,
          max: 5,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 8,
          },
          mending: 1,
          fortune: {
            min: 1,
            max: 4,
          },
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_PICKAXE",
        name: "Незеритовая кирка",
        amount: 225,
        token: {
          min: 0,
          max: 4,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 8,
          },
          mending: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
    ],
  },
  {
    slots: [10, 16, 20, 24, 22],
    save: "casino_netherite_axe.yml",
    open_command: "casino_netherite_axe_menu",
    list: [
      {
        material: "NETHERITE_AXE",
        name: "Незеритовый топор",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 6,
          },
          mending: 1,
          silk_touch: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_AXE",
        name: "Незеритовый топор",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 6,
          },
          mending: 1,
          fortune: {
            min: 1,
            max: 4,
          },
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_AXE",
        name: "Незеритовый топор",
        amount: 250,
        token: {
          min: 0,
          max: 5,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 8,
          },
          mending: 1,
          silk_touch: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_AXE",
        name: "Незеритовый топор",
        amount: 250,
        token: {
          min: 0,
          max: 5,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 8,
          },
          mending: 1,
          fortune: {
            min: 1,
            max: 4,
          },
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_AXE",
        name: "Незеритовый топор",
        amount: 225,
        token: {
          min: 0,
          max: 4,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 8,
          },
          mending: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
    ],
  },
  {
    slots: [10, 16, 20, 24, 22],
    save: "casino_netherite_shovel.yml",
    open_command: "casino_netherite_shovel_menu",
    list: [
      {
        material: "NETHERITE_SHOVEL",
        name: "Незеритовая лопата",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 6,
          },
          mending: 1,
          silk_touch: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_SHOVEL",
        name: "Незеритовая лопата",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 6,
          },
          mending: 1,
          fortune: {
            min: 1,
            max: 4,
          },
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_SHOVEL",
        name: "Незеритовая лопата",
        amount: 250,
        token: {
          min: 0,
          max: 5,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 8,
          },
          mending: 1,
          silk_touch: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_SHOVEL",
        name: "Незеритовая лопата",
        amount: 250,
        token: {
          min: 0,
          max: 5,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 8,
          },
          mending: 1,
          fortune: {
            min: 1,
            max: 4,
          },
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_SHOVEL",
        name: "Незеритовая лопата",
        amount: 225,
        token: {
          min: 0,
          max: 4,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 8,
          },
          mending: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
    ],
  },
  {
    slots: [10, 16, 20, 24, 22],
    save: "casino_netherite_hoe.yml",
    open_command: "casino_netherite_hoe_menu",
    list: [
      {
        material: "NETHERITE_HOE",
        name: "Незеритовая мотыга",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 6,
          },
          mending: 1,
          silk_touch: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_HOE",
        name: "Незеритовая мотыга",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 6,
          },
          mending: 1,
          fortune: {
            min: 1,
            max: 4,
          },
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_HOE",
        name: "Незеритовая мотыга",
        amount: 250,
        token: {
          min: 0,
          max: 5,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 8,
          },
          mending: 1,
          silk_touch: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_HOE",
        name: "Незеритовая мотыга",
        amount: 250,
        token: {
          min: 0,
          max: 5,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 8,
          },
          mending: 1,
          fortune: {
            min: 1,
            max: 4,
          },
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "NETHERITE_HOE",
        name: "Незеритовая мотыга",
        amount: 225,
        token: {
          min: 0,
          max: 4,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 8,
          },
          mending: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
        },
      },
    ],
  },
  {
    slots: [10, 16, 20, 24, 22],
    save: "casino_item.yml",
    open_command: "casino_item_menu",
    list: [
      {
        material: "SHIELD",
        name: "Щит",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          mending: 1,
          unbreaking: {
            min: 1,
            max: 6,
          },
        },
      },
      {
        material: "FLINT_AND_STEEL",
        name: "Огниво",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          mending: 1,
          unbreaking: {
            min: 1,
            max: 6,
          },
        },
      },
      {
        material: "SHEARS",
        name: "Ножницы",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          efficiency: {
            min: 1,
            max: 6,
          },
          mending: 1,
          unbreaking: {
            min: 1,
            max: 7,
          },
        },
      },
      {
        material: "FISHING_ROD",
        name: "Удочка",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          mending: 1,
          unbreaking: {
            min: 1,
            max: 6,
          },
          lure: {
            min: 1,
            max: 4,
          },
          luck_of_the_sea: {
            min: 1,
            max: 5,
          },
        },
      },
    ],
  },
  {
    slots: [11, 12, 14, 15, 19, 20, 24, 25],
    save: "casino_equipment.yml",
    open_command: "casino_equipment_menu",
    list: [
      {
        material: "BOW",
        name: "Лук",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          mending: 1,
          flame: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
          power: {
            min: 1,
            max: 6,
          },
          punch: {
            min: 1,
            max: 3,
          },
        },
      },
      {
        material: "BOW",
        name: "Лук",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          infinity: 1,
          flame: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
          power: {
            min: 1,
            max: 6,
          },
          punch: {
            min: 1,
            max: 3,
          },
        },
      },
      {
        material: "BOW",
        name: "Лук",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          mending: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
          power: {
            min: 1,
            max: 6,
          },
          punch: {
            min: 1,
            max: 3,
          },
        },
      },
      {
        material: "BOW",
        name: "Лук",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          infinity: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
          power: {
            min: 1,
            max: 6,
          },
          punch: {
            min: 1,
            max: 3,
          },
        },
      },
      {
        material: "CROSSBOW",
        name: "Арбалет",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          mending: 1,
          multishot: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
          quick_charge: {
            min: 1,
            max: 4,
          },
        },
      },
      {
        material: "CROSSBOW",
        name: "Арбалет",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          mending: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
          quick_charge: {
            min: 1,
            max: 4,
          },
          piercing: {
            min: 1,
            max: 5,
          },
        },
      },
      {
        material: "TRIDENT",
        name: "Трезубец",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          mending: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
          riptide: {
            min: 1,
            max: 4,
          },
          impaling: {
            min: 1,
            max: 6,
          },
        },
      },
      {
        material: "TRIDENT",
        name: "Трезубец",
        amount: 50,
        token: {
          min: 0,
          max: 1,
        },
        enchantments: {
          mending: 1,
          unbreaking: {
            min: 1,
            max: 5,
          },
          loyalty: {
            min: 1,
            max: 4,
          },
          impaling: {
            min: 1,
            max: 6,
          },
        },
      },
    ],
  },
];
