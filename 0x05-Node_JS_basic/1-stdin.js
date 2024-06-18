// 1-stdin.test.js

const { spawn } = require('child_process');

test('stdin test', (done) => {
  const process = spawn('node', ['1-stdin.js']);
  process.stdin.write('John\n');
  process.stdin.end();
  
  let data = '';
  process.stdout.on('data', (chunk) => {
    data += chunk.toString();
  });

  process.on('exit', () => {
    expect(data).toContain('Welcome to Holberton School, what is your name?');
    expect(data).toContain('Your name is: John');
    expect(data).toContain('This important software is now closing');
    done();
  });
});

