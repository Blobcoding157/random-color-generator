import chalk from 'chalk';
import colors from 'color';

const RandomHex = (size) => {
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

  for (let n = 0; n < size; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join('');
};

function generateBox(w, h, inp) {
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

  //generating the empty space around the input value
  for (let i = 0; i < w / 2 - inp.length; i++) {
    spaces += ' ';
  }

  for (let i = 0; i < w - 6; i++) {
    emptyBlock += ' ';
  }
  //declaring 3 rows for the input value
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

function GenerateColorblock() {
  const hexDez = RandomHex(6);
  const result = chalk.hex(hexDez);
  return console.log(result(generateBox(31, 9, '#' + hexDez)));
}

GenerateColorblock();
