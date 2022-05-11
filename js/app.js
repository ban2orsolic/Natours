// import { version } from '../package.json'; // čitanje broja verzije iz package.json

// console.log('hello!', version);

var date = `${new Date().getDate()}.${
  new Date().getMonth() + 1
}.${new Date().getFullYear()}`;
console.log(date);

// const fs = require('fs');
// const fileName = '../test.json';
// const file = require(fileName);

// file.key = 'new value';

// fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
//   if (err) return console.log(err);
//   console.log(JSON.stringify(file));
//   console.log('writing to ' + fileName);
// });

//console.log(`./node_modules/.bin/kvjson test.json version 1.0.1`);
const date1 = `"./node_modules/.bin/kvjson" package.json release-date ${date}`;

// const { exec } = require('child_process');
import { exec } from 'child_process';

exec(date1, (error, stdout, stderr) => {
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
// exec('"./node_modules/.bin/kvjson" test.json version 1.0.6');
