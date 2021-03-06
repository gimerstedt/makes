const test = require('ava');
const run = require('../lib/run');

test('run a command', async t => {
  await run('echo', ['hello']);
  t.pass('successfully run a command');
});

test('run a command in a different cwd', async t => {
  await run('ls', ['index.js'], 'lib');
  t.pass('successfully run a command in a different cwd');
});

test('run a command, catch failure', async t => {
  await t.throwsAsync(async () => run('ls', ['no-such-file'], 'lib'));
});

test.cb('run a command, catch signal on exit', t => {
  const cmd = run('cat');
  cmd.then(
    () => {
      t.fail('Should not pass');
      t.end();
    },
    err => {
      t.is(err.message, 'cat exit signal: SIGTERM');
      t.end();
    }
  );

  setTimeout(() => {
    cmd.proc.kill();
  }, 200);
});
