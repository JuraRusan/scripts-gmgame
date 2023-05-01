const dockerGMGame = '"docker attach 9697d325-5993-4715-9070-74d5cdfc0c9d"';
const dockerRes = '"docker attach aa146230-f115-4450-8175-e50a7c12701f"';
const dockerFarm = '"docker attach 013aaa06-2969-4338-9097-2caae1853916"';
const dockerCreative = '"docker attach 2442ba49-76b5-4943-8f5a-3a8eff02e48d"';
const dockerLobby = '"docker attach ad9e763d-9053-473a-8c1e-89b1cba78094"';
const dockerSkyBlock = '"docker attach b38d670a-bb20-443d-905b-3e52f7452f3e"';

const {exec} = require('node:child_process');

const Info = 'Вся необходимая информация публикуется в Discord https://discord.com/invite/cAM6tUYEuX Присутствие обязательно!';

(async () => {
  exec(`echo "cmi broadcast ${Info}" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "cmi broadcast ${Info}" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "cmi broadcast ${Info}" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "cmi broadcast ${Info}" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "cmi broadcast ${Info}" | socat EXEC:${dockerLobby},pty STDIN`);
})()