import {dockerGMGame} from "./DockerUUID";
import {dockerRes} from "./DockerUUID";
import {dockerFarm} from "./DockerUUID";
import {dockerCreative} from "./DockerUUID";
import {dockerLobby} from "./DockerUUID";

const {exec} = require('node:child_process');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const cmdRestart60Title = '{\\"text\\":\\"АВТО-РЕСТАРТ\\",\\"color\\":\\"#08b7f7\\"}';
const cmdRestart60SubTitle = '{\\"text\\":\\"Перезагрузка через 60 секунд!\\",\\"color\\":\\"#08b7f7\\"}';

const cmdRestart30Title = '{\\"text\\":\\"АВТО-РЕСТАРТ\\",\\"color\\":\\"#08b7f7\\"}';
const cmdRestart30SubTitle = '{\\"text\\":\\"Перезагрузка через 30 секунд!\\",\\"color\\":\\"#08b7f7\\"}';

const cmdRestart10 = '{\\"text\\":\\"Перезагрузка через 10 секунд!\\",\\"color\\":\\"#08b7f7\\"}';
const cmdRestart9 = '{\\"text\\":\\"Перезагрузка через 9 секунд!\\",\\"color\\":\\"#08b7f7\\"}';
const cmdRestart8 = '{\\"text\\":\\"Перезагрузка через 8 секунд!\\",\\"color\\":\\"#08b7f7\\"}';
const cmdRestart7 = '{\\"text\\":\\"Перезагрузка через 7 секунд!\\",\\"color\\":\\"#08b7f7\\"}';
const cmdRestart6 = '{\\"text\\":\\"Перезагрузка через 6 секунд!\\",\\"color\\":\\"#08b7f7\\"}';
const cmdRestart5 = '{\\"text\\":\\"Перезагрузка через 5 секунд!\\",\\"color\\":\\"#08b7f7\\"}';
const cmdRestart4 = '{\\"text\\":\\"Перезагрузка через 4 секунды!\\",\\"color\\":\\"#08b7f7\\"}';
const cmdRestart3 = '{\\"text\\":\\"Перезагрузка через 3 секунды!\\",\\"color\\":\\"#08b7f7\\"}';
const cmdRestart2 = '{\\"text\\":\\"Перезагрузка через 2 секунды!\\",\\"color\\":\\"#08b7f7\\"}';
const cmdRestart1 = '{\\"text\\":\\"Перезагрузка через 1 секунду!\\",\\"color\\":\\"#08b7f7\\"}';

(async () => {
  // ------ Setting the duration
  exec(`echo "title @a @a times 20 100 20" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "title @a @a times 20 100 20" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "title @a @a times 20 100 20" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "title @a @a times 20 100 20" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "title @a @a times 20 100 20" | socat EXEC:${dockerLobby},pty STDIN`);


  // ------ For 60 seconds before restart
  exec(`echo "title @a title ${cmdRestart60Title}" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "title @a subtitle ${cmdRestart60SubTitle}" | socat EXEC:${dockerGMGame},pty STDIN`);
  // ---
  exec(`echo "title @a title ${cmdRestart60Title}" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "title @a subtitle ${cmdRestart60SubTitle}" | socat EXEC:${dockerRes},pty STDIN`);
  // ---
  exec(`echo "title @a title ${cmdRestart60Title}" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "title @a subtitle ${cmdRestart60SubTitle}" | socat EXEC:${dockerFarm},pty STDIN`);
  // ---
  exec(`echo "title @a title ${cmdRestart60Title}" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "title @a subtitle ${cmdRestart60SubTitle}" | socat EXEC:${dockerCreative},pty STDIN`);
  // ---
  exec(`echo "title @a title ${cmdRestart60Title}" | socat EXEC:${dockerLobby},pty STDIN`);
  exec(`echo "title @a subtitle ${cmdRestart60SubTitle}" | socat EXEC:${dockerLobby},pty STDIN`);


  // ------ For 30 seconds before restart
  await sleep(30000);
  exec(`echo "title @a title ${cmdRestart30Title}" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "title @a subtitle ${cmdRestart30SubTitle}" | socat EXEC:${dockerGMGame},pty STDIN`);
  // ---
  exec(`echo "title @a title ${cmdRestart30Title}" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "title @a subtitle ${cmdRestart30SubTitle}" | socat EXEC:${dockerRes},pty STDIN`);
  // ---
  exec(`echo "title @a title ${cmdRestart30Title}" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "title @a subtitle ${cmdRestart30SubTitle}" | socat EXEC:${dockerFarm},pty STDIN`);
  // ---
  exec(`echo "title @a title ${cmdRestart30Title}" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "title @a subtitle ${cmdRestart30SubTitle}" | socat EXEC:${dockerCreative},pty STDIN`);
  // ---
  exec(`echo "title @a title ${cmdRestart30Title}" | socat EXEC:${dockerLobby},pty STDIN`);
  exec(`echo "title @a subtitle ${cmdRestart30SubTitle}" | socat EXEC:${dockerLobby},pty STDIN`);


  // ------ For 10 seconds before restart
  await sleep(20000);
  exec(`echo "title @a actionbar ${cmdRestart10}" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart10}" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart10}" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart10}" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart10}" | socat EXEC:${dockerLobby},pty STDIN`);


  // ------ For 9 seconds before restart
  await sleep(1000);
  exec(`echo "title @a actionbar ${cmdRestart9}" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart9}" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart9}" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart9}" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart9}" | socat EXEC:${dockerLobby},pty STDIN`);


  // ------ For 8 seconds before restart
  await sleep(1000);
  exec(`echo "title @a actionbar ${cmdRestart8}" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart8}" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart8}" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart8}" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart8}" | socat EXEC:${dockerLobby},pty STDIN`);


  // ------ For 7 seconds before restart
  await sleep(1000);
  exec(`echo "title @a actionbar ${cmdRestart7}" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart7}" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart7}" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart7}" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart7}" | socat EXEC:${dockerLobby},pty STDIN`);


  // ------ For 6 seconds before restart
  await sleep(1000);
  exec(`echo "title @a actionbar ${cmdRestart6}" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart6}" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart6}" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart6}" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart6}" | socat EXEC:${dockerLobby},pty STDIN`);


  // ------ For 5 seconds before restart
  await sleep(1000);
  exec(`echo "title @a actionbar ${cmdRestart5}" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart5}" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart5}" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart5}" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart5}" | socat EXEC:${dockerLobby},pty STDIN`);


  // ------ For 4 seconds before restart
  await sleep(1000);
  exec(`echo "title @a actionbar ${cmdRestart4}" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart4}" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart4}" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart4}" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart4}" | socat EXEC:${dockerLobby},pty STDIN`);


  // ------ For 3 seconds before restart
  await sleep(1000);
  exec(`echo "title @a actionbar ${cmdRestart3}" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart3}" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart3}" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart3}" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart3}" | socat EXEC:${dockerLobby},pty STDIN`);


  // ------ For 2 seconds before restart
  await sleep(1000);
  exec(`echo "title @a actionbar ${cmdRestart2}" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart2}" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart2}" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart2}" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart2}" | socat EXEC:${dockerLobby},pty STDIN`);


  // ------ For 1 seconds before restart
  await sleep(1000);
  exec(`echo "title @a actionbar ${cmdRestart1}" | socat EXEC:${dockerGMGame},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart1}" | socat EXEC:${dockerRes},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart1}" | socat EXEC:${dockerFarm},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart1}" | socat EXEC:${dockerCreative},pty STDIN`);
  exec(`echo "title @a actionbar ${cmdRestart1}" | socat EXEC:${dockerLobby},pty STDIN`);
})()