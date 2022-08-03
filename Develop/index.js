// TODO: Include packages needed for this application
import inquirer from 'inquirer';

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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    /* Pass your questions in here */
    ...questions

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}


// Function call to initialize app
init();
