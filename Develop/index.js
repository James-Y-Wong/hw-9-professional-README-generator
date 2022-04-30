// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'My motivation to build this project is _____',
        name: 'motivation',
      },
      {
        type: 'input',
        message: 'Now this project will _____',
        name: 'result',
      },
      {
        type: 'input',
        message: 'This project solves _____',
        name: 'solve',
      },
      {
        type: 'input',
        message: 'What are the prerequisites for this project?',
        name: 'prerequisites',
      },
      {
        type: 'input',
        message: 'What are the packages that needs to be installed?',
        name: 'package',
        },
        {  
            type: 'input',
            message: 'What are the instructions to run this program?',
            name: 'usage',
        },

        
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
