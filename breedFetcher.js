const request = require('request');
let myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);
const url = 'https://api.thecatapi.com/v1/images/search?breed_id' + myArgs;

request(url,(err,res, body) =>{
  if (err) {
    return console.log(err);
  }
  const data = JSON.parse(body);
  console.log(data[0]);
  console.log(typeof data);
});

