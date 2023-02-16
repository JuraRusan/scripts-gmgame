const effect_slot_minecraft = [10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 25];
const idMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const somethingIsInterfering = "HEART_OF_THE_SEA";

const effect_base = {
 1: { display_material: "OBSIDIAN", name_style: "Название частиц", plugin_style: "beam", plugin_eff: "heart", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2", "Ухххх  описание строка 3"], active_1: "2", active_2: "3", active_3: "4", active_4: "5" },
 2: { display_material: "OBSIDIAN", name_style: "Название частиц", plugin_style: "batman", plugin_eff: "heart", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2", "Ухххх  описание строка 3"], active_1: "1", active_2: "3", active_3: "4", active_4: "5" },
 3: { display_material: "OBSIDIAN", name_style: "Название частиц", plugin_style: "companion", plugin_eff: "heart", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2", "Ухххх  описание строка 3"], active_1: "1", active_2: "2", active_3: "4", active_4: "5" },
 4: { display_material: "OBSIDIAN", name_style: "Название частиц", plugin_style: "cube", plugin_eff: "heart", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2", "Ухххх  описание строка 3"], active_1: "1", active_2: "2", active_3: "3", active_4: "5" },
 5: { display_material: "OBSIDIAN", name_style: "Название частиц", plugin_style: "halo", plugin_eff: "heart", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2", "Ухххх  описание строка 3"], active_1: "1", active_2: "2", active_3: "3", active_4: "4" },
};


module.exports.effect_slot_minecraft = effect_slot_minecraft;
module.exports.idMap = idMap;
module.exports.effect_base = effect_base;
module.exports.somethingIsInterfering = somethingIsInterfering;
