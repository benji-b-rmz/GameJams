// Benjamin Ramirez
// LO REZ Game Jame 2018
// using code for a minimal node server found here:
// https://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server

let port = 3000;
let connect = require('connect');
let serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(port, function() {
  console.log("STARTING SERVER ON " + port);
});