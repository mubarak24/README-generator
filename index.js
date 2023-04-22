// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is your project name',
    },

    {
        type: 'input',
        name: 'Description',
        message: 'README description',
    },

    {
        type: 'input',
        name: 'Installation',
        message: 'installation instructions',
    },

    {
        type: 'input',
        name: 'Usage',
        message: 'usage information',
    },

    {
        type: 'input',
        name: 'Contributing',
        message: 'contribution guidelines',
    },

    {
        type: 'input',
        name: 'Tests',
        message: 'test instructions',
    },

    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github username?',
    },

    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
    },
];
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
