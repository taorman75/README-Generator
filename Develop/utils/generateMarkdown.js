// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  
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
