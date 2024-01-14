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
        display_name: `&#caeaf5${itemShopsName.name}`,
        lore: [
            " ",
            `&#ccb800 * &#caeaf5Игрок покупает - цена за 1 единицу: &#55ff55${amountFormat}$`,
            " ",
            "&#ccb800 * &#caeaf5Зачарования:",
            ...itemShopsName.enchantments.map(x => "   &#ccb800- &#caeaf5" + x),
            " ",
            "&#ccb800 * &#caeaf5Ваш баланс: &#55ff55%xconomy_balance_formatted%",
            " ",
            "&r&4[ ! ] &#caeaf5Щелкните левой кнопкой мыши, чтобы купить",
        ],
        left_click_requirement: {
            requirements: {
                balance_check: {
                    type: "has money",
                    amount: +amountFormat,
                    deny_commands: ["[message] &#caeaf5 У Вас недостаточно средств для покупки этого предмета!"]
                },
                item_check_slot: {
                    type: "has item",
                    material: "AIR",
                    amount: 1,
                    deny_commands: ["[message] &#caeaf5 Нет необходимого места для покупки этого предмета!"]
                }
            }
        },
        left_click_commands: [
            `[takemoney] ${amountFormat}`,
            "[refresh]",
            "[message] &#caeaf5 Вы успешно приобрели этот товар!",
            `[console] minecraft:give %player_name% minecraft:${itemShopsName.console_name} 1`,
            `[console] staffmsg {#caeaf5} Игрок %player_name% успешно приобрел товар {#55ff55}${itemShopsName.console_name}{#caeaf5} с зачарованием{#55ff55}${(itemShopsName.enchantments.map(x => " " + x))}{#caeaf5} в количестве 1 за {#55ff55}${amountFormat}$`
        ],
    }
    i++;

    return acc;
}, {})

template.items = { ...template.items, ...res }

fs.writeFileSync('./server_drop_files/spawn_shops/shops_turtle_helmets.yml', YAML.stringify(template));