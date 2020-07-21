

// function to generate markdown for README
function generateMarkdown(data) {

var apache = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
var mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
var isc = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
var gnu3 = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
var badge = "";

if (data.license === "Apache 2.0") {
  badge = apache;
} else if (data.license === "MIT") {
  badge = mit;
} else if (data.license === "ISC") {
  badge = isc;
} else if (data.license === "GNU GPLv3") {
  badge = gnu3;
} else {
  badge = "";
};
  return `# ${data.title}

  ## Table of Contents
  * [Badge](#badge)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licensing](#licensing)
  * [Contribution](#contribution)
  * [Testing](#testing)
  * [Questions](#questions)

  ## Badge
  ${badge}

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Licensing
  ${data.license} 

  ## Contribution
  ${data.contribution}
  
  ## Testing
  ${data.testing}
  
  ## Questions
  Contact me at ${data.email} or visit my profile at https://github.com/${data.username}`;
}

module.exports = generateMarkdown;
