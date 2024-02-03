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
    message: 'Please outline any steps to install your project. If there are none please type N/A or press enter.',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please explain the usage of your project.',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Which license should your project use?',
    name: 'license',
    choices: ['Apache 2.0', 'Boost 1.0', 'BSD 3-Clause License', 'Creative Commons CC0', 'GPL 3.0', 'MIT']
  },
  {
    type: 'input',
    message: 'Please outline any rules for contributing to your project. If there are none please type N/A or press enter.',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Please outline any steps for testing your project. If there are none please type N/A or press enter.',
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
    case 'Creative Commons CC0':
      licenseBadge = 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg';
      licenseURL = 'http://creativecommons.org/publicdomain/zero/1.0/';
      break;
    case 'Boost 1.0':
      licenseBadge = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
      licenseURL = 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    case 'BSD 3-Clause License':
      licenseBadge = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
      licenseURL = 'https://opensource.org/licenses/BSD-3-Clause';
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