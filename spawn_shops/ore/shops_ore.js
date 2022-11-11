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
                    deny_commands: ["[message] &bМагазин &9| &7Нет необходимого места для покупки этого предмета"]
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
                    deny_commands: ["[message] &bМагазин &9| &7Нет необходимого места для покупки этого предмета"]
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
            `[console] staffmsg &&bМагазин &9| &7Игрок %player_name% успешно сдал товар &a${itemShopsName.console_name}&7 в количестве 64 за &a${amountStackFormat}$`
        ],
    }
    i++;

    return acc;
}, {})


// let result = {};

// function randFunc(items) {
//     itemKeys = Object.keys(items);

//     const random = Math.floor(Math.random() * itemKeys.length);

//     return itemKeys[random];
// }

// item_slot.forEach(element => {
//     const rand = randFunc(item);

//     const randItem = item[rand];
//     delete item[rand];

//     const amount = (randItem.notFullAmount * (Math.random()/5 + 0.9)).toFixed(2)

//     const amountFormat = Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(amount);
//     const amountStack = (amount * 64).toFixed(2);
//     const amountStackFormat = Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(amountStack);

//     result[`Unique_name_${element}`] = {
//         material: randItem.material,
//         slot: element,
//         priority: 1,
//         update: true,
//         hide_attributes: true,
//         display_name: `&b${randItem.name}`,
//         lore: [
//             " ",
//             `&b * &7Продажа - цена за 1 единицу: &a${amountFormat}$`,
//             `&b * &7Продажа - цена за 1 стак: &a${amountStackFormat}$`,
//             " ",
//             "&b * &7Ваш баланс: &a%xconomy_balance%$",
//             " ",
//             "&r&4[ ! ] &7Щелкните левой кнопкой мыши, чтобы продать 1, shift для 1 стака"
//         ],
//         left_click_requirement: {
//             requirements: {
//                 item_check: {
//                     type: "has item",
//                     material: randItem.material,
//                     amount: 1,
//                     deny_commands: ["[message] &bМагазин &9| &7Нет необходимого предмета, либо кол-ва предметов для продажи!"]
//                 }
//             }
//         },
//         shift_left_click_requirement: {
//             requirements: {
//                 item_check: {
//                     type: "has item",
//                     material: randItem.material,
//                     amount: 64,
//                     deny_commands: ["[message] &bМагазин &9| &7Нет необходимого предмета, либо кол-ва предметов для продажи!"]
//                 }
//             }
//         },
//         left_click_commands: [
//             `[givemoney] ${amount}`,
//             "[refresh]",
//             "[message] &bМагазин &9| &7Вы успешно продали этот товар!",
//             `[console] clear %player_name% minecraft:${randItem.console_name} 1`,
//             `[console] &bМагазин &9| &7Игрок %player_name% успешно сдал товар &a${randItem.console_name}&7 в количестве 1 за &a${amountFormat}$`
//         ],
//         shift_left_click_commands: [
//             `[givemoney] ${amountStack}`,
//             "[refresh]",
//             "[message] &bМагазин &9| &7Вы успешно продали этот товар!",
//             `[console] clear %player_name% minecraft:${randItem.console_name} 64`,
//             `[console] &bМагазин &9| &7Игрок %player_name% успешно сдал товар &a${randItem.console_name}&7 в количестве 64 за &a${amountStackFormat}$`
//         ]
//     }
// });

// item_slot_discount.forEach(element => {
//     const rand = randFunc(item);

//     const randItem = item[rand];
//     delete item[rand];

//     const amount = (randItem.notFullAmount * (Math.random()/5 + 0.9)).toFixed(2)

//     const amountStack = (amount * 64).toFixed(2);
//     const amountStackDis = (amountStack * 1.2).toFixed(2);
//     const amountDis = (amount * 1.2).toFixed(2);
//     const amountStackDisFormat = Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(amountStackDis)
//     const amountDisFormat = Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(amountDis)

//     result[`Unique_name_${element}`] = {
//         material: randItem.material,
//         slot: element,
//         priority: 1,
//         update: true,
//         hide_attributes: true,
//         display_name: `&b${randItem.name}`,
//         lore: [
//             " ",
//             `&b * &7Продажа - цена за 1 единицу: &a&m${amount}$&r &a${amountDisFormat}$`,
//             `&b * &7Продажа - цена за 1 стак: &a&m${amountStack}$&r &a${amountStackDisFormat}$`,
//             " ",
//             "&b * &7Ваш баланс: &a%xconomy_balance%$",
//             " ",
//             "&r&4[ ! ] &7Щелкните левой кнопкой мыши, чтобы продать 1, shift для 1 стака"
//         ],
//         left_click_requirement: {
//             requirements: {
//                 item_check: {
//                     type: "has item",
//                     material: randItem.material,
//                     amount: 1,
//                     deny_commands: ["[message] &bМагазин &9| &7Нет необходимого предмета, либо кол-ва предметов для продажи!"]
//                 }
//             }
//         },
//         shift_left_click_requirement: {
//             requirements: {
//                 item_check: {
//                     type: "has item",
//                     material: randItem.material,
//                     amount: 64,
//                     deny_commands: ["[message] &bМагазин &9| &7Нет необходимого предмета, либо кол-ва предметов для продажи!"]
//                 }
//             }
//         },
//         left_click_commands: [
//             `[givemoney] ${amountDis}`,
//             "[refresh]",
//             "[message] &bМагазин &9| &7Вы успешно продали этот товар!",
//             `[console] clear %player_name% minecraft:${randItem.console_name} 1`,
//             `[console] &bМагазин &9| &7Игрок %player_name% успешно сдал товар &a${randItem.console_name}&7 в количестве 1 за &a${amountDisFormat}$`
//         ],
//         shift_left_click_commands: [
//             `[givemoney] ${amountStackDis}`,
//             "[refresh]",
//             "[message] &bМагазин &9| &7Вы успешно продали этот товар!",
//             `[console] clear %player_name% minecraft:${randItem.console_name} 64`,
//             `[console] &bМагазин &9| &7Игрок %player_name% успешно сдал товар &a${randItem.console_name}&7 в количестве 64 за &a${amountStackDisFormat}$`
//         ]
//     }
// });


template.items = { ...template.items, ...res }

fs.writeFileSync('./server_drop_files/shops_ore.yml', YAML.stringify(template));