const { connect } = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function() {
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
  };
};

stdin.on('data', key => {
  handleUserInput(key);
});
