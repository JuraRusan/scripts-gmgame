import YAML from "yaml";
import fs from "fs-extra";

import template from "./_sample.json" assert { type: "json" };

import { money, token } from "../Data/Static.js";

money.map((element) => {
  let result = {};

  const amountFormat = Intl.NumberFormat("en-US").format(element.price);

  let res = {
    material: "PAPER",
    slot: 13,
    update: true,
    item_flags: ["HIDE_ATTRIBUTES", "HIDE_ENCHANTS", "HIDE_ADDITIONAL_TOOLTIP"],
    enchantments: ["MENDING;1"],
    display_name: `&#caeaf5Монеты`,
    lore: [
      " ",
      `&#ccb800 * &#caeaf5Игрок делает ставку: &#55ff55${amountFormat}$`,
      `&#ccb800 * &#caeaf5Выигрыш может составить: &#55ff55${element.money.min}&#caeaf5-&#55ff55${element.money.max}`,
      `&#ccb800 * &#caeaf5Уникальный приз: &#55ff55${element.token.min}&#caeaf5-&#55ff55${element.token.max}`,
      " ",
      "&#ccb800 * &#caeaf5Ваш баланс: &#55ff55%coinsengine_balance_plain_gmcoin%",
      " ",
      `&#f42f31[ ! ] &#caeaf5Щелкните левой кнопкой мыши, чтобы выбрать`,
    ],
    left_click_requirement: {
      requirements: {
        balance_check: {
          type: "has money",
          amount: +amountFormat,
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
    left_click_commands: [
      "[console] balance %player_name%",
      `[takemoney] ${amountFormat}`,
      "[console] balance %player_name%",
      // "[close]",
      `[message] &#caeaf5 Вы сыграли в ставку! (&#e6a500-${amountFormat}&#caeaf5)`,
      `[message] &#caeaf5 Выигрыш через 3 <delay=20>`,
      `[message] &#caeaf5 Выигрыш через 2 <delay=40>`,
      `[message] &#caeaf5 Выигрыш через 1 <delay=60>`,
      `[console] gmcoin give %player_name% %cmi_random_${element.money.min}_${element.money.max}% <delay=80>`,
      `[console] minecraft:give %player_name% minecraft:${token} %cmi_random_${element.token.min}_${element.token.max}% <delay=80>`,
      `[console] staffmsg {#caeaf5}%player_name% сделал ставку на {#55ff55}${amountFormat}$ <delay=80>`,
    ],
  };

  result.open_command = `casino_money_rate_${element.price}_menu`;
  result.size = 27;
  result = { ...result, ...template };
  result.items["Unique_name_13"] = { ...res };

  fs.writeFileSync(`./server/Casino/casino_money_rate_${element.price}.yml`, YAML.stringify(result, { lineWidth: 0 }));
  console.log("\x1b[32m" + `Create file casino_money_rate_${element.price}.yml` + "\x1b[0m");
});
