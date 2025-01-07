const YAML = require('yaml');
const fs = require('fs-extra');
let template = require('./tabs_sample.json');

const fixed_slot_minecraft = [11, 12, 13, 14, 15];

// const bajje = ["☔", "❤", "☀", "❖", "➴"]
const bajje = [{
  item: "☔",
  name: "Зонт",
  color: "{#83f28f}"
}, {
  item: "❣",
  name: "Сердце",
  color: "{#e60000}"
}, {
  item: "☀",
  name: "Звезда",
  color: "{#6495ed}"
}, {
  item: "❖",
  name: "Ромб",
  color: "{#fa8072}"
}, {
  item: "➴",
  name: "Стрела",
  color: "{#00fa9a}"
},]

const itemKeys = Object.keys(bajje);
let i = 0;

const res = itemKeys.reduce((acc, curr, index) => {
  const slot = fixed_slot_minecraft[i];
  const obj = bajje[curr];

  acc[`Unique_name_${slot}`] = {
    material: "SCULK",
    slot: slot,
    priority: 1,
    update: true,
    hide_attributes: true,
    display_name: ` &#caeaf5${obj.name} `,
    left_click_commands: [
      "[close]",
      "[sound] ENTITY_EXPERIENCE_ORB_PICKUP",
      `[console] lp user %player_name% meta removeprefix 10`,
      `[console] lp user %player_name% meta removesuffix 10`,
      `[console] lp user %player_name% meta addprefix 10 "${obj.item} "<delay=10>`,
      `[console] lp user %player_name% meta addsuffix 10 ${obj.color} <delay=10>`,
    ],
  }

  i++;

  return acc;
}, {})

template.items = {...template.items, ...res}

fs.writeFileSync('./server_drop_files/nick_effect/nick_effect.yml', YAML.stringify(template));