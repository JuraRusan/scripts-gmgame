const YAML = require('yaml');
const fs = require('fs-extra');
let { effect_slot_minecraft, effect_base_page2, idPage2, idMap, somethingIsInterfering, visibleMaterial, invisibleMaterial } = require('./Effects.js');
let template = require('./effects_sample_page2.json');

const itemKeys = Object.keys(effect_base_page2);
let i = 0;

const res = itemKeys.reduce((acc, curr, index) => {
    const slot = effect_slot_minecraft[i];
    const idMapList = idPage2[i];
    const itemEffects = effect_base_page2[curr];
    
    acc[`id_particles_${idMapList}_switched_off_slot_${slot}`] = {
        material: visibleMaterial,
        slot: slot,
        priority: 200,
        update: true,
        hide_attributes: true,
        display_name: `&fСтиль #${idMapList} [false/&btrue&f]`,
        lore: [
            " ",
            ...itemEffects.lore.map(x => "&b * &7" + x),
            " ",
            `&b * &7Применяется к: &a${itemEffects.to}`,
            `&b * &7Майнкрафт айди: &a${itemEffects.plugin_eff}`,
            " ",
            "&r&4[ ! ] &7Щелкните левой кнопкой мыши, чтобы выбрать",
        ],
        view_requirement: {
            requirements: {
                permission_check: {
                    type: "!has permission",
                    permission: `particles.custom.player.effects.${idMapList}.style.server.gmgame`,
                }
            }
        },
        left_click_commands: [
            `[console] lp user %player_name% permission set particles.custom.player.effects.${idMapList}.style.server.gmgame`,
            `[console] ppo %player_name% add ${itemEffects.plugin_eff} ${itemEffects.plugin_style}`,
            "[message]&bЕффекты &9| &7Вы успешно включили себе частицы!",
            "[sound] ENTITY_EXPERIENCE_ORB_PICKUP",
            "[refresh]",
        ],
    }

    acc[`id_particles_${idMapList}_switched_on_slot_${slot}`] = {
        material: invisibleMaterial,
        slot: slot,
        priority: 0,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: `&fСтиль #${idMapList} [false/&btrue&f]`,
        lore: [
            " ",
            ...itemEffects.lore.map(x => "&b * &7" + x),
            " ",
            `&b * &7Применяется к: &a${itemEffects.to}`,
            `&b * &7Майнкрафт айди: &a${itemEffects.plugin_eff}`,
            " ",
            "&r&4[ ! ] &7Щелкните левой кнопкой мыши, чтобы выбрать",
        ],
        view_requirement: {
            requirements: {
                permission_check: {
                    type: "has permission",
                    permission: `particles.custom.player.effects.${idMapList}.style.server.gmgame`,
                }
            }
        },
        left_click_commands: [
            `[console] lp user %player_name% permission unset particles.custom.player.effects.${idMapList}.style.server.gmgame`,
            `[console] ppo %player_name% remove 1`,
            "[message]&bЕффекты &9| &7Вы успешно выключили себе частицы!",
            "[sound] BLOCK_NOTE_BLOCK_CHIME",
            "[refresh]",
        ],
    }

    for (step = 1; step < idMap.length + 1; step++) {

        acc[`id_particles_${idMapList}_something_is_interfering_${step}_slot_${slot}`] = {
            material: somethingIsInterfering,
            slot: slot,
            priority: step,  
            update: true,
            hide_attributes: true,
            hide_enchantments: true,
            enchantments: ['MENDING;1'],
            display_name: "&fВключены другие частицы",
            view_requirement: {
                requirements: {
                    permission_check:{
                        type: "has permission",
                        permission: `particles.custom.player.effects.${step}.style.server.gmgame`
                    }
                }
            }
        };
    };

    i++; 

    return acc;
}, {})

template.items = { ...template.items, ...res }

fs.writeFileSync('./server_drop_files/player_effect/player_effect_page2.yml', YAML.stringify(template));