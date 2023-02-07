const YAML = require('yaml');
const fs = require('fs-extra');
let { base_food_2, fixed_slot_minecraft } = require('../Kerubifi_base.js');
let template = require('./gmgame_food_sample_page_2.json');

const itemKeys = Object.keys(base_food_2);
let i = 0;

const res = itemKeys.reduce((acc, curr, index) => {
    const slot = fixed_slot_minecraft[i];
    const itemFoodName = base_food_2[curr];

    acc[`Unique_name_${slot}`] = {
        material: itemFoodName.main,
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        display_name: `&b${itemFoodName.material_name}`,
        lore: [
            " ",
            "&b * &7Вариативность названий:",
            ...itemFoodName.variability_name.map(x => "   &b- &7" + x),
            " ",
            `&r&4[ ! ] &7Для получения скина, Вам нужно переименовать &a${itemFoodName.info_item}`,
            "&r&4[ ! ] &7на соответствующее название из списка"
        ]
    }
    i++;

    return acc;
}, {})

template.items = { ...template.items, ...res }

fs.writeFileSync('./server_drop_files/resoursepack/resource_pack_food_page_2.yml', YAML.stringify(template));
