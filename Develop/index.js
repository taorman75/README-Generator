const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const path = require('path');

const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [

        {
          type: "input",
          message: "What is your GitHub username?", 
          name: "username" 
        },
        {
          type: "input",
          message: "What is your email address?", 
          name: "email" 
        },
        {
            type: "input",
            message: "What is your project title?", 
            name: "title" 
          },
          {
            type: "input",
            message: "Add a short description of your project.", 
            name: "description" 
          },
          {
            type: "input",
            message: "Enter your installation instructions.", 
            name: "installation" 
          },
          {
            type: "input",
            message: "Enter your usage information.", 
            name: "usage" 
          },
          {
            type: "input",
            message: "Enter your contribution guidelines.", 
            name: "contribution" 
          },
          {
            type: "input",
            message: "Enter your testing instructions.", 
            name: "testing" 
          },
        {
          type: "list",
          message: "Select the appropriate license for your project:",
          name: "license",
          choices: ["MIT", "ISC", "GNU GPLv3"]
        }

];



// function to write README file
function writeToFile(fileName, data) {

return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}
// function to initialize program
function init() {
  inquirer.prompt(questions).then(data => writeToFile("README.md", generateMarkdown(data)));
}

// function call to initialize program
init();
