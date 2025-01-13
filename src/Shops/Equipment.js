import YAML from "yaml";
import fs from "fs-extra";

import template from "./_sample.json" assert { type: "json" };

import { armors, defaultEnchantments } from "./static.js";

armors.map((element) => {
  const itemKeys = Object.keys(element.list);

  let result = {};
  let counter = 0;

  const res = itemKeys.reduce((acc, curr, index) => {
    const slot = element.slots[counter];
    const item = element.list[curr];

    const amountFormat = Intl.NumberFormat("en-US").format(item.amount);

    const enchantments = Object.keys(item.enchantments);
    const lineEnchantments = enchantments.map((id) => `${id + ":" + item.enchantments[id]}`);

    acc[`Unique_name_${slot}`] = {
      material: item.material,
      slot: slot,
      update: true,
      item_flags: ["HIDE_ATTRIBUTES", "HIDE_ENCHANTS", "HIDE_ADDITIONAL_TOOLTIP"],
      enchantments: ["MENDING;1"],
      display_name: `&#caeaf5${item.name}`,
      lore: [
        " ",
        `&#ccb800 * &#caeaf5Игрок покупает - цена за 1 единицу: &#55ff55${amountFormat}$`,
        " ",
        "&#ccb800 * &#caeaf5Зачарования:",
        ...enchantments.map((x) => {
          if (item.enchantments[x] > defaultEnchantments[x].lv) {
            return (
              "   &#ccb800• &#caeaf5" +
              defaultEnchantments[x].name +
              " " +
              item.enchantments[x] +
              " " +
              "(&#e6a500v. " +
              defaultEnchantments[x].lv +
              "&#caeaf5)"
            );
          } else {
            return "   &#ccb800• &#caeaf5" + defaultEnchantments[x].name + " " + item.enchantments[x];
          }
        }),
        " ",
        "&#ccb800 * &#caeaf5Ваш баланс: &#55ff55%coinsengine_balance_plain_gmcoin%",
        " ",
        `&#f42f31[ ! ] &#caeaf5Щелкните левой кнопкой мыши, чтобы купить`,
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
        `[takemoney] ${amountFormat}`,
        "[refresh]",
        `[message] &#caeaf5 Вы успешно приобрели этот товар! (&#e6a500-${amountFormat}&#caeaf5)`,
        `[console] minecraft:give %player_name% minecraft:${item.material.toLowerCase()}[enchantments={levels:{${lineEnchantments}}}] 1`,
        `[console] staffmsg {#caeaf5} %player_name% приобрел {#55ff55}${item.material.toLowerCase()}{#caeaf5} с зачарованием{#55ff55}${lineEnchantments}{#caeaf5} | 1 -> {#55ff55}${amountFormat}$`,
      ],
    };

    counter++;

    return acc;
  }, {});

  result.menu_title = element.title;
  result = { ...result, ...template };
  result.items = { ...result.items, ...res };

  fs.writeFileSync(`./server/Shops/${element.save}`, YAML.stringify(result, { lineWidth: 0 }));
  console.log("\x1b[32m" + `Create file ${element.save}` + "\x1b[0m");
});
