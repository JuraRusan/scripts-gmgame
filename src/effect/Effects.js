const effect_slot_minecraft = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
const idMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204];
const idPage1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
const idPage2 = [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72];
const idPage3 = [73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108];
const idPage4 = [109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144];
const idPage5 = [145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179];
const idPage6 = [180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204];
const somethingIsInterfering = "SCULK";
const visibleMaterial = "SCULK";
const invisibleMaterial = "SCULK_SHRIEKER";

const effect_base_page1 = {
 1: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "ambient_entity_effect", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 2: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "bubble_pop", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 3: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "campfire_cosy_smoke", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 4: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "campfire_signal_smoke", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 5: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "cloud", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 6: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "composter", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 7: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "crimson_spore", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 8: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "damage_indicator", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 9: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "dolphin", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 10: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "dragon_breath", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 11: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "dripping_dripstone_lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 12: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "dripping_dripstone_water", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 13: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "dripping_honey", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 14: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "dripping_lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 15: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "dripping_obsidian_tear", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 16: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "dripping_water", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 17: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "dust", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 18: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "dust_color_transition", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 19: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "electric_spark", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 20: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "enchant", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 21: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "enchanted_hit", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 22: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "end_rod", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 23: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "entity_effect", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 24: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "falling_dripstone_lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 25: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "falling_dripstone_water", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 26: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "falling_dust", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 27: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "falling_honey", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 28: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "falling_lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 29: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "falling_nectar", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 30: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "falling_obsidian_tear", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 31: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "falling_spore_blossom", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 32: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "falling_water", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 33: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "firework", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 34: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "fishing", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 35: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "flame", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 36: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "glow", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] }
};

const effect_base_page2 = {
 37: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "glow_squid_ink", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 38: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "happy_villager", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 39: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "heart", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 40: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "instant_effect", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 41: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "item", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 42: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "item_slime", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 43: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "item_snowball", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 44: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "large_smoke", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 45: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 46: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "mycelium", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 47: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "nautilus", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 48: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "note", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 49: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "poof", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 50: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "portal", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 51: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "rain", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 52: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "reverse_portal", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 53: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "scrape", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 54: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "sculk_charge", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 55: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "sculk_charge_pop", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 56: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "sculk_soul", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 57: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "small_flame", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 58: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "smoke", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 59: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "sneeze", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 60: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "snowflake", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 61: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "soul", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 62: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "soul_fire_flame", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 63: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "spell", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 64: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "spit", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 65: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "splash", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 66: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "spore_blossom_air", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 67: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "totem_of_undying", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 68: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "warped_spore", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 69: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "wax_off", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 70: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "wax_on", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 71: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "white_ash", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 72: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "arrows", to: "стрелы", plugin_eff: "witch", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] }
};

const effect_base_page3 = {
 73: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "ambient_entity_effect", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 74: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "bubble_pop", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 75: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "cloud", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 76: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "composter", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 77: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "crimson_spore", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 78: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "damage_indicator", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 79: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "dolphin", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 80: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "dragon_breath", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 81: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "dripping_dripstone_lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 82: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "dripping_dripstone_water", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 83: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "dripping_honey", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 84: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "dripping_lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 85: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "dripping_obsidian_tear", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 86: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "dripping_water", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 87: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "dust", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 88: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "dust_color_transition", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 89: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "electric_spark", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 90: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "enchant", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 91: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "enchanted_hit", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 92: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "end_rod", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 93: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "entity_effect", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 94: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "falling_dripstone_lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 95: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "falling_dripstone_water", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 96: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "falling_honey", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 97: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "falling_lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 98: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "falling_nectar", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 99: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "falling_obsidian_tear", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 100: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "falling_spore_blossom", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 101: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "falling_water", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 102: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "firework", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 103: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "fishing", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 104: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "flame", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 105: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "glow", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 106: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "glow_squid_ink", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 107: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "happy_villager", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 108: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "heart", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] }
};

const effect_base_page4 = {
 109: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "instant_effect", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 110: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "item", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 111: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "item_slime", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 112: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "item_snowball", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 113: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "large_smoke", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 114: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 115: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "mycelium", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 116: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "nautilus", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 117: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "note", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 118: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "poof", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 119: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "rain", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 120: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "reverse_portal", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 121: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "scrape", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 122: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "sculk_charge", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 123: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "sculk_charge_pop", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 124: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "sculk_soul", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 125: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "small_flame", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 126: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "smoke", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 127: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "sneeze", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 128: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "snowflake", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 129: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "soul", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 130: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "soul_fire_flame", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 131: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "spell", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 132: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "spit", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 133: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "splash", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 134: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "totem_of_undying", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 135: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "warped_spore", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 136: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "wax_off", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 137: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "wax_on", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 138: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "white_ash", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 139: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "swords", to: "мечь", plugin_eff: "witch", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 140: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "ambient_entity_effect", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 141: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "bubble_pop", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 142: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "cloud", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 143: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "composter", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 144: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "crimson_spore", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] }
};

const effect_base_page5 = {
 145: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "damage_indicator", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 146: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "dolphin", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 147: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "dragon_breath", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 148: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "dripping_dripstone_lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 149: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "dripping_dripstone_water", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 150: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "dripping_honey", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 151: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "dripping_lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 152: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "dripping_obsidian_tear", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 153: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "dripping_water", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 154: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "dust", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 155: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "dust_color_transition", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 156: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "electric_spark", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 157: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "enchant", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 158: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "enchanted_hit", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 159: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "end_rod", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 160: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "entity_effect", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 161: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "falling_dripstone_lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 162: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "falling_dripstone_water", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 163: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "falling_honey", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 164: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "falling_lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 165: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "falling_nectar", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 166: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "falling_obsidian_tear", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 167: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "falling_spore_blossom", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 168: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "falling_water", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 169: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "firework", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 170: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "fishing", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 171: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "flame", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 172: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "glow", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 173: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "glow_squid_ink", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 174: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "happy_villager", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 175: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "heart", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 176: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "instant_effect", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 177: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "item", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 178: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "item_slime", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 179: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "item_snowball", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] }
};

const effect_base_page6 = {
 180: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "large_smoke", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 181: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "lava", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 181: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "mycelium", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 182: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "nautilus", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 183: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "note", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 184: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "poof", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 185: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "rain", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 186: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "reverse_portal", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 187: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "scrape", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 188: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "sculk_charge", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 189: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "sculk_charge_pop", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 190: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "sculk_soul", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 191: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "small_flame", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 192: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "smoke", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 193: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "sneeze", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 194: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "snowflake", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 195: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "soul", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 196: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "soul_fire_flame", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 197: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "spell", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 198: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "spit", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 199: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "splash", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 200: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "totem_of_undying", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 201: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "warped_spore", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 202: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "wax_off", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 202: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "wax_on", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 203: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "white_ash", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] },
 204: { display_material: "SCULK", name_style: "Название частиц", plugin_style: "move", to: "мечь", plugin_eff: "witch", lore: ["Ухххх  описание строка 1", "Ухххх  описание строка 2"] }
};

module.exports.effect_slot_minecraft = effect_slot_minecraft;
module.exports.idMap = idMap;
module.exports.idPage1 = idPage1;
module.exports.idPage2 = idPage2;
module.exports.idPage3 = idPage3;
module.exports.idPage4 = idPage4;
module.exports.idPage5 = idPage5;
module.exports.idPage6 = idPage6;
module.exports.effect_base_page1 = effect_base_page1;
module.exports.effect_base_page2 = effect_base_page2;
module.exports.effect_base_page3 = effect_base_page3;
module.exports.effect_base_page4 = effect_base_page4;
module.exports.effect_base_page5 = effect_base_page5;
module.exports.effect_base_page6 = effect_base_page6;
module.exports.somethingIsInterfering = somethingIsInterfering;
module.exports.visibleMaterial = visibleMaterial;
module.exports.invisibleMaterial = invisibleMaterial;
