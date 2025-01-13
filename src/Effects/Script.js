import YAML from "yaml";
import fs from "fs-extra";

import template from "./effect_arrow_sample.json" assert { type: "json" };

import { effect_slot_minecraft, effects, idMap, somethingIsInterfering } from "./static.js";

const itemKeys = Object.keys(effects);
let i = 0;

const res = itemKeys.reduce((acc, curr, index) => {
  const slot = effect_slot_minecraft[i];
  const idMapList = idMap[i];
  const itemEffects = effects[curr];

  // const requirements = {};
  //
  // for (let step = 1; step <= idMap.length; step++) {
  //   requirements[`permission_check_${step}`] = {
  //     type: "has permission",
  //     permission: `gmgame.effect.arrow.${step}.server.gmgame`,
  //   };
  // }
  //
  // delete requirements[`permission_check_${idMapList}`];
  //
  // acc[`id_particles_${idMapList}_something_is_interfering_slot_${slot}`] = {
  //   material: somethingIsInterfering,
  //   slot: slot,
  //   priority: 100,
  //   update: true,
  //   item_flags: ["HIDE_ATTRIBUTES", "HIDE_ENCHANTS", "HIDE_ADDITIONAL_TOOLTIP"],
  //   enchantments: ["MENDING;1"],
  //   display_name: "&#caeaf5Включены другие частицы",
  //   view_requirement: {
  //     minimum_requirements: 1,
  //     stop_at_success: true,
  //     requirements: requirements,
  //   },
  // };

  acc[`id_particles_${idMapList}_switched_off_slot_${slot}`] = {
    material: itemEffects.display_material,
    slot: slot,
    priority: 200,
    update: true,
    item_flags: ["HIDE_ATTRIBUTES", "HIDE_ENCHANTS", "HIDE_ADDITIONAL_TOOLTIP"],
    display_name: `&#caeaf5Стиль &#ccb800#${idMapList} &#caeaf5[&#ccb800false&#caeaf5/true]`,
    lore: [
      " ",
      `&#ccb800 * &#caeaf5Применяется к: &aстрелы`,
      `&#ccb800 * &#caeaf5Майнкрафт айди: &a${itemEffects.plugin_eff}`,
      " ",
      "&#f42f31[ ! ] &#caeaf5Щелкните левой кнопкой мыши, чтобы выбрать",
    ],
    view_requirement: {
      requirements: {
        permission_check: {
          type: "!has permission",
          permission: `gmgame.effect.arrow.${idMapList}.server.gmgame`,
        },
      },
    },
    left_click_commands: [
      `[console] lp user %player_name% permission set gmgame.effect.arrow.${idMapList}.server.gmgame`,
      `[console] ppo %player_name% add ${itemEffects.plugin_eff} arrows`,
      `[message] &#caeaf5 Вы успешно включили себе частицы! (Стиль: &#e6a500${itemEffects.plugin_eff}&#caeaf5)`,
      "[sound] ENTITY_EXPERIENCE_ORB_PICKUP",
      "[refresh]",
    ],
  };

  acc[`id_particles_${idMapList}_switched_on_slot_${slot}`] = {
    material: itemEffects.display_material,
    slot: slot,
    priority: 0,
    update: true,
    item_flags: ["HIDE_ATTRIBUTES", "HIDE_ENCHANTS", "HIDE_ADDITIONAL_TOOLTIP"],
    enchantments: ["MENDING;1"],
    display_name: `&#caeaf5Стиль &#ccb800#${idMapList} &#caeaf5[false/&#ccb800true&#caeaf5]`,
    lore: [
      " ",
      `&#ccb800 * &#caeaf5Применяется к: &aстрелы`,
      `&#ccb800 * &#caeaf5Майнкрафт айди: &a${itemEffects.plugin_eff}`,
      " ",
      "&#f42f31[ ! ] &#caeaf5Щелкните левой кнопкой мыши, чтобы выбрать",
    ],
    view_requirement: {
      requirements: {
        permission_check: {
          type: "has permission",
          permission: `gmgame.effect.arrow.${idMapList}.server.gmgame`,
        },
      },
    },
    left_click_commands: [
      `[console] lp user %player_name% permission unset gmgame.effect.arrow.${idMapList}.server.gmgame`,
      `[console] ppo %player_name% remove arrows`,
      `[message] &#caeaf5 Вы успешно выключили себе частицы! (Стиль: &#e6a500${itemEffects.plugin_eff}&#caeaf5)`,
      "[sound] BLOCK_NOTE_BLOCK_CHIME",
      "[refresh]",
    ],
  };

  for (let step = 1; step < idMap.length + 1; step++) {
    acc[`id_particles_${idMapList}_something_is_interfering_${step}_slot_${slot}`] = {
      material: somethingIsInterfering,
      slot: slot,
      priority: step,
      update: true,
      item_flags: ["HIDE_ATTRIBUTES", "HIDE_ENCHANTS", "HIDE_ADDITIONAL_TOOLTIP"],
      enchantments: ["MENDING;1"],
      display_name: "&#caeaf5Включены другие частицы",
      view_requirement: {
        requirements: {
          permission_check: {
            type: "has permission",
            permission: `gmgame.effect.arrow.${step}.server.gmgame`,
          },
        },
      },
    };
  }

  i++;

  return acc;
}, {});

template.items = { ...template.items, ...res };

fs.writeFileSync("./server/Effects/arrow_effect.yml", YAML.stringify(template, { lineWidth: 0 }));
console.log("\x1b[32m" + "Create file arrow_effect.yml" + "\x1b[0m");
