import fs from "fs-extra";

const open = `CasinoOpen:
  Enabled: true
  MinPlayers: 0
  FeedBack: false
  Repeat: true
  Commands:
`;

const close = `CasinoClose:
  Enabled: true
  MinPlayers: 0
  FeedBack: false
  Repeat: true
  Commands:
`;

const commands_open = [
  { id: 29, coords: "74.5 42.5 745.5" }, // Охранник
  { id: 30, coords: "8.5 42.5 774.5" }, // Охранник
  { id: 31, coords: "15.5 45.5 767.5" }, // Охранник
  { id: 32, coords: "54.5 43.5 763.5" }, // Охранник
  { id: 33, coords: "74.5 42.5 774.5" }, // Охранник
  { id: 34, coords: "8.5 42.5 745.5" }, // Охранник
  { id: 35, coords: "15.5 43.5 752.5" }, // Охранник
  { id: 36, coords: "54.5 43.5 756.5" }, // Охранник
  { id: 37, coords: "14.5 50.5 769.5" }, // Охранник
  { id: 38, coords: "14.5 50.5 750.5" }, // Охранник
  { id: 39, coords: "-7.5 51.5 762.5" }, // Охранник
  { id: 40, coords: "-7.5 51.5 757.5" }, // Охранник
  { id: 41, coords: "68.5 42.5 753.5" }, // Охранник
  { id: 42, coords: "68.5 42.5 766.5" }, // Охранник
  { id: 57, coords: "76.5 50.5 757.5" }, // Охранник
  { id: 58, coords: "76.5 50.5 762.5" }, // Охранник
  { id: 43, coords: "68.5 42.5 760" }, // Ресепшен
  { id: 44, coords: "10.5 50.5 760" }, // Диджей
  { id: 55, coords: "6.5 42.5 757.5" }, // Бармен
  { id: 56, coords: "6.5 42.5 762.5" }, // Бармен
  { id: 51, coords: "1.5 50.5 755.5" }, // Крупье ( Снаряжения )
  { id: 52, coords: "25.5 43.5 760.5" }, // Крупье ( Топор )
  { id: 53, coords: "1.5 50.5 764.5" }, // Крупье ( Предметы )
  { id: 54, coords: "44.5 43.5 759.5" }, // Крупье ( Мотыга )
  { id: 59, coords: "71.5 51.5 769.5" }, // Крупье ( Кирка )
  { id: 60, coords: "71.5 51.5 750.5" }, // Крупье ( Лопата )
  // { id: 45, coords: "62.5 51.5 741.5" }, // Не используется
  // { id: 46, coords: "34.5 51.5 741.5" }, // Не используется
  // { id: 47, coords: "7.5 51.5 741.5" }, // Не используется
  // { id: 48, coords: "7.5 51.5 778.5" }, // Не используется
  // { id: 49, coords: "34.5 51.5 778.5" }, // Не используется
  // { id: 50, coords: "62.5 51.5 778.5" }, // Не используется
];

const commands_close = [
  { id: 29, coords: "1636.5 128.5 5637.5" }, // Охранник
  { id: 30, coords: "1634.5 128.5 5637.5" }, // Охранник
  { id: 31, coords: "1632.5 128.5 5637.5" }, // Охранник
  { id: 32, coords: "1630.5 128.5 5637.5" }, // Охранник
  { id: 33, coords: "1636.5 128.5 5639.5" }, // Охранник
  { id: 34, coords: "1634.5 128.5 5639.5" }, // Охранник
  { id: 35, coords: "1632.5 128.5 5639.5" }, // Охранник
  { id: 36, coords: "1630.5 128.5 5639.5" }, // Охранник
  { id: 37, coords: "1636.5 128.5 5641.5" }, // Охранник
  { id: 38, coords: "1634.5 128.5 5641.5" }, // Охранник
  { id: 39, coords: "1632.5 128.5 5641.5" }, // Охранник
  { id: 40, coords: "1630.5 128.5 5641.5" }, // Охранник
  { id: 41, coords: "1636.5 128.5 5643.5" }, // Охранник
  { id: 42, coords: "1634.5 128.5 5643.5" }, // Охранник
  { id: 57, coords: "1632.5 128.5 5643.5" }, // Охранник
  { id: 58, coords: "1630.5 128.5 5643.5" }, // Охранник
  { id: 43, coords: "1636.5 128.5 5647.5" }, // Ресепшен
  { id: 44, coords: "1634.5 128.5 5647.5" }, // Диджей
  { id: 55, coords: "1632.5 128.5 5647.5" }, // Бармен
  { id: 56, coords: "1630.5 128.5 5647.5" }, // Бармен
  { id: 51, coords: "1636.5 128.5 5649.5" }, // Крупье ( Снаряжения )
  { id: 52, coords: "1634.5 128.5 5649.5" }, // Крупье ( Топор )
  { id: 53, coords: "1632.5 128.5 5649.5" }, // Крупье ( Предметы )
  { id: 54, coords: "1630.5 128.5 5649.5" }, // Крупье ( Мотыга )
  { id: 59, coords: "1636.5 128.5 5651.5" }, // Крупье ( Кирка )
  { id: 60, coords: "1634.5 128.5 5651.5" }, // Крупье ( Лопата )
  // { id: 45, coords: "1626.5 128.5 5637.5" }, // Не используется
  // { id: 46, coords: "1624.5 128.5 5637.5" }, // Не используется
  // { id: 47, coords: "1622.5 128.5 5637.5" }, // Не используется
  // { id: 48, coords: "1620.5 128.5 5637.5" }, // Не используется
  // { id: 49, coords: "1626.5 128.5 5639.5" }, // Не используется
  // { id: 50, coords: "1624.5 128.5 5639.5" }, // Не используется
];

const generateString = (cords) => {
  return `      - 'console_command: minecraft:summon firework_rocket ${cords.z} ${cords.y + 145} ${cords.x} {FireworksItem:{id:firework_rocket,components:{fireworks:{explosions:[{shape:small_ball,colors:[I;3847130,16383998,3847130,1481884,3847130]}]}}}}'`;
};

const generateAndWriteToFile = () => {
  let result = "";

  result += open;

  for (let a = 0; a < commands_open.length; a++) {
    result += `  - asConsole! npc select ${commands_open[a].id}` + "\n";
    result += `  - delay! 1` + "\n";
    result += `  - asConsole! npc moveto ${commands_open[a].coords}` + "\n";
    if (a !== commands_open.length - 1) result += `  - delay! 1` + "\n";
  }

  result += close;

  for (let a = 0; a < commands_close.length; a++) {
    result += `  - asConsole! npc select ${commands_close[a].id}` + "\n";
    result += `  - delay! 1` + "\n";
    result += `  - asConsole! npc moveto ${commands_close[a].coords}` + "\n";
    if (a !== commands_close.length - 1) result += `  - delay! 1` + "\n";
  }

  fs.writeFileSync("src/Cmi/Schedules_casino.yml", result);
  console.log("\x1b[32m" + "Check! The results are written to a file: src/Cmi/Schedules_casino.yml" + "\x1b[0m");
};

generateAndWriteToFile();
