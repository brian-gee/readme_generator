// Import necessary packages
import inquirer from 'inquirer';
import fs from "fs";
import { generateMarkdown } from './utils/generateMarkdown.js';

// Array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is your project title?",
    },
    {
        name: "description",
        type: "input",
        message: "Give a short description of your project.",
    },
    {
        name: "license",
        type: "input",
        message: "What are the steps required to install your project?",
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
        console.log("File created successfully");
    })

}

// Function to initialize app
function init() {
    console.log("Welcome to Brian's README Generator V1.0");
    inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else went wrong
      console.log("Something else went wrong");
    }
  });
}


// Function call to initialize app
init();