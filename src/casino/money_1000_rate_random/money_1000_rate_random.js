const YAML = require('yaml');
const fs = require('fs-extra');
let { fixed_slot_four, token_code, money_1000_rate_random } = require('../Casino.js');
let template = require('./money_1000_rate_random_sample.json');

const itemKeys = Object.keys(money_1000_rate_random);
let i = 0;

const res = itemKeys.reduce((acc, curr, index) => {
    const slot = fixed_slot_four[i];
    const itemShopsName = money_1000_rate_random[curr];

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
            `&b * &7Сумма ставки: &a${amountFormat}$`,
            `&b * &7Выигрыш может составить &a${itemShopsName.rate_victory_ru}$`,
            `&b * &7&mУникальный приз &r&a${itemShopsName.token_ru}`,
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
            "[close]",
            "[message] &bКазино &9| &7Вы сыграли в ставку!",
            "[message] &bКазино &9| &7Выигрыш через 3",
            "[message] &bКазино &9| &7Выигрыш через 2 <delay=20>",
            "[message] &bКазино &9| &7Выигрыш через 1 <delay=40>",
            `[console] money take %player_name% ${itemShopsName.rate_victory} <delay=60>`,
            `[console] minecraft:give %player_name% minecraft:${token_code} ${itemShopsName.token} <delay=60>`,
            `[console] staffmsg &bКазино &9| &7Игрок %player_name% сделал ставку &a${amountFormat} <delay=60>`]
    }
    i++;

    return acc;
}, {})

template.items = { ...template.items, ...res }

fs.writeFileSync('./server_drop_files/casino/money_1000_rate_random.yml', YAML.stringify(template));