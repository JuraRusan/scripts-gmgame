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

export const fixed_slot_minecraft = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const armors = [
  {
    slots: [11, 12, 13, 14, 15, 21, 22, 23],
    save: "shops_netherite_helmet.yml",
    title: "Незеритовые шлемы",
    command: "deluxe_menu_shops_netherite_helmets",
    list: [
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, protection: 5, respiration: 4, unbreaking: 4 } /* prettier-ignore */,
      },
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, protection: 5, respiration: 4, unbreaking: 4, thorns: 3 } /* prettier-ignore */,
      },
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, projectile_protection: 5, respiration: 4, unbreaking: 4 } /* prettier-ignore */,
      },
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, projectile_protection: 5, respiration: 4, unbreaking: 4, thorns: 3} /* prettier-ignore */,
      },
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, fire_protection: 5, respiration: 4, unbreaking: 4 } /* prettier-ignore */,
      },
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, fire_protection: 5, respiration: 4, unbreaking: 4, thorns: 3 } /* prettier-ignore */,
      },
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, blast_protection: 5, respiration: 4, unbreaking: 4 } /* prettier-ignore */,
      },
      {
        material: "NETHERITE_HELMET",
        name: "Незеритовый шлем",
        amount: 600,
        enchantments: { aqua_affinity: 1, mending: 1, blast_protection: 5, respiration: 4, unbreaking: 4, thorns: 3 } /* prettier-ignore */,
      },
    ],
  },
  {
    material: "NETHERITE_CHESTPLATE",
    name: "Незеритовый нагрудник",
    slots: [11, 12, 13, 14, 15, 21, 22, 23],
    save: "shops_netherite_chestplate.yml",
    title: "Незеритовые нагрудник",
    command: "deluxe_menu_shops_netherite_chestplates",
    list: [],
  },
  {
    material: "NETHERITE_LEGGINGS",
    name: "Незеритовые поножи",
    slots: [11, 12, 13, 14, 15, 21, 22, 23],
    save: "shops_netherite_leggings.yml",
    title: "Незеритовые поножи",
    command: "deluxe_menu_shops_netherite_leggings",
    list: [],
  },
  {
    material: "NETHERITE_BOOTS",
    name: "Незеритовые ботинки",
    slots: [11, 12, 13, 14, 15, 21, 22, 23],
    save: "shops_netherite_boots.yml",
    title: "Незеритовые ботинки",
    command: "deluxe_menu_shops_netherite_boots",
    list: [],
  },
];
