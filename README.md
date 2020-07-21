# README-Generator (https://github.com/taorman75/README-Generator)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)

## Description

This README generator creates a customized README.md file based on the user's answers to a series of prompts in Node.JS. The generated README will include the following sections: Title, Table of Contents, Badge , Description, Installation, Usage, Licensing, Contribution, Testing, and Questions. 

In the Table of Contents, a reader may click on any subheading in the TOC to be taken immediately to that subheading. The Badge section displays an image of the badge associated with the license that the user picked for their application (unless they pick "none" at that prompt). In the Questions section, a link to the user's GitHub page is generated and their email address is displayed.

## Installation

A user of this application must install the npm "Inquirer" package in order for the prompts to work properly. More details about "Inquirer" may be found at https://www.npmjs.com/package/inquirer.

![npm install inquirer screen shot](https://github.com/taorman75/README-Generator/blob/master/Develop/NPMInquirerInstall.jpg)

## Usage
To begin, the user must open the README-Generator file in the command line, then change directory to Develop. Once in Develop, type "node index.js" to begin the program.

![README program start screen shot](https://github.com/taorman75/README-Generator/blob/master/Develop/ProgramStart.jpg)

At each prompt, type in your responses. The last prompt will allow you to - using the up/down arrow keys - to select an appropriate license for your project.

![README questions screen shot](https://github.com/taorman75/README-Generator/blob/master/Develop/QuestionDemo.jpg)

The generated README.md file will look like this (written in markdown language):

![README questions screen shot](https://github.com/taorman75/README-Generator/blob/master/Develop/GeneratedREADME.jpg)


## Questions

Questions about this application may be directed to *tana.owens@gmail.com* or visit my GitHub profile at https://github.com/taorman75