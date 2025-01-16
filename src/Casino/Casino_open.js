const uuid = '"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d"';

const { exec } = require("node:child_process");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const commands = [
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
  { id: 43, coords: "68.5 42.5 76" }, // Ресепшен
  { id: 44, coords: "10.5 50.5 760" }, // Диджей
  { id: 55, coords: "6.5 42.5 757.5" }, // Бармен
  { id: 56, coords: "6.5 42.5 762.5" }, // Бармен
  { id: 51, coords: "1.5 50.5 755.5" }, // Крупье
  { id: 52, coords: "25.5 43.5 760.5" }, // Крупье ( Топор )
  { id: 53, coords: "1.5 50.5 764.5" }, // Крупье
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

(async () => {
  for (const command of commands) {
    exec(`echo "npc2 select ${command.id}" | socat EXEC:${uuid},pty STDIN`);
    await sleep(100);
    exec(`echo "npc2 moveto ${command.coords}" | socat EXEC:${uuid},pty STDIN`);
    await sleep(500);
  }
})();
