import YAML from "yaml";
import fs from "fs-extra";

import template from "./_sample.json" assert { type: "json" };

import { no_sell, slots_no_sell, slots_sell, yes_sell } from "./static.js";

const itemKeysYesSell = Object.keys(yes_sell);
const itemNoKeys = Object.keys(no_sell);

let result = {};

let counterYesSell = 0;
let counterNoSell = 0;

const resultSell = itemKeysYesSell.reduce((acc, curr) => {
  const slot = slots_sell[counterYesSell];
  const itemName = yes_sell[curr];

  const amountSingleSell = Intl.NumberFormat("en-US").format(itemName.amount);
  const amountStackSell = Intl.NumberFormat("en-US").format(itemName.amount * 64);

  const amountSingleBuy = Intl.NumberFormat("en-US").format(itemName.amount * 1.1);
  const amountStackBuy = Intl.NumberFormat("en-US").format(itemName.amount * 1.1 * 64);

  const amountSingleTax = Intl.NumberFormat("en-US").format(itemName.amount * 0.1);
  const amountStackTax = Intl.NumberFormat("en-US").format(itemName.amount * 0.1 * 64);

  acc[`Unique_name_${slot}`] = {
    material: itemName.material.toUpperCase(),
    slot: slot,
    update: true,
    item_flags: ["HIDE_ATTRIBUTES", "HIDE_ENCHANTS", "HIDE_ADDITIONAL_TOOLTIP"],
    display_name: `&#caeaf5${itemName.name}`,
    lore: [
      " ",
      `&#ccb800 * &#caeaf5Игрок покупает - цена за 1 единицу: &#55ff55${amountSingleBuy}$`,
      `&#ccb800 * &#caeaf5Игрок покупает - цена за 1 стак: &#55ff55${amountStackBuy}$`,
      `&#ccb800 * &#caeaf5Игрок продает - цена за 1 единицу: &#55ff55${amountSingleSell}$`,
      `&#ccb800 * &#caeaf5Игрок продает - цена за 1 стак: &#55ff55${amountStackSell}$`,
      " ",
      "&#ccb800 * &#caeaf5Ваш баланс: &#55ff55%coinsengine_balance_plain_gmcoin%",
      " ",
      "&#f42f31[ ! ] &#caeaf5Лкм чтобы купить 1, лкм + shift для 1 стака",
      "&#f42f31[ ! ] &#caeaf5Пкм чтобы продать 1, пкм + shift для 1 стака",
    ],
    left_click_requirement: {
      requirements: {
        balance_check: {
          type: "has money",
          amount: +amountSingleBuy,
          deny_commands: ["[message] &#f42f31 Ошибка:&#caeaf5 У Вас недостаточно средств для покупки этого предмета!"],
        },
        item_check_slot: {
          type: "has item",
          material: "AIR",
          amount: 1,
          deny_commands: ["[message] &#f42f31 Ошибка:&#caeaf5 Нет необходимого места для покупки этого предмета!"],
        },
      },
    },
    shift_left_click_requirement: {
      requirements: {
        balance_check: {
          type: "has money",
          amount: +amountStackBuy,
          deny_commands: ["[message] &#f42f31 Ошибка:&#caeaf5 У Вас недостаточно средств для покупки этого предмета!"],
        },
        item_check_slot: {
          type: "has item",
          material: "AIR",
          amount: 64,
          deny_commands: ["[message] &#f42f31 Ошибка:&#caeaf5 Нет необходимого места для покупки этого предмета!"],
        },
      },
    },
    right_click_requirement: {
      requirements: {
        item_check: {
          type: "has item",
          material: itemName.material,
          amount: 1,
          deny_commands: [
            "[message] &#f42f31 Ошибка:&#caeaf5 Нет необходимого предмета, либо кол-ва предметов для продажи!",
          ],
        },
      },
    },
    shift_right_click_requirement: {
      requirements: {
        item_check: {
          type: "has item",
          material: itemName.material,
          amount: 64,
          deny_commands: [
            "[message] &#f42f31 Ошибка:&#caeaf5 Нет необходимого предмета, либо кол-ва предметов для продажи!",
          ],
        },
      },
    },
    left_click_commands: [
      `[takemoney] ${amountSingleBuy}`,
      `[console] gmcointax give %player_name% ${amountSingleTax} -s`,
      `[console] gmcointaxsingle give prestig9110 ${amountSingleTax} -s`,
      "[refresh]",
      `[message] &#caeaf5 Вы успешно приобрели этот товар! (&#e6a500-${amountSingleBuy}&#caeaf5)`,
      `[console] minecraft:give %player_name% minecraft:${itemName.material} 1`,
      `[console] staffmsg {#caeaf5} %player_name% приобрел {#55ff55}${itemName.material}{#caeaf5} | 1 -> {#55ff55}${amountSingleBuy}$`,
    ],
    shift_left_click_commands: [
      `[takemoney] ${amountStackBuy}`,
      `[console] gmcointax give %player_name% ${amountStackTax} -s`,
      `[console] gmcointaxsingle give prestig9110 ${amountStackTax} -s`,
      "[refresh]",
      `[message] &#caeaf5 Вы успешно приобрели этот товар!(&#e6a500-${amountStackBuy}&#caeaf5)`,
      `[console] minecraft:give %player_name% minecraft:${itemName.material} 64`,
      `[console] staffmsg {#caeaf5} %player_name% приобрел {#55ff55}${itemName.material}{#caeaf5} | 64 -> {#55ff55}${amountStackBuy}$`,
    ],
    right_click_commands: [
      `[givemoney] ${amountSingleSell}`,
      "[refresh]",
      `[message] &#caeaf5 Вы успешно продали этот товар! (&#e6a500+${amountSingleSell}&#caeaf5)`,
      `[console] minecraft:clear %player_name% minecraft:${itemName.material} 1`,
      `[console] staffmsg {#caeaf5} %player_name% сдал {#55ff55}${itemName.material}{#caeaf5} | 1 -> {#55ff55}${amountSingleSell}$`,
    ],
    shift_right_click_commands: [
      `[givemoney] ${amountStackSell}`,
      "[refresh]",
      `[message] &#caeaf5 Вы успешно продали этот товар! (&#e6a500+${amountStackSell}&#caeaf5)`,
      `[console] minecraft:clear %player_name% minecraft:${itemName.material} 64`,
      `[console] staffmsg {#caeaf5} %player_name% сдал {#55ff55}${itemName.material}{#caeaf5} | 64 -> {#55ff55}${amountStackSell}$`,
    ],
  };

  counterYesSell++;

  return acc;
}, {});

const resultNoSell = itemNoKeys.reduce((acc, curr) => {
  const slot = slots_no_sell[counterNoSell];
  const itemName = no_sell[curr];

  const amountSingle = Intl.NumberFormat("en-US").format(itemName.amount);
  // const amountStack = Intl.NumberFormat("en-US").format(itemName.amount * 64);

  acc[`Unique_name_${slot}`] = {
    material: itemName.material.toUpperCase(),
    slot: slot,
    update: true,
    item_flags: ["HIDE_ATTRIBUTES", "HIDE_ENCHANTS", "HIDE_ADDITIONAL_TOOLTIP"],
    display_name: `&#caeaf5${itemName.name}`,
    lore: [
      " ",
      `&#ccb800 * &#caeaf5Игрок покупает - цена за 1 единицу: &#55ff55${amountSingle}$`,
      // `&#ccb800 * &#caeaf5Игрок покупает - цена за 1 стак: &#55ff55${amountStack}$`,
      " ",
      "&#ccb800 * &#caeaf5Ваш баланс: &#55ff55%coinsengine_balance_plain_gmcoin%",
      " ",
      "&#f42f31[ ! ] &#caeaf5Лкм чтобы купить 1, лкм + shift для 1 стака",
    ],
    left_click_requirement: {
      requirements: {
        balance_check: {
          type: "has money",
          amount: +amountSingle,
          deny_commands: ["[message] &#f42f31 Ошибка:&#caeaf5 У Вас недостаточно средств для покупки этого предмета!"],
        },
        item_check_slot: {
          type: "has item",
          material: "AIR",
          amount: 1,
          deny_commands: ["[message] &#f42f31 Ошибка:&#caeaf5 Нет необходимого места для покупки этого предмета!"],
        },
      },
    },
    // shift_left_click_requirement: {
    //   requirements: {
    //     balance_check: {
    //       type: "has money",
    //       amount: +amountStack,
    //       deny_commands: ["[message] &#f42f31 Ошибка:&#caeaf5 У Вас недостаточно средств для покупки этого предмета!"],
    //     },
    //     item_check_slot: {
    //       type: "has item",
    //       material: "AIR",
    //       amount: 64,
    //       deny_commands: ["[message] &#f42f31 Ошибка:&#caeaf5 Нет необходимого места для покупки этого предмета!"],
    //     },
    //   },
    // },
    left_click_commands: [
      `[takemoney] ${amountSingle}`,
      "[refresh]",
      `[message] &#caeaf5 Вы успешно приобрели этот товар! (&#e6a500-${amountSingle}&#caeaf5)`,
      `[console] minecraft:give %player_name% minecraft:${itemName.material} 1`,
      `[console] staffmsg {#caeaf5} %player_name% приобрел {#55ff55}${itemName.material}{#caeaf5} | 1 -> {#55ff55}${amountSingle}$`,
    ],
    // shift_left_click_commands: [
    //   `[takemoney] ${amountStack}`,
    //   "[refresh]",
    //   `[message] &#caeaf5 Вы успешно приобрели этот товар! (&#e6a500-${amountStack}&#caeaf5)`,
    //   `[console] minecraft:give %player_name% minecraft:${itemName.material} 64`,
    //   `[console] staffmsg {#caeaf5} %player_name% приобрел {#55ff55}${itemName.material}{#caeaf5} | 64-> {#55ff55}${amountStack}$`,
    // ],
  };

  counterNoSell++;

  return acc;
}, {});

result.menu_title = "Руды";
result.open_command = "deluxe_menu_shops_ore";
result = { ...result, ...template };
result.items = { ...result.items, ...resultSell, ...resultNoSell };

fs.writeFileSync("./server/Shops/shops_ore.yml", YAML.stringify(template, { lineWidth: 0 }));
console.log("\x1b[32m" + "Create file shops_ore.yml" + "\x1b[0m");
