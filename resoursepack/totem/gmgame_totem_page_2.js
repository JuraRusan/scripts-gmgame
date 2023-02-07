const YAML = require('yaml');
const fs = require('fs-extra');
let { totem_base_2, fixed_slot_minecraft } = require('../Kerubifi_base.js');
let template = require('./gmgame_totem_sample_page_2.json');

const itemKeys = Object.keys(totem_base_2);
let i = 0;

const res = itemKeys.reduce((acc, curr, index) => {
    const slot = fixed_slot_minecraft[i];
    const itemTotemName = totem_base_2[curr];

    acc[`Unique_name_${slot}`] = {
        material: itemTotemName.main,
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        display_name: `&b${itemTotemName.material_name}`,
        lore: [
            " ",
            "&b * &7Вариативность названий:",
            ...itemTotemName.variability_name.map(x => "   &b- &7" + x),
            " ",
            `&r&4[ ! ] &7Для получения скина, Вам нужно переименовать &a${itemTotemName.info_item}`,
            "&r&4[ ! ] &7на соответствующее название из списка"
        ]
    }
    i++;

    return acc;
}, {})

template.items = { ...template.items, ...res }

fs.writeFileSync('./resoursepack/server_drop_files/resource_pack_totem_page_2.yml', YAML.stringify(template));
