const YAML = require('yaml');
const fs = require('fs-extra');
let { item, item_slot } = require('./base_totem.js');
let template = require('./gmgame_totems_sample.json');

let result = {};

const itemKeys = Object.keys(item);
let i = 0;

itemKeys.forEach(element => {
    const slot = item_slot[i];
    i += 1;

    const itemTotemName = item[element];

    result[`Unique_name_${slot}`] = {
        material: "TOTEM_OF_UNDYING",
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        display_name: `&b${itemTotemName.material_name}`,
        lore: [
            " ",
            `&b * &7Вариативность названий:`,
            `   &b- &7SoftPanda3`,
            `   &b- &7SoftPanda`,
            `   &b- &7Панда`,
            `   &b- &7Пандочка`,
            " ",
            "&r&4[ ! ] &7Для получения скина, Вам нужно переименовать предмет на",
            "&r&4[ ! ] &7соответствующее название из списка на наковальне"
        ]
    }
});


template.items = { ...template.items, ...result }

fs.writeFileSync('./gmgame_totems.yml', YAML.stringify(template));
