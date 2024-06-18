const displayMessage = require('./0-console');

test('displays message to stdout', () => {
  console.log = jest.fn();
  displayMessage('Hello NodeJS!');
  expect(console.log).toHaveBeenCalledWith('Hello NodeJS!');
});

