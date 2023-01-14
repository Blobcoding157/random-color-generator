import chalk from 'chalk';

// Need to add: ability to call both "brighter" and "red". it returns black every time
const RandomHex = (inp) => {
  let result = [];
  let hexRef = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];

  for (let n = 0; n < 6; n++) {
    result.push(hexRef[Math.floor(Math.random() * hexRef.length)]);
  }

  if (inp === 'dark') {
    for (let d = 0; d < result.length; d++) {
      result[d] = result[d - 1];
    }
  } else if (inp === 'bright') {
    for (let b = 0; b < result.length; b++) {
      result[b] = result[b + 1];
    }
  }
  if (inp === 'red') {
    for (let r = 0; r < result.length; r++) {
      if (r !== 0 && r !== 1) {
        result[r] = hexRef[Math.floor(Math.random() * (hexRef.length / 4))];
      } else {
        result[r] = hexRef[6 + Math.floor(Math.random() * (hexRef.length / 2))];
      }
    }
  } else if (inp === 'green') {
    for (let g = 0; g < result.length; g++) {
      if (g !== 2 && g !== 3) {
        result[g] = hexRef[Math.floor(Math.random() * (hexRef.length / 4))];
      } else {
        result[g] = hexRef[6 + Math.floor(Math.random() * (hexRef.length / 2))];
      }
    }
  } else if (inp === 'blue') {
    for (let b = 0; b < result.length; b++) {
      if (b !== 4 && b !== 5) {
        result[b] = hexRef[Math.floor(Math.random() * (hexRef.length / 4))];
      } else {
        result[b] = hexRef[6 + Math.floor(Math.random() * (hexRef.length / 2))];
      }
    }
  }

  return result.join('');
};

function generateBox(w = 31, h = 9, inp) {
  let block = '';
  const side = '###';
  let topBottom = '';
  let spaces = '';
  let tempBlock = '';
  let emptyBlock = '';
  // generating a full # line
  for (let i = 0; i < w; i++) {
    topBottom += '#';
  }
  topBottom += '\n'; // adding a break after, to make it 2 dimentional

  // generating the empty space around the input value
  for (let i = 0; i < w / 2 - inp.length; i++) {
    spaces += ' ';
  }

  for (let i = 0; i < w - 6; i++) {
    emptyBlock += ' ';
  }
  // declaring 3 rows for the input value
  block += side + emptyBlock + side + '\n';
  block += side + spaces + inp + spaces + side + '\n';
  block += side + emptyBlock + side + '\n';

  for (let i = 1; i < h - 2; i++) {
    if (i % 2 === 0) {
      block = topBottom + block;
    } else {
      block = block + topBottom;
    }
  }
  return block;
}

function generateColorBlock(yo) {
  const hexDez = RandomHex(yo);
  const result = chalk.hex(hexDez);
  return console.log(result(generateBox(31, 9, '#' + hexDez)));
}

generateColorBlock(process.argv[2]);
