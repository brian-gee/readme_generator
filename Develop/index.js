// Import necessary packages
import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';

// Array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is your project title?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Give a short description of your project.',
    },
    {
      name: 'installation_instructions',
      type: 'input',
      message: 'What steps are required to install your project?'
    },
    {

      name: 'usage_information',
      type: 'input',
      message: 'Input usage information.'
    },
    {

      name: 'contribution_guidelines',
      type: 'input',
      message: 'Input contribution guidelines.'
    },
    {

      name: 'test_instructions',
      type: 'input',
      message: 'Input test instructions.'
    },
    {
        name: 'license',
        type: 'rawlist',
        message: 'What license will your project use?',
        choices: ['None', 'Apache License 2.0', 'Gnu General Public License v3.0', 'MIT License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        default: 'None',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
        console.log('File created successfully');
    })

}

// Function to initialize app
function init() {
    console.log('Welcome to Brian\'s README Generator V1.0');
    inquirer.prompt(questions).then((answers) => {
    writeToFile('README.md', generateMarkdown(answers));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log('Prompt couldn\'t be rendered in the current environment');
    } else {
      // Something else went wrong
      console.log('Something else went wrong');
    }
  });
}


// Function call to initialize app
init();