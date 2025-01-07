const uuid = '"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d"';

const { exec } = require("node:child_process");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const commands = [
  { id: 29, coords: "-3818.5 -5.5 6829.5" },
  { id: 30, coords: "-3815.5 -5.5 6829.5" },
  { id: 31, coords: "-3812.5 -5.5 6829.5" },
  { id: 32, coords: "-3809.5 -5.5 6829.5" },
  { id: 33, coords: "-3818.5 -5.5 6832.5" },
  { id: 34, coords: "-3815.5 -5.5 6832.5" },
  { id: 35, coords: "-3812.5 -5.5 6832.5" },
  { id: 36, coords: "-3809.5 -5.5 6832.5" },
  { id: 37, coords: "-3818.5 -5.5 6835.5" },
  { id: 38, coords: "-3815.5 -5.5 6835.5" },
  { id: 39, coords: "-3812.5 -5.5 6835.5" },
  { id: 40, coords: "-3809.5 -5.5 6835.5" },
  { id: 41, coords: "-3818.5 -5.5 6838.5" },
  { id: 42, coords: "-3815.5 -5.5 6838.5" },
  { id: 57, coords: "-3812.5 -5.5 6838.5" },
  { id: 58, coords: "-3809.5 -5.5 6838.5" },
  { id: 43, coords: "-3821.5 -5.5 6829.5" },
  { id: 44, coords: "-3824.5 -5.5 6829.5" },
  { id: 55, coords: "-3827.5 -5.5 6829.5" },
  { id: 56, coords: "-3830.5 -5.5 6829.5" },
  { id: 45, coords: "-3824.5 -5.5 6832.5" },
  { id: 46, coords: "-3827.5 -5.5 6832.5" },
  { id: 47, coords: "-3830.5 -5.5 6832.5" },
  { id: 48, coords: "-3833.5 -5.5 6832.5" },
  { id: 49, coords: "-3824.5 -5.5 6835.5" },
  { id: 50, coords: "-3827.5 -5.5 6835.5" },
  { id: 51, coords: "-3830.5 -5.5 6835.5" },
  { id: 52, coords: "-3833.5 -5.5 6835.5" },
  { id: 53, coords: "-3824.5 -5.5 6838.5" },
  { id: 54, coords: "-3827.5 -5.5 6838.5" },
  { id: 59, coords: "-3830.5 -5.5 6838.5" },
  { id: 60, coords: "-3833.5 -5.5 6838.5" },
];

(async () => {
  for (const command of commands) {
    exec(`echo "npc2 select ${command.id}" | socat EXEC:${uuid},pty STDIN`);
    await sleep(100);
    exec(`echo "npc2 moveto ${command.coords}" | socat EXEC:${uuid},pty STDIN`);
    await sleep(500);
  }
})();
