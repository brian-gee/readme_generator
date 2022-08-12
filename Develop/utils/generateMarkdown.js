// Returns a license badge based on which license is passed in if there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

// Returns the license link if there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return (`- [License](#license)`)
  }
  return ''
}

// Function that returns the license section of README if there is no license, return an empty string
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

Github - [${data.questions_username}](https://github.com/${data.questions_username})

Email - [Send me a message](mailto:${data.questions_email})


${renderLicenseSection(data.license)}
`;
}

export { generateMarkdown };