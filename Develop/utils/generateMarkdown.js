// function to generate markdown for README
function generateMarkdown(data) {
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
