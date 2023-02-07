const YAML = require('yaml');
const fs = require('fs-extra');
let { drinks_base, fixed_slot_minecraft } = require('../Kerubifi_base.js');
let template = require('./gmgame_drinks_sample.json');

const itemKeys = Object.keys(drinks_base);
let i = 0;

const res = itemKeys.reduce((acc, curr, index) => {
    const slot = fixed_slot_minecraft[i];
    const itemDrinksName = drinks_base[curr];

    acc[`Unique_name_${slot}`] = {
        material: itemDrinksName.main,
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        display_name: `&b${itemDrinksName.material_name}`,
        lore: [
            " ",
            "&b * &7Вариативность названий:",
            ...itemDrinksName.variability_name.map(x => "   &b- &7" + x),
            " ",
            `&r&4[ ! ] &7Для получения скина, Вам нужно переименовать &a${itemDrinksName.info_item}`,
            "&r&4[ ! ] &7на соответствующее название из списка"
        ]
    }
    i++;

    return acc;
}, {})

template.items = { ...template.items, ...res }

fs.writeFileSync('./resoursepack/server_drop_files/resource_pack_drinks.yml', YAML.stringify(template));
