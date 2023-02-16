const YAML = require('yaml');
const fs = require('fs-extra');
let { effect_slot_minecraft, effect_base, idMap, somethingIsInterfering } = require('./Effects.js');
let template = require('./effects_sample.json');

const itemKeys = Object.keys(effect_base);
let i = 0;

var step = 1;

const res = itemKeys.reduce((acc, curr, index) => {
    const slot = effect_slot_minecraft[i];
    const idMapList = idMap[i];
    const itemEffects = effect_base[curr];
    
    acc[`id_${idMapList}_switched_off_slot_${slot}`] = {
        material: itemEffects.display_material,
        slot: slot,
        priority: 200,
        update: true,
        hide_attributes: true,
        display_name: `&f${itemEffects.name_style} [&bfalse&f/true]`,
        lore: [
            " ",
            ...itemEffects.lore.map(x => "&b * &7" + x),
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

    acc[`id_${idMapList}_switched_on_slot_${slot}`] = {
        material: itemEffects.display_material,
        slot: slot,
        priority: 0,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: `&f${itemEffects.name_style} [false/&btrue&f]`,
        lore: [
            " ",
            ...itemEffects.lore.map(x => "&b * &7" + x),
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

    acc[`id_${idMapList}_something_is_interfering_${step++}_slot_${slot}`] = {
        material: somethingIsInterfering,
        slot: slot,
        priority: 1, /* Внимание !!! */ 
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: "&fВключены другие частицы",
        view_requirement: {
            requirements: {
                permission_check:{
                    type: "has permission",
                    permission: `particles.custom.player.effects.${itemEffects.active_1}.style.server.gmgame`
                }
            }
        }
    };

    acc[`id_${idMapList}_something_is_interfering_${step++}_slot_${slot}`] = {
        material: somethingIsInterfering,
        slot: slot,
        priority: 2,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: "&fВключены другие частицы",
        view_requirement: {
            requirements: {
                permission_check:{
                    type: "has permission",
                    permission: `particles.custom.player.effects.${itemEffects.active_2}.style.server.gmgame`
                }
            }
        }
    };

    acc[`id_${idMapList}_something_is_interfering_${step++}_slot_${slot}`] = {
        material: somethingIsInterfering,
        slot: slot,
        priority: 3,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: "&fВключены другие частицы",
        view_requirement: {
            requirements: {
                permission_check:{
                    type: "has permission",
                    permission: `particles.custom.player.effects.${itemEffects.active_3}.style.server.gmgame`
                }
            }
        }
    };
    
    acc[`id_${idMapList}_something_is_interfering_${step++}_slot_${slot}`] = {
        material: somethingIsInterfering,
        slot: slot,
        priority: 4,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: "&fВключены другие частицы",
        view_requirement: {
            requirements: {
                permission_check:{
                    type: "has permission",
                    permission: `particles.custom.player.effects.${itemEffects.active_4}.style.server.gmgame`
                }
            }
        }
    };

    acc[`id_${idMapList}_something_is_interfering_${step++}_slot_${slot}`] = {
        material: somethingIsInterfering,
        slot: slot,
        priority: 5,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: "&fВключены другие частицы",
        view_requirement: {
            requirements: {
                permission_check:{
                    type: "has permission",
                    permission: `particles.custom.player.effects.${itemEffects.active_5}.style.server.gmgame`
                }
            }
        }
    };

    acc[`id_${idMapList}_something_is_interfering_${step++}_slot_${slot}`] = {
        material: somethingIsInterfering,
        slot: slot,
        priority: 6,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: "&fВключены другие частицы",
        view_requirement: {
            requirements: {
                permission_check:{
                    type: "has permission",
                    permission: `particles.custom.player.effects.${itemEffects.active_6}.style.server.gmgame`
                }
            }
        }
    };

    acc[`id_${idMapList}_something_is_interfering_${step++}_slot_${slot}`] = {
        material: somethingIsInterfering,
        slot: slot,
        priority: 7,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: "&fВключены другие частицы",
        view_requirement: {
            requirements: {
                permission_check:{
                    type: "has permission",
                    permission: `particles.custom.player.effects.${itemEffects.active_7}.style.server.gmgame`
                }
            }
        }
    };

    acc[`id_${idMapList}_something_is_interfering_${step++}_slot_${slot}`] = {
        material: somethingIsInterfering,
        slot: slot,
        priority: 8,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: "&fВключены другие частицы",
        view_requirement: {
            requirements: {
                permission_check:{
                    type: "has permission",
                    permission: `particles.custom.player.effects.${itemEffects.active_8}.style.server.gmgame`
                }
            }
        }
    };

    acc[`id_${idMapList}_something_is_interfering_${step++}_slot_${slot}`] = {
        material: somethingIsInterfering,
        slot: slot,
        priority: 9,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: "&fВключены другие частицы",
        view_requirement: {
            requirements: {
                permission_check:{
                    type: "has permission",
                    permission: `particles.custom.player.effects.${itemEffects.active_9}.style.server.gmgame`
                }
            }
        }
    };

    acc[`id_${idMapList}_something_is_interfering_${step++}_slot_${slot}`] = {
        material: somethingIsInterfering,
        slot: slot,
        priority: 10,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: "&fВключены другие частицы",
        view_requirement: {
            requirements: {
                permission_check:{
                    type: "has permission",
                    permission: `particles.custom.player.effects.${itemEffects.active_10}.style.server.gmgame`
                }
            }
        }
    };

    acc[`id_${idMapList}_something_is_interfering_${step++}_slot_${slot}`] = {
        material: somethingIsInterfering,
        slot: slot,
        priority: 11,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: "&fВключены другие частицы",
        view_requirement: {
            requirements: {
                permission_check:{
                    type: "has permission",
                    permission: `particles.custom.player.effects.${itemEffects.active_11}.style.server.gmgame`
                }
            }
        }
    };

    acc[`id_${idMapList}_something_is_interfering_${step++}_slot_${slot}`] = {
        material: somethingIsInterfering,
        slot: slot,
        priority: 12,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: "&fВключены другие частицы",
        view_requirement: {
            requirements: {
                permission_check:{
                    type: "has permission",
                    permission: `particles.custom.player.effects.${itemEffects.active_12}.style.server.gmgame`
                }
            }
        }
    };

    acc[`id_${idMapList}_something_is_interfering_${step++}_slot_${slot}`] = {
        material: somethingIsInterfering,
        slot: slot,
        priority: 13,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: "&fВключены другие частицы",
        view_requirement: {
            requirements: {
                permission_check:{
                    type: "has permission",
                    permission: `particles.custom.player.effects.${itemEffects.active_13}.style.server.gmgame`
                }
            }
        }
    };

    acc[`id_${idMapList}_something_is_interfering_${step++}_slot_${slot}`] = {
        material: somethingIsInterfering,
        slot: slot,
        priority: 14,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: "&fВключены другие частицы",
        view_requirement: {
            requirements: {
                permission_check:{
                    type: "has permission",
                    permission: `particles.custom.player.effects.${itemEffects.active_14}.style.server.gmgame`
                }
            }
        }
    };

    i++; 
    step = 1;

    return acc;
}, {})

template.items = { ...template.items, ...res }

fs.writeFileSync('./server_drop_files/player_effects.yml', YAML.stringify(template));