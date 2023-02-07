const YAML = require('yaml');
const fs = require('fs-extra');
let { elytra_base, fixed_slot_minecraft } = require('../Kerubifi_base.js');
let template = require('./gmgame_elytra_sample.json');

const itemKeys = Object.keys(elytra_base);
let i = 0;


const res = itemKeys.reduce((acc, curr, index) => {
    const slot = fixed_slot_minecraft[i];
    const itemElytraName = elytra_base[curr];

    acc[`Unique_name_${slot}`] = {
        material: itemElytraName.main,
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        display_name: `&b${itemElytraName.material_name}`,
        lore: [
            " ",
            "&b * &7Вариативность названий:",
            ...itemElytraName.variability_name.map(x => "   &b- &7" + x),
            " ",
            `&r&4[ ! ] &7Для получения скина, Вам нужно переименовать &a${itemElytraName.info_item}`,
            "&r&4[ ! ] &7на соответствующее название из списка"
        ]
    }
    i++;

    return acc;
}, {})

template.items = { ...template.items, ...res }

fs.writeFileSync('./resoursepack/server_drop_files/resource_pack_elytra.yml', YAML.stringify(template));
