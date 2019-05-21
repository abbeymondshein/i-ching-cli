// generate coin tosses that combine together to form hexagrams
const hexagrams = require('./hexagrams')

const toss = () => {
  return Math.floor(Math.random() * 2) === 0 ? 3 : 2;
};
const generateLine = () => {
  return toss() + toss() + toss();
};
const generateHexagram = () => {
  let hexagram = "";
  for (let i = 0; i < 6; i++) {
    hexagram += generateLine();
  }
 locateHexagram(hexagram);
};

// console.log(hexagrams)
const locateHexagram = (hex) => {
  console.log(hex)
  const found = hexagrams.find((e) => {
    console.log(e.pattern)
    e.pattern === hex});
  console.log("f",found)
  // console.log(hexagrams[0])
}
// const printHexagram = () => {
//   const trigram = generateHexagram();
//   const toPrint = trigram.slice().reverse();
//   console.log(trigram, toPrint);
//   for (let i = 0; i < toPrint.length; i++) {
//     let current = toPrint[i];
//     switch (current) {
//       case 6:
//         console.log("--x-- (6)");
//         break;
//       case 7:
//         console.log("----- (7)");
//         break;
//       case 8:
//         console.log("-- -- (8)");
//         break;
//       case 9:
//         console.log("--0-- (9)");
//         break;
//       default:
//         console.log(`didn't understand ${current}`);
//     }
//   }
// };

// console.log(toss());
// console.log(generateLine());
console.log(generateHexagram());
// console.log(printHexagram());
