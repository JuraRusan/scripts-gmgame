const YAML = require('yaml');
const fs = require('fs-extra');
let { totem_base, totem_slot } = require('./base_totem.js');
let template = require('./gmgame_totem_sample.json');

let result = {};

const itemKeys = Object.keys(totem_base);
let i = 0;

itemKeys.forEach(element => {
    const slot = totem_slot[i];
    i += 1;

    const itemTotemName = totem_base[element];
    const fixColorElement = "   &b- &7";

    result[`Unique_name_${slot}`] = {
        material: itemTotemName.main,
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        display_name: `&b${itemTotemName.material_name}`,
        lore: [
            " ",
            `&b * &7Вариативность названий:`,
            `${itemTotemName.variability_name.map(x => fixColorElement + x)}`,
            " ",
            `&r&4[ ! ] &7Для получения скина, Вам нужно переименовать &a${itemTotemName.info_item}`,
            "&r&4[ ! ] &7на соответствующее название из списка"
        ]
    }
});


template.items = { ...template.items, ...result }

fs.writeFileSync('./resource_pack_totem.yml', YAML.stringify(template));
