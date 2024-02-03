const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please write a description for your project',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please any steps to install your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please explain the usage of your project',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Which license should your project use?',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0']
  },
  {
    type: 'input',
    message: 'Are there any rules for Contributing to your project',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Are there any steps for testing your project',
    name: 'testing',
  },
  {
    type: 'input',
    message: 'Please enter your email address for questions',
    name: 'questions',
  },

];

// function to write README file
function writeToFile(fileName, data) {

  // let licenseBadge;
  // let licenseURL;

  // if (data.license === 'MIT') {
  //   licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
  //   licenseURL = 'https://opensource.org/licenses/MIT'
  // }

  switch (data.license) {
    case 'MIT':
      licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      licenseURL = 'https://opensource.org/licenses/MIT'
      break;
    case 'Apache 2.0':
      licenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
      licenseURL = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPL 3.0':
      licenseBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      licenseURL = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    default:
      console.log('No License Selected')
      break;
  }


  fs.writeFile(fileName, (generateMarkdown(data)), (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('success')
    }
  })
}

// function to initialize program
function init() {

  inquirer
    .prompt(questions)
    .then((response) =>
      response ?
      (console.log(response), writeToFile('output/README.md', response)) :
      console.log('You forgot to answer')
    );

}

// function call to initialize program
init();