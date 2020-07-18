const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// array of questions for user
const questions = [
    inquirer.prompt([
        {
          type: "input",
          message: "What is your GitHub name?", 
          name: "username" 
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
          message: "Select the appropriate badge for your project:",
          name: "badge",
          choices: ["x", "y", "z"]
        }
        
      ])

];

const markdownInfo = 
`# ${questions.name}

## Description

## Table of Contents

## Installation
${questions.installation}

## Usage
${questions.usage}

## Contribution
${questions.contribution}

## Testing
${questions.testing}

## Badges
${questions.badge}

## Questions
Contact me at ${username} on GitHub`

// // function to write README file
// function writeToFile(fileName, data) {
// }
fs.writeFile("README.md", markdownInfo, function (err){
  if (err) {
    return console.log(err);
  }
  console.log("Successfully created README.md!");
})
// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
