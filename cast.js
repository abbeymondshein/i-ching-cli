// generate coin tosses that combine together to form hexagrams

const toss = () => {
  return Math.floor(Math.random() * 2) === 0 ? 3 : 2;
};
const generateLine = () => {
  return toss() + toss() + toss();
};
const generateTrigram = () => {
  return [generateLine(), generateLine(), generateLine()];
};
const printTrigram = () => {
  const trigram = generateTrigram();
  const toPrint = trigram.slice().reverse();
  console.log(trigram, toPrint);
  for (let i = 0; i < toPrint.length; i++) {
    let current = toPrint[i];
    switch (current) {
      case 6:
        console.log("--x--");
        break;
      case 7:
        console.log("-----");
        break;
      case 8:
        console.log("-- --");
        break;
      case 9:
        console.log("--0--");
        break;
      default:
        console.log(`didn't understand ${current}`);
    }
  }
};

// console.log(toss());
// console.log(generateLine());
// console.log(generateTrigram());
console.log(printTrigram());
