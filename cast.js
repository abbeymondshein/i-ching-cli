#!/usr/bin/env node
const hexagrams = require("./hexagrams");
const program = require('commander');
const c = require('chalk');
const g = require('gradient-string');

// * Configures options to pass for CLI
program
  .option('-c, --cast', 'Cast reading')
  .parse(process.argv)

  console.log(`You've chosen to:`)
  if (program.cast) console.log(`Cast reading`)


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
    if (hexagram[i] === "6") {
      primary += 8;
      relating += 7;
    } else if (hexagram[i] === "9") {
      primary += 7;
      relating += 8;
    } else {
      primary += hexagram[i];
      relating += hexagram[i];
    }
  }
  // console.log("primary:  ", primary, locateHexagram(primary));
  // console.log("relating:  ", relating, locateHexagram(relating));
  logFormat(locateHexagram(primary),"Primary");
  logFormat(locateHexagram(relating), "Relating");
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
    return e.pattern === hex;
  });
  return found;
};

const logFormat = (result, label) => {
  console.log(`
  ${c.cyan(label, ':')}
  ${c.bgCyan.bold('   ',result.symbol,'   ')}
  ${c.bgCyan.underline(result.name.en, result.name.zh)}
  ${g.vice.multiline(result.image)}
  ${c.bgMagenta('Judgement:')}
  ${g.vice.multiline(result.judgment)}
   `);
};
// console.log(toss());
// console.log(generateLine());
console.log(generateHexagram());
// console.log(printHexagram());
