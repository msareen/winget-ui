const { exec } = require('child_process');

function parseWingetOutput(output) {
  const lines = output.trim().split('\n');
  const packages = [];

  for (let i = 2; i < lines.length; i++) {
    const [id, name, version, description] = lines[i].split('\t');
    packages.push({ id, name, version, description });
  }

  return { packages };
}

exec('winget list').stdout.on('data', (output) => {
  const json = parseWingetOutput(output);
  console.log(JSON.stringify(json, null, 2));
});