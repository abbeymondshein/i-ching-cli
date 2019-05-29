// generate coin tosses that combine together to form hexagrams
const hexagrams = require("./hexagrams");

const toss = () => {
  return Math.floor(Math.random() * 2) === 0 ? 3 : 2;
};
const generateLine = () => {
  return toss() + toss() + toss();
};

const convertHexagrams = hexagram => {
  let primary = "";
  let relating = "";
  for (let i = 0; i < hexagram.length; i++) {
    if (hexagram[i] === '6') {
      primary += 8;
      relating += 7;
    } else if (hexagram[i] === '9') {
      primary += 7;
      relating += 8;
    } else {
      primary += hexagram[i];
      relating += hexagram[i];
    }
  }
  // console.log("primary:  ", primary, locateHexagram(primary));
  // console.log("relating:  ", relating, locateHexagram(relating));
  logFormat(locateHexagram(primary))
  logFormat(locateHexagram(relating))
};

const generateHexagram = () => {
  let hexagram = "";
  for (let i = 0; i < 6; i++) {
    hexagram += generateLine();
  }
  convertHexagrams(hexagram);
};

const locateHexagram = hex => {
  hex = Number(hex);
  const found = hexagrams.find(e => {
    return e.pattern === hex
  });
  return found;
};

const logFormat = result => {
  console.log(`  ${result.symbol}
  ${result.name.en}, ${result.name.zh}
  ${result.image}
  Judgement:
  ${result.judgment}
   `)

}
// console.log(toss());
// console.log(generateLine());
console.log(generateHexagram());
// console.log(printHexagram());
