const effect_slot_minecraft = [10, 11, 12, 13, 14, 15, 16, 20, 21, 22, 23, 24];
const idMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const somethingIsInterfering = "SCULK";
const visibleMaterial = "SCULK";
const invisibleMaterial = "SCULK_SHRIEKER";

const effect_base = {
 1: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "composter", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 2: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "enchanted_hit", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 3: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "enchant", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 4: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "scrape", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 5: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "totem_of_undying", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 6: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "soul_fire_flame", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 7: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "flame", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 8: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "glow", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 9: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "snowflake", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 10: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "witch", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 11: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "wax_off", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 12: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "wax_on", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
};

module.exports.effect_slot_minecraft = effect_slot_minecraft;
module.exports.idMap = idMap;
module.exports.effect_base = effect_base;
module.exports.somethingIsInterfering = somethingIsInterfering;
module.exports.visibleMaterial = visibleMaterial;
module.exports.invisibleMaterial = invisibleMaterial;