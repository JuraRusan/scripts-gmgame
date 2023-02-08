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
        display_name: `&b${itemShopsName.name}`,
        lore: [
            " ",
            `&b * &7Игрок покупает - цена за 1 единицу: &a${amountSellFormat}$`,
            `&b * &7Игрок покупает - цена за 1 стак: &a${amountStackSellFormat}$`,
            `&b * &7Игрок продает - цена за 1 единицу: &a${amountFormat}$`,
            `&b * &7Игрок продает - цена за 1 стак: &a${amountStackFormat}$`,
            " ",
            "&b * &7Ваш баланс: &a%xconomy_balance_formatted%",
            " ",
            "&r&4[ ! ] &7Щелкните левой кнопкой мыши, чтобы купить 1, Shift для 1 стака",
            "&r&4[ ! ] &7Щелкните правой кнопкой мыши, чтобы продать 1, Shift для 1 стака"
        ],
        left_click_requirement: {
            requirements: {
                balance_check: {
                    type: "has money",
                    amount: +amountSellFormat,
                    deny_commands: ["[message] &bМагазин &9| &7У вас недостаточно средств для покупки этого предмета!"]
                },
                item_check_slot: {
                    type: "has item",
                    material: "AIR",
                    amount: 1,
                    deny_commands: ["[message] &bМагазин &9| &7Нет необходимого места для покупки этого предмета!"]
                }
            }
        },
        shift_left_click_requirement: {
            requirements: {
                balance_check: {
                    type: "has money",
                    amount: +amountStackSellFormat,
                    deny_commands: ["[message] &bМагазин &9| &7У вас недостаточно средств для покупки этого предмета!"]
                },
                item_check_slot: {
                    type: "has item",
                    material: "AIR",
                    amount: 64,
                    deny_commands: ["[message] &bМагазин &9| &7Нет необходимого места для покупки этого предмета!"]
                }
            }
        },
        right_click_requirement: {
            requirements: {
                item_check: {
                    type: "has item",
                    material: itemShopsName.material,
                    amount: 1,
                    deny_commands: ["[message] &bМагазин &9| &7Нет необходимого предмета, либо кол-ва предметов для продажи!"]
                }
            }
        },
        shift_right_click_requirement: {
            requirements: {
                item_check: {
                    type: "has item",
                    material: itemShopsName.material,
                    amount: 64,
                    deny_commands: ["[message] &bМагазин &9| &7Нет необходимого предмета, либо кол-ва предметов для продажи!"]
                }
            }
        },
        left_click_commands: [
            `[takemoney] ${amountSellFormat}`,
            "[refresh]",
            "[message] &bМагазин &9| &7Вы успешно приобрели этот товар!",
            `[console] minecraft:give %player_name% minecraft:${itemShopsName.console_name} 1`,
            `[console] staffmsg &bМагазин &9| &7Игрок %player_name% успешно приобрел товар &a${itemShopsName.console_name}&7 в количестве 1 за &a${amountSellFormat}$`
        ],
        shift_left_click_commands: [
            `[takemoney] ${amountStackSellFormat}`,
            "[refresh]",
            "[message] &bМагазин &9| &7Вы успешно приобрели этот товар!",
            `[console] minecraft:give %player_name% minecraft:${itemShopsName.console_name} 64`,
            `[console] staffmsg &bМагазин &9| &7Игрок %player_name% успешно приобрел товар &a${itemShopsName.console_name}&7 в количестве 64 за &a${amountStackSellFormat}$`
        ],
        right_click_commands: [
            `[givemoney] ${amountFormat}`,
            "[refresh]",
            "[message] &bМагазин &9| &7Вы успешно продали этот товар!",
            `[console] minecraft:clear %player_name% minecraft:${itemShopsName.console_name} 1`,
            `[console] staffmsg &bМагазин &9| &7Игрок %player_name% успешно сдал товар &a${itemShopsName.console_name}&7 в количестве 1 за &a${amountFormat}$`
        ],
        shift_right_click_commands: [
            `[givemoney] ${amountStackFormat}`,
            "[refresh]",
            "[message] &bМагазин &9| &7Вы успешно продали этот товар!",
            `[console] minecraft:clear %player_name% minecraft:${itemShopsName.console_name} 64`,
            `[console] staffmsg &bМагазин &9| &7Игрок %player_name% успешно сдал товар &a${itemShopsName.console_name}&7 в количестве 64 за &a${amountStackFormat}$`
        ],
    }
    i++;

    return acc;
}, {})

template.items = { ...template.items, ...res }

fs.writeFileSync('./server_drop_files/spawn_shops/shops_ore.yml', YAML.stringify(template));