const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = ['What is the title of your project?', 'Please write a description for your project', 'Are there any steps to install your project?', "Please explain the usage of your project", 'Which license should your project use?', 'Are there any rules for Contributing to your project', 'How to test your project', 'Please enter your email address for questions'

];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();