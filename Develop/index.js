// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "project_title",
        type: "input",
        message: "What is your project title?",
    },
    {
        name: "project_description",
        type: "input",
        message: "Give a short description of your project.",
    },
    {
        name: "install_steps",
        type: "input",
        message: "What are the steps required to install your project?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
        console.log("File created successfully");
    })

}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to Brian's README Generator V1.0");
    inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README.md", "test")
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
