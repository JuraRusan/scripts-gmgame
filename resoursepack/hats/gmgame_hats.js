const YAML = require('yaml');
const fs = require('fs-extra');
let { hats_base, hats_slot } = require('./base_hats.js');
let template = require('./gmgame_hats_sample.json');

let result = {};

const itemKeys = Object.keys(hats_base);
let i = 0;

itemKeys.forEach(element => {
    const slot = hats_slot[i];
    i += 1;

    const itemHatsName = hats_base[element];
    const fixColorElement = "   &b- &7";

    result[`Unique_name_${slot}`] = {
        material: itemHatsName.main,
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        display_name: `&b${itemHatsName.material_name}`,
        lore: [
            " ",
            `&b * &7Вариативность названий:`,
            `${itemHatsName.variability_name.map(x => fixColorElement + x)}`,
            " ",
            `&r&4[ ! ] &7Для получения скина, Вам нужно переименовать &a${itemHatsName.info_item}`,
            "&r&4[ ! ] &7на соответствующее название из списка"
        ]
    }
});


template.items = { ...template.items, ...result }

fs.writeFileSync('./resource_pack_hats.yml', YAML.stringify(template));
