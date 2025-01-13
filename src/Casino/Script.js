import YAML from "yaml";
import fs from "fs-extra";

import template from "./_sample.json" assert { type: "json" };

import { casino, defaultEnchantments } from "../Data/Static.js";

const chance = "<chance=10>";

casino.map((element) => {
  const itemKeys = Object.keys(element.list);

  let result = {};
  let counter = 0;

  const res = itemKeys.reduce((acc, curr, index) => {
    const slot = element.slots[counter];
    const item = element.list[curr];

    const amountFormat = Intl.NumberFormat("en-US").format(item.amount);

    const keysEnchant = Object.keys(item.enchantments);
    const lineEnchantments = keysEnchant.map((id) => {
      if (item.enchantments[id].min) {
        return `${id}:%cmi_random_${item.enchantments[id].min}_${item.enchantments[id].max}%`;
      } else {
        return `${id + ":" + item.enchantments[id]}`;
      }
    });

    acc[`Unique_name_${slot}`] = {
      material: element.material,
      slot: slot,
      update: true,
      item_flags: ["HIDE_ATTRIBUTES", "HIDE_ENCHANTS", "HIDE_ADDITIONAL_TOOLTIP"],
      enchantments: ["MENDING;1"],
      display_name: `&#caeaf5${element.name}`,
      lore: [
        " ",
        `&#ccb800 * &#caeaf5Игрок делает ставку: &#55ff55${amountFormat}$`,
        `&#ccb800 * &#caeaf5Выигрыш может составить: &#55ff55${element.name}`,
        `&#ccb800 * &#caeaf5Шанс выигрыша — &#55ff5510%`,
        `&#ccb800 * &#caeaf5Уникальный приз: &#55ff55${item.token.min}&#caeaf5-&#55ff55${item.token.max}`,
        " ",
        "&#ccb800 * &#caeaf5Зачарования:",
        ...keysEnchant.map((x) => {
          const props = item.enchantments[x];
          const main = defaultEnchantments[x];

          if (props.min) {
            if (props.max > main.lv) {
              return "   &#ccb800• &#caeaf5" + main.name + " " + props.min + "-" + props.max + " " + "(&#e6a500v. " + main.lv + "&#caeaf5)"; /* prettier-ignore */
            } else {
              return "   &#ccb800• &#caeaf5" + main.name + " " + props;
            }
          } else {
            if (props > main.lv) {
              return "   &#ccb800• &#caeaf5" + main.name + " " + props + " " + "(&#e6a500v. " + main.lv + "&#caeaf5)" /* prettier-ignore */
            } else {
              return "   &#ccb800• &#caeaf5" + main.name + " " + props;
            }
          }
        }),
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
            deny_commands: [
              "[message] &#f42f31 Ошибка:&#caeaf5 У Вас недостаточно средств для покупки этого предмета!",
            ],
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
        `[console] ${chance} minecraft:give %player_name% minecraft:${element.material.toLowerCase()}[enchantments={levels:{${lineEnchantments}}}] 1`,
        `[console] staffmsg {#caeaf5}%player_name% сделал ставку на {#55ff55}${element.material.toLowerCase()}{#caeaf5} с зачарованием {#55ff55}${lineEnchantments} {#caeaf5}| 1 -> {#55ff55}${amountFormat}$`,
      ],
    };

    counter++;

    return acc;
  }, {});

  result.open_command = element.open_command;
  result = { ...result, ...template };
  result.items = { ...result.items, ...res };

  fs.writeFileSync(`./server/Casino/${element.save}`, YAML.stringify(result, { lineWidth: 0 }));
  console.log("\x1b[32m" + `Create file ${element.save}` + "\x1b[0m");
});
