// const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

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
    message: 'Are there any steps to install your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please explain the usage of your project',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Which license should your project use?',
    name: 'license',
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
// function writeToFile(fileName, data) {}

// function to initialize program
// function init() {



// }

// function call to initialize program
// init();

inquirer
  .prompt(questions)
  .then((response) =>
    response ?
    console.log(response) :
    console.log('You forgot to answer')
  );