import {dockerGMGame} from "./DockerUUID";
import {dockerRes} from "./DockerUUID";
import {dockerFarm} from "./DockerUUID";
import {dockerCreative} from "./DockerUUID";
import {dockerLobby} from "./DockerUUID";

const {exec} = require('node:child_process');

const Info = 'Вся необходимая информация публикуется в Discord https://discord.com/invite/cAM6tUYEuX Присутствие обязательно!';

(async () => {
  exec(`echo "cmi broadcast ${Info}" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "cmi broadcast ${Info}" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "cmi broadcast ${Info}" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "cmi broadcast ${Info}" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "cmi broadcast ${Info}" | socat EXEC:${dockerLobby},pty STDIN`);
})()