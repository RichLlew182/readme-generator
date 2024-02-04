const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: function (input) {
      // If the input is an empty string, alert that user must enter a title
      return input !== '' ? true : 'You must enter a title of your project';
    }
  },
  {
    type: 'input',
    message: 'Please write a description for your project',
    name: 'description',
    validate: function (input) {
      // If the input is an empty string, alert that user must enter a description
      return input !== '' ? true : 'You must enter a description of your project';
    }
  },
  {
    type: 'input',
    message: 'Please outline any steps to install your project. If there are none please type N/A or press enter.',
    name: 'installation',
    filter: function (input) {
      // If the input is an empty string, change it to 'N/A'
      return input === '' ? 'N/A' : input;
    }
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
    name: 'contributing',
    filter: function (input) {
      // If the input is an empty string, change it to 'N/A'
      return input === '' ? 'N/A' : input;
    }
  },
  {
    type: 'input',
    message: 'Please outline any steps for testing your project. If there are none please type N/A or press enter.',
    name: 'tests',
    filter: function (input) {
      // If the input is an empty string, change it to 'N/A'
      return input === '' ? 'N/A' : input;
    }
  },
  {
    type: 'input',
    message: 'Please enter your GitHub username.',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Please enter your email address.',
    name: 'email',
    validate: function (input) {
      const emailCheck = /\S+@\S+\.\S+/;
      return emailCheck.test(input) ? true : 'You must enter a valid email address'
    }
  },

];

// function to write README file
function writeToFile(fileName, data) {

  // Switch statement that checks the answer to the license question and adds the relevant badge and URL for that license
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

  //function to wriet to file which takes in the filename from the init function, then passes the response data into the generateMarkdown function

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