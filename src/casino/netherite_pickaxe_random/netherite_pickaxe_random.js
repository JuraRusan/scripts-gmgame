const YAML = require('yaml');
const fs = require('fs-extra');
let { fixed_slot_one, token_code, netherite_pickaxe_random_base } = require('../Casino.js');
let template = require('./netherite_pickaxe_random_sample.json');

const itemKeys = Object.keys(netherite_pickaxe_random_base);
let i = 0;

const res = itemKeys.reduce((acc, curr, index) => {
    const slot = fixed_slot_one[i];
    const itemShopsName = netherite_pickaxe_random_base[curr];

    const amountFormat = Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(itemShopsName.rate_price);

    acc[`Unique_name_${slot}`] = {
        material: itemShopsName.material,
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        display_name: `&b${itemShopsName.name}`,
        lore: [
            " ",
            `&b * &7Игрок покупает - цена ставки: &a${amountFormat}$`,
            `&b * &7Выигрыш может составить &a${itemShopsName.name}`,
            "&b * &7Шанс выигрыша &a10%",
            `&b * &7&mУникальный приз &r&a${itemShopsName.token_ru}`,
            " ",
            "&b * &7Зачарования:",
            ...itemShopsName.enchantments.map(x => "   &b- &7" + x),
            " ",
            "&b * &7Ваш баланс: &a%xconomy_balance_formatted%",
            " ",
            "&r&4[ ! ] &7Щелкните левой кнопкой мыши, чтобы выбрать"
        ],
        left_click_requirement: {
            requirements: {
                balance_check: {
                    type: "has money",
                    amount: +amountFormat,
                    deny_commands: ["[message] &bКазино &9| &7У Вас недостаточно средств для создания ставки!"]
                },
                item_check_slot: {
                    type: "has item",
                    material: "AIR",
                    amount: 1,
                    deny_commands: ["[message] &bКазино &9| &7Нет необходимого места в инвентаре!"]
                }
            }
        },
        left_click_commands: [
            `[takemoney] ${amountFormat}`,
            "[refresh]",
            "[message] &bКазино &9| &7Вы сыграли в ставку!",
            `[console] <chance=10> minecraft:give %player_name% minecraft:${itemShopsName.console_name} 1`,
            `[console] minecraft:give %player_name% minecraft:${token_code} ${itemShopsName.token}`,
            `[console] staffmsg &bКазино &9| &7Игрок %player_name% сделал ставку на товар &a${itemShopsName.console_name}&7 с зачарованием:&a${(itemShopsName.enchantments.map(x => " " + x))}&7 в количестве 1 за &a${amountFormat}$`
        ]
    }
    i++;

    return acc;
}, {})

template.items = { ...template.items, ...res }

fs.writeFileSync('./server_drop_files/casino/netherite_pickaxe_random.yml', YAML.stringify(template));