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
          message: "Select the appropriate license for your project (use arrow keys).",
          name: "license",
          choices: ["Apache 2.0", "MIT", "ISC", "GNU GPLv3", "None"]
        }

];

var apache = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
var mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
var isc = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
var gnu3 = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";


if (questions.license === "Apache 2.0") {
  let badge = apache;
} else if (questions.license === "MIT") {
  let badge = mit;
} else if (questions.license === "ISC") {
  let badge = isc;
} else if (questions.license === "GNU GPLv3") {
  let badge = gnu3;
} else {
  let badge = "None";
}

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
