// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Project',
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
    ]);
};

// TODO: Create a function to write README file
const writeToFile = ({Project, Description, Github, Email, Tests, Installation, Usage, Contributing, Badges, License}) =>
`# Name
${Project}

## Description
${Description, Github, Email}

## Badges
${Badges}

## Tests
${Tests}

## Installation
${Installation}

## Usage
${Usage}

## Contributing
${Contributing}

## License
${License}`;

// TODO: Create a function to initialize app
const init = () => { 
    questions()
    .then((answers) => fs.writeFile('Quality README.md', writeToFile(answers),
    (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        }
      }))}

// Function call to initialize app
init();
