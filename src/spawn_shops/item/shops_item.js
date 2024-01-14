const YAML = require('yaml');
const fs = require('fs-extra');
let { fixed_slot_minecraft, item_vanilla_base, item_creative_no_sell_base } = require('../Shops.js');
let template = require('./shops_item_sample.json');

const itemKeys = Object.keys(item_vanilla_base);
let i = 0;

const itemKeysNO = Object.keys(item_creative_no_sell_base);
let iNO = 1; // это число зависит от количества предметов в первом массиве

const res = itemKeys.reduce((acc, curr, index) => {
    const slot = fixed_slot_minecraft[i];
    const itemShopsName = item_vanilla_base[curr];

    const amountFormat = Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(itemShopsName.amount);
    const amountStackFormat = Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(itemShopsName.amount * 64);

    const amountSellFormat = Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(itemShopsName.amount * 1.1);
    const amountStackSellFormat = Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(itemShopsName.amount * 1.1 * 64);


    acc[`Unique_name_${slot}`] = {
        material: itemShopsName.material,
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        display_name: `&#caeaf5${itemShopsName.name}`,
        lore: [
            " ",
            `&#ccb800 * &#caeaf5Игрок покупает - цена за 1 единицу: &#55ff55${amountSellFormat}$`,
            `&#ccb800 * &#caeaf5Игрок продает - цена за 1 единицу: &#55ff55${amountFormat}$`,
            " ",
            "&#ccb800 * &#caeaf5Ваш баланс: &#55ff55%xconomy_balance_formatted%",
            " ",
            "&r&4[ ! ] &#caeaf5Щелкните левой кнопкой мыши, чтобы купить",
            "&r&4[ ! ] &#caeaf5Щелкните правой кнопкой мыши, чтобы продать"
        ],
        left_click_requirement: {
            requirements: {
                balance_check: {
                    type: "has money",
                    amount: +amountSellFormat,
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
        right_click_requirement: {
            requirements: {
                item_check: {
                    type: "has item",
                    material: itemShopsName.material,
                    amount: 1,
                    deny_commands: ["[message] &#caeaf5 Нет необходимого предмета, либо кол-ва предметов для продажи!"]
                }
            }
        },
        left_click_commands: [
            `[takemoney] ${amountSellFormat}`,
            "[refresh]",
            "[message] &#caeaf5 Вы успешно приобрели этот товар!",
            `[console] minecraft:give %player_name% minecraft:${itemShopsName.console_name} 1`,
            `[console] staffmsg {#caeaf5} Игрок %player_name% успешно приобрел товар {#55ff55}${itemShopsName.console_name}{#caeaf5} в количестве 1 за {#55ff55}${amountSellFormat}$`
        ],
        right_click_commands: [
            `[givemoney] ${amountFormat}`,
            "[refresh]",
            "[message] &#caeaf5 Вы успешно продали этот товар!",
            `[console] minecraft:clear %player_name% minecraft:${itemShopsName.console_name} 1`,
            `[console] staffmsg {#caeaf5} Игрок %player_name% успешно сдал товар {#55ff55}${itemShopsName.console_name}{#caeaf5} в количестве 1 за {#55ff55}${amountFormat}$`
        ]
    }
    i++;

    return acc;
}, {})

const resNO = itemKeysNO.reduce((acc, curr, index) => {
    const slot = fixed_slot_minecraft[iNO];
    const itemShopsName = item_creative_no_sell_base[curr];

    const amountFormat = Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(itemShopsName.amount);

    acc[`Unique_name_${slot}`] = {
        material: itemShopsName.material,
        slot: slot,
        priority: 1,
        update: true,
        hide_attributes: true,
        display_name: `&#caeaf5${itemShopsName.name}`,
        lore: [
            " ",
            `&#ccb800 * &#caeaf5Игрок покупает - цена за 1 единицу: &#55ff55${amountFormat}$`,
            " ",
            "&#ccb800 * &#caeaf5Ваш баланс: &#55ff55%xconomy_balance_formatted%",
            " ",
            "&r&4[ ! ] &#caeaf5Щелкните левой кнопкой мыши, чтобы купить"
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
            `[console] staffmsg {#caeaf5} Игрок %player_name% успешно приобрел товар {#55ff55}${itemShopsName.console_name}{#caeaf5} в количестве 1 за {#55ff55}${amountFormat}$`
        ]
    }
    iNO++;

    return acc;
}, {})

template.items = { ...template.items, ...res, ...resNO }

fs.writeFileSync('./server_drop_files/spawn_shops/shops_item.yml', YAML.stringify(template));