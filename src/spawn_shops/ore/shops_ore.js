const YAML = require('yaml');
const fs = require('fs-extra');
let { fixed_slot_minecraft, ore_base } = require('../Shops.js');
let template = require('./shops_ore_sample.json');

const itemKeys = Object.keys(ore_base);
let i = 0;

const res = itemKeys.reduce((acc, curr, index) => {
    const slot = fixed_slot_minecraft[i];
    const itemShopsName = ore_base[curr];

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
            `&#ccb800 * &#caeaf5Игрок покупает - цена за 1 стак: &#55ff55${amountStackSellFormat}$`,
            `&#ccb800 * &#caeaf5Игрок продает - цена за 1 единицу: &#55ff55${amountFormat}$`,
            `&#ccb800 * &#caeaf5Игрок продает - цена за 1 стак: &#55ff55${amountStackFormat}$`,
            " ",
            "&#ccb800 * &#caeaf5Ваш баланс: &#55ff55%xconomy_balance_formatted%",
            " ",
            "&#f42f31[ ! ] &#caeaf5Лкм чтобы купить 1, лкм + shift для 1 стака",
            "&#f42f31[ ! ] &#caeaf5Пкм чтобы продать 1, пкм + shift для 1 стака"
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
        shift_left_click_requirement: {
            requirements: {
                balance_check: {
                    type: "has money",
                    amount: +amountStackSellFormat,
                    deny_commands: ["[message] &#caeaf5 У Вас недостаточно средств для покупки этого предмета!"]
                },
                item_check_slot: {
                    type: "has item",
                    material: "AIR",
                    amount: 64,
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
        shift_right_click_requirement: {
            requirements: {
                item_check: {
                    type: "has item",
                    material: itemShopsName.material,
                    amount: 64,
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
        shift_left_click_commands: [
            `[takemoney] ${amountStackSellFormat}`,
            "[refresh]",
            "[message] &#caeaf5 Вы успешно приобрели этот товар!",
            `[console] minecraft:give %player_name% minecraft:${itemShopsName.console_name} 64`,
            `[console] staffmsg {#caeaf5} Игрок %player_name% успешно приобрел товар {#55ff55}${itemShopsName.console_name}{#caeaf5} в количестве 64 за {#55ff55}${amountStackSellFormat}$`
        ],
        right_click_commands: [
            `[givemoney] ${amountFormat}`,
            "[refresh]",
            "[message] &#caeaf5 Вы успешно продали этот товар!",
            `[console] minecraft:clear %player_name% minecraft:${itemShopsName.console_name} 1`,
            `[console] staffmsg {#caeaf5} Игрок %player_name% успешно сдал товар {#55ff55}${itemShopsName.console_name}{#caeaf5} в количестве 1 за {#55ff55}${amountFormat}$`
        ],
        shift_right_click_commands: [
            `[givemoney] ${amountStackFormat}`,
            "[refresh]",
            "[message] &#caeaf5 Вы успешно продали этот товар!",
            `[console] minecraft:clear %player_name% minecraft:${itemShopsName.console_name} 64`,
            `[console] staffmsg {#caeaf5} Игрок %player_name% успешно сдал товар {#55ff55}${itemShopsName.console_name}{#caeaf5} в количестве 64 за {#55ff55}${amountStackFormat}$`
        ],
    }
    i++;

    return acc;
}, {})

template.items = { ...template.items, ...res }

fs.writeFileSync('./server_drop_files/spawn_shops/shops_ore.yml', YAML.stringify(template));