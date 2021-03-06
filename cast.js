#!/usr/bin/env node
const hexagrams = require("./hexagrams");
const program = require("commander");
const c = require("chalk");
const g = require("gradient-string");
const ora = require("ora");

console.log(`To cast: call 'iching -c' or 'iching --cast
Help menu: call 'iching -h' or 'iching --help'
`)

// * Configures options to pass for CLI
program
  .option("-c, --cast", "Cast reading")
  .description("Consult the I-Ching straight from your Command Line.")
  .parse(process.argv);

if (program.cast) {
  const spinner = ora("Consulting the Oracle").start();

  setTimeout(() => {
    spinner.spinner = "flip";
    spinner.color = "yellow";
    spinner.text = "Casting Coins";
  }, 1000);
  setTimeout(() => {
    spinner.spinner = "hamburger";
    spinner.color = "white";
    spinner.text = "Generating Hexagrams";
  }, 2000);
  setTimeout(() => {
    spinner.spinner = "star";
    spinner.color = "white";
    spinner.text = "Delivering Reading";
  }, 3000);
  setTimeout(() => {
    spinner.succeed();
  }, 4000);
  setTimeout(() => {
    return generateHexagram();
  }, 4500);
}

const toss = () => {
  // * traditional calculations to generate i-ching from coin flips assign 'heads' the value of 3 and 'tails' the value of two.
  return Math.floor(Math.random() * 2) === 0 ? 3 : 2;
};
const generateLine = () => {
  // * Each line's value is the sum of the values generated by the toss of three coins
  return toss() + toss() + toss();
};

const generateHexagram = () => {
  // * Each hexagram is composed of 6 lines
  let hexagram = "";
  for (let i = 0; i < 6; i++) {
    hexagram += generateLine();
  }
  convertHexagrams(hexagram);
};

const convertHexagrams = hexagram => {
  // * Lines with a value of 6 or 9 are considered "changing" and as a result, a second hexagram is generated
  let changing = false;
  let primary = "";
  let relating = "";
  for (let i = 0; i < hexagram.length; i++) {
    if (hexagram[i] === "6") {
      changing = true;
      primary += 8;
      relating += 7;
    } else if (hexagram[i] === "9") {
      changing = true;
      primary += 7;
      relating += 8;
    } else {
      primary += hexagram[i];
      relating += hexagram[i];
    }
  }
  if (changing) {
    logFormat(primary, "Primary");
    logFormat(relating, "Relating");
  } else {
    logFormat(primary, "Primary");
  }
};

const locateHexagram = hex => {
  hex = Number(hex);
  const found = hexagrams.find(e => {
    return e.pattern === hex;
  });
  return found;
};

const logFormat = (type, label) => {
  const result = locateHexagram(type);
  console.log(`
  ${c.cyan(label, ":")}
  ${c.bgCyan.bold("   ", result.symbol, "   ")}
  ${c.bgCyan.underline(result.name.en, result.name.zh)}
  ${g.vice.multiline(result.image)}
  ${c.bgMagenta("Judgement:")}
  ${g.vice.multiline(result.judgment)}
   `);
};
