const YAML = require('yaml');
const fs = require('fs-extra');
let { hats_base, fixed_slot_minecraft } = require('../Kerubifi_base.js');
let template = require('./gmgame_hats_sample.json');

const itemKeys = Object.keys(hats_base);
let i = 0;

const res = itemKeys.reduce((acc, curr, index) => {
    const slot = fixed_slot_minecraft[i];
    const itemHatsName = hats_base[curr];

    acc[`Unique_name_${slot}`] = {
        material: itemHatsName.main,
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        display_name: `&b${itemHatsName.material_name}`,
        lore: [
            " ",
            "&b * &7Вариативность названий:",
            ...itemHatsName.variability_name.map(x => "   &b- &7" + x),
            " ",
            `&r&4[ ! ] &7Для получения скина, Вам нужно переименовать &a${itemHatsName.info_item}`,
            "&r&4[ ! ] &7на соответствующее название из списка"
        ]
    }
    i++;

    return acc;
}, {})

template.items = { ...template.items, ...res }

fs.writeFileSync('./server_drop_files/resource_pack_hats.yml', YAML.stringify(template));
