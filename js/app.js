// update release-date in package.json

const date = `${new Date().getDate()}.${
  new Date().getMonth() + 1
}.${new Date().getFullYear()}`;

const command = `"./node_modules/.bin/kvjson" package.json release ${date}`;

import { exec } from 'child_process';

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
