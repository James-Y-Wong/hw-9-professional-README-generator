// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
     {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      }, 
    //   {
    //     type: 'input',
    //     message: 'My motivation to build this project is _____',
    //     name: 'motivation',
    //   },
    //   {
    //     type: 'input',
    //     message: 'Now this project will _____',
    //     name: 'result',
    //   },
    //   {
    //     type: 'input',
    //     message: 'This project solves _____',
    //     name: 'solve',
    //   },
    //   {
    //     type: 'input',
    //     message: 'What are the prerequisites for this project?',
    //     name: 'prerequisites',
    //   },
    //   {
    //     type: 'input',
    //     message: 'What are the packages that needs to be installed?',
    //     name: 'package',
    //     },
    //     {  
    //         type: 'input',
    //         message: 'What are the instructions to run this program?',
    //         name: 'usage',
    //     },
        {
            type: 'list',
            message: 'What license do you want to use?',
            choices: ['MIT', 'Apache 2.0', 'BSD 3-Clause', 'BSD 2-Clause', 'GPLv3', 'None'],
            name: 'license',
        },
        // {
        //     type: 'input',
        //     message: 'What is the copyright year?',
        //     name: 'year',
        // },
        // {
        //     type: 'input',
        //     message: 'Who is the copyright owner?',
        //     name: 'owner',
        // },
        // {
        //     type: 'input',
        //     message: 'What is the repository name?',
        //     name: 'contributing',
        // },
        // {
        //     type: 'list',
        //     message: 'Is there a test written for this application?',
        //     choices: ['yes', 'no'],
        //     name: 'test',
        // },
        // {
        //     type: 'input',
        //     message: 'What command line to run test?',
        //     name: 'command',
        // },
        // {
        //     type: 'input',
        //     message: 'What is your GitHub username?',
        //     name: 'github',
        // },
        // {
        //     type: 'input',
        //     message: 'What is your email address?',
        //     name: 'email',
        // },
    
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const fileName = "README.md";
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data)
    })
};

// Function call to initialize app
init();
