const YAML = require('yaml');
const fs = require('fs-extra');
let { fixed_slot_three, token_code, all_tools_random_base } = require('../Casino.js');
let template = require('./all_tools_random_sample.json');

const itemKeys = Object.keys(all_tools_random_base);
let i = 0;

const res = itemKeys.reduce((acc, curr, index) => {
    const slot = fixed_slot_three[i];
    const itemShopsName = all_tools_random_base[curr];

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
            `&b * &7&mУникальный приз&r &a${itemShopsName.token_ru}`,
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
                    deny_commands: [
                        "[message] &bКазино &9| &7У Вас недостаточно средств для создания ставки!",
                        "[console] staffmsg &bКазино &9| &7У Вас недостаточно средств для создания ставки!",
                        "[console] balance %player_name%",
                        "[close]",
                    ]
                },
                item_check_slot: {
                    type: "has item",
                    material: "AIR",
                    amount: 1,
                    deny_commands: [
                        "[message] &bКазино &9| &7Нет необходимого места в инвентаре!",
                        "[console] staffmsg &bКазино &9| &7Нет необходимого места в инвентаре!",
                        "[console] balance %player_name%",
                        "[close]",
                    ]
                }
            }
        },
        left_click_commands: [
            `[console] balance %player_name%`,
            `[takemoney] ${amountFormat}`,
            `[console] balance %player_name%`,
            "[close]",
            "[message] &bКазино &9| &7Вы сыграли в ставку!",
            `[console] <chance=10> cmi give %player_name% minecraft:${itemShopsName.console_name} 1`,
            `[console] cmi give %player_name% minecraft:${token_code} ${itemShopsName.token}`,
            `[console] staffmsg &bКазино &9| &7Игрок %player_name% сделал ставку на товар &a${itemShopsName.console_name}&7 с зачарованием&a${(itemShopsName.enchantments.map(x => " " + x))}&7 в количестве 1 за &a${amountFormat}$`
        ]
    }
    i++;

    return acc;
}, {})

template.items = { ...template.items, ...res }

fs.writeFileSync('./server_drop_files/casino/all_tools_random.yml', YAML.stringify(template));