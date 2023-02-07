const YAML = require('yaml');
const fs = require('fs-extra');
let { fixed_slot_minecraft, turtle_helmet_base } = require('../Shops.js');
let template = require('./shops_turtle_helmets_sample.json');

const itemKeys = Object.keys(turtle_helmet_base);
let i = 0;

const res = itemKeys.reduce((acc, curr, index) => {
    const slot = fixed_slot_minecraft[i];
    const itemShopsName = turtle_helmet_base[curr];

    const amountFormat = Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(itemShopsName.amount);

    acc[`Unique_name_${slot}`] = {
        material: itemShopsName.material,
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        hide_enchantments: true,
        enchantments: ['MENDING;1'],
        display_name: `&b${itemShopsName.name}`,
        lore: [
            " ",
            `&b * &7Игрок покупает - цена за 1 единицу: &a${amountFormat}$`,
            " ",
            "&b * &7Зачарования:",
            ...itemShopsName.enchantments.map(x => "   &b- &7" + x),
            " ",
            "&b * &7Ваш баланс: &a%xconomy_balance_formatted%",
            " ",
            "&r&4[ ! ] &7Щелкните левой кнопкой мыши, чтобы купить",
        ],
        left_click_requirement: {
            requirements: {
                balance_check: {
                    type: "has money",
                    amount: +amountFormat,
                    deny_commands: ["[message] &bМагазин &9| &7У вас недостаточно средств для покупки этого предмета!"]
                },
                item_check_slot: {
                    type: "has item",
                    material: "AIR",
                    amount: 1,
                    deny_commands: ["[message] &bМагазин &9| &7Нет необходимого места для покупки этого предмета"]
                }
            }
        },
        left_click_commands: [
            `[takemoney] ${amountFormat}`,
            "[refresh]",
            "[message] &bМагазин &9| &7Вы успешно приобрели этот товар!",
            `[console] minecraft:give %player_name% minecraft:${itemShopsName.console_name} 1`,
            `[console] staffmsg &bМагазин &9| &7Игрок %player_name% успешно приобрел товар &a${itemShopsName.console_name}&7 в количестве 1 за &a${amountFormat}$`
        ],
    }
    i++;

    return acc;
}, {})

template.items = { ...template.items, ...res }

fs.writeFileSync('./src/spawn_shops/server_drop_files/shops_turtle_helmets.yml', YAML.stringify(template));