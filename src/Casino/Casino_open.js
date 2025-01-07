const uuid = '"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d"';

const { exec } = require("node:child_process");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const commands = [
  { id: 29, coords: "74.5 42.5 745.5" },
  { id: 30, coords: "8.5 42.5 774.5" },
  { id: 31, coords: "15.5 45.5 767.5" },
  { id: 32, coords: "54.5 43.5 763.5" },
  { id: 33, coords: "74.5 42.5 774.5" },
  { id: 34, coords: "8.5 42.5 745.5" },
  { id: 35, coords: "15.5 43.5 752.5" },
  { id: 36, coords: "54.5 43.5 756.5" },
  { id: 37, coords: "14.5 50.5 769.5" },
  { id: 38, coords: "14.5 50.5 750.5" },
  { id: 39, coords: "-7.5 51.5 762.5" },
  { id: 40, coords: "-7.5 51.5 757.5" },
  { id: 41, coords: "68.5 42.5 753.5" },
  { id: 42, coords: "68.5 42.5 766.5" },
  { id: 57, coords: "76.5 50.5 757.5" },
  { id: 58, coords: "76.5 50.5 762.5" },
  { id: 43, coords: "68.5 42.5 76" },
  { id: 44, coords: "10.5 50.5 760" },
  { id: 55, coords: "6.5 42.5 757.5" },
  { id: 56, coords: "6.5 42.5 762.5" },
  // { id: 45, coords: "62.5 51.5 741.5" },
  // { id: 46, coords: "34.5 51.5 741.5" },
  // { id: 47, coords: "7.5 51.5 741.5" },
  // { id: 48, coords: "7.5 51.5 778.5" },
  // { id: 49, coords: "34.5 51.5 778.5" },
  // { id: 50, coords: "62.5 51.5 778.5" },
  { id: 51, coords: "1.5 50.5 755.5" },
  { id: 52, coords: "25.5 43.5 760.5" },
  { id: 53, coords: "1.5 50.5 764.5" },
  { id: 54, coords: "44.5 43.5 759.5" },
  { id: 59, coords: "71.5 51.5 769.5" },
  { id: 60, coords: "71.5 51.5 750.5" },
];

(async () => {
  for (const command of commands) {
    exec(`echo "npc2 select ${command.id}" | socat EXEC:${uuid},pty STDIN`);
    await sleep(100);
    exec(`echo "npc2 moveto ${command.coords}" | socat EXEC:${uuid},pty STDIN`);
    await sleep(500);
  }
})();
