// Node.Js skripta koja se izvršava sa npm run update
// update release-date in package.json, potrebno je instalirati kvjson package
import { exec } from 'child_process';

const date = `${new Date().getDate()}.${
  new Date().getMonth() + 1
}.${new Date().getFullYear()}`;

const command = `"./node_modules/.bin/kvjson" package.json release ${date}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
