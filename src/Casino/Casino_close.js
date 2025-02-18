const uuid = '"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d"';

const { exec } = require("node:child_process");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const commands = [
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

(async () => {
  for (const command of commands) {
    exec(`echo "npc select ${command.id}" | socat EXEC:${uuid},pty STDIN`);
    await sleep(100);
    exec(`echo "npc moveto ${command.coords}" | socat EXEC:${uuid},pty STDIN`);
    await sleep(500);
  }
})();
