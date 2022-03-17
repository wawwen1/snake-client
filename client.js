const net = require('net');
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('**CONNECTION SUCCESSFUL***');
    conn.write('Name: WAR');
  });

  conn.on('data', (data) => {
    console.log('Server: ', data);
    conn.end();
  });

  return conn;
};

module.exports = connect;