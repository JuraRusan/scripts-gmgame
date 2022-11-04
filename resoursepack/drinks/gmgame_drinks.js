const YAML = require('yaml');
const fs = require('fs-extra');
let { drinks_base, drinks_slot } = require('./base_drinks.js');
let template = require('./gmgame_drinks_sample.json');

let result = {};

const itemKeys = Object.keys(drinks_base);
let i = 0;

itemKeys.forEach(element => {
    const slot = drinks_slot[i];
    i += 1;

    const itemDrinksName = drinks_base[element];
    const fixColorElement = "   &b- &7";

    result[`Unique_name_${slot}`] = {
        material: itemDrinksName.main,
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        display_name: `&b${itemDrinksName.material_name}`,
        lore: [
            " ",
            `&b * &7Вариативность названий:`,
            `${itemDrinksName.variability_name.map(x => fixColorElement + x)}`,
            " ",
            `&r&4[ ! ] &7Для получения скина, Вам нужно переименовать &a${itemDrinksName.info_item}`,
            "&r&4[ ! ] &7на соответствующее название из списка"
        ]
    }
});


template.items = { ...template.items, ...result }

fs.writeFileSync('./resource_pack_drinks.yml', YAML.stringify(template));
