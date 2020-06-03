let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}
const stdin = setupInput();

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === 'f') {
    connection.write('Say: send fudge!');
  } else if (key === 'c') {
    connection.write('Say: send cookies!');
  };
};

stdin.on('data', key => {
  handleUserInput(key);
});

module.exports = { setupInput };