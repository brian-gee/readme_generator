// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return (`- [License](#license)`)
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return (
      `## License

      Licensed under the ${license} license.`
      )
  }
  return ''
}

// Generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation Steps](#installation-steps)
- [Usage Information](#usage-information)
- [Contributing Guidelines](#contributing-guidelines)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation Steps

${data.installation_instructions}

## Usage Information

${data.usage_information}


## Contributing Guidelines

${data.contribution_guidelines}

## Tests
\`\`\`
${data.test_instructions}
\`\`\`

## Questions

${data.questions_username} - [Email](${data.questions_email})


${renderLicenseSection(data.license)}
`;
}

export { generateMarkdown };