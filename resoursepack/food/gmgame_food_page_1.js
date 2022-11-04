const YAML = require('yaml');
const fs = require('fs-extra');
let { base_food, food_slot } = require('./base_food_page_1.js');
let template = require('./gmgame_food_sample_page_1.json');

let result = {};

const itemKeys = Object.keys(base_food);
let i = 0;

itemKeys.forEach(element => {
    const slot = food_slot[i];
    i += 1;

    const itemFoodName = base_food[element];
    const fixColorElement = "   &b- &7";

    result[`Unique_name_${slot}`] = {
        material: itemFoodName.main,
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        display_name: `&b${itemFoodName.material_name}`,
        lore: [
            " ",
            `&b * &7Вариативность названий:`,
            `${itemFoodName.variability_name.map(x => fixColorElement + x)}`,
            " ",
            `&r&4[ ! ] &7Для получения скина, Вам нужно переименовать &a${itemFoodName.info_item}`,
            "&r&4[ ! ] &7на соответствующее название из списка"
        ]
    }
});


template.items = { ...template.items, ...result }

fs.writeFileSync('./resource_pack_food_page_1.yml', YAML.stringify(template));
