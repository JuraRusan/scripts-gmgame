const YAML = require('yaml');
const fs = require('fs-extra');
let { elytra_base, elytra_slot } = require('./base_elytra.js');
let template = require('./gmgame_elytra_sample.json');

let result = {};

const itemKeys = Object.keys(elytra_base);
let i = 0;

itemKeys.forEach(element => {
    const slot = elytra_slot[i];
    i += 1;

    const itemElytraName = elytra_base[element];
    const fixColorElement = "   &b- &7";

    result[`Unique_name_${slot}`] = {
        material: itemElytraName.main,
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        display_name: `&b${itemElytraName.material_name}`,
        lore: [
            " ",
            `&b * &7Вариативность названий:`,
            `${itemElytraName.variability_name.map(x => fixColorElement + x)}`,
            " ",
            `&r&4[ ! ] &7Для получения скина, Вам нужно переименовать &a${itemElytraName.info_item}`,
            "&r&4[ ! ] &7на соответствующее название из списка"
        ]
    }
});


template.items = { ...template.items, ...result }

fs.writeFileSync('./resource_pack_elytra.yml', YAML.stringify(template));
