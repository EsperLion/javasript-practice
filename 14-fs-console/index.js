#!/usr/bin/env node
const readline = require('readline');
const fs = require('fs');

const tempPath = {
  'class': './templates/class.template.js'
};


const rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '$ tt-fe-cli > '
});

rli.prompt();

rli
  .on('line', (line) => {
    // const args = line.split('');
    console.log(`You said: ${line}`);
    rli.prompt();
  })
  .on('close', () => {
    console.log('Good bye');
    process.exit(0);
  });


  function createClass () {


  }

  function readFile (path) {

  }



