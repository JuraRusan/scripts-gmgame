import YAML from "yaml";
import fs from "fs-extra";

import template from "./netherite_helmet_sample.json" assert { type: "json" };

import { armors, defaultEnchantments, fixed_slot_minecraft } from "../static.js";

const itemKeys = Object.keys(armors);
let counter = 0;

const res = itemKeys.reduce((acc, curr, index) => {
  const slot = fixed_slot_minecraft[counter];
  const itemShopsName = armors[curr];

  const amountFormat = Intl.NumberFormat("en-US").format(itemShopsName.amount);

  const enchantments = Object.keys(itemShopsName.enchantments);
  const lineEnchantments = enchantments.map((id) => `${id + ":" + itemShopsName.enchantments[id]}`);

  acc[`Unique_name_${slot}`] = {
    material: itemShopsName.material,
    slot: slot,
    update: true,
    item_flags: ["HIDE_ATTRIBUTES", "HIDE_ENCHANTS", "HIDE_ADDITIONAL_TOOLTIP"],
    enchantments: ["MENDING;1"],
    display_name: `&#caeaf5${itemShopsName.name}`,
    lore: [
      " ",
      `&#ccb800 * &#caeaf5Игрок покупает - цена за 1 единицу: &#55ff55${amountFormat}$`,
      " ",
      "&#ccb800 * &#caeaf5Зачарования:",
      ...enchantments.map((x) => {
        if (itemShopsName.enchantments[x] > defaultEnchantments[x].lv) {
          return (
            "   &#ccb800- &#caeaf5" +
            defaultEnchantments[x].name +
            " " +
            itemShopsName.enchantments[x] +
            "(&#e6a500v. " +
            defaultEnchantments[x].lv +
            "&#caeaf5)"
          );
        } else {
          return "   &#ccb800- &#caeaf5" + defaultEnchantments[x].name + " " + itemShopsName.enchantments[x];
        }
      }),
      // ...itemShopsName.enchantments.map((x) => "   &#ccb800- &#caeaf5" + x),
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
      `[takemoney] ${amountFormat}`,
      "[refresh]",
      `[message] &#caeaf5 Вы успешно приобрели этот товар! (&#e6a500-${amountFormat}&#caeaf5)`,
      `[console] minecraft:give %player_name% minecraft:${itemShopsName.material.toLowerCase()}[enchantments={levels:{${lineEnchantments}}}] 1`,
      `[console] staffmsg {#caeaf5} %player_name% приобрел {#55ff55}${itemShopsName.material.toLowerCase()}{#caeaf5} с зачарованием{#55ff55}${lineEnchantments}{#caeaf5} | 1 -> {#55ff55}${amountFormat}$`,
    ],
  };

  counter++;

  return acc;
}, {});

template.items = { ...template.items, ...res };

fs.writeFileSync(
  "./server/Shops_1.21/shops_netherite_helmet.yml",
  YAML.stringify(template, {
    lineWidth: 0,
  })
);
