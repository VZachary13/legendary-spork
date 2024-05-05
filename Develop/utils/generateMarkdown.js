// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {return ''}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseURLs = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'APACHE2.0': 'https://opensource.org/licenses/Apache-2.0',
    'Boost1.0': 'https://opensource.org/licenses/BSL-1.0',
   'MPL2.0': 'https://opensource.org/licenses/MPL-2.0',
    'BSD2': 'https://opensource.org/licenses/BSD-2-Clause',
    'BSD3': 'https://opensource.org/licenses/BSD-3-Clause',
    // Add more licenses and their URLs as needed
  };
  if (license !== 'None'){
    return `${licenseURLs[license]}`;
  } else {return ''}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License

${license} License
${renderLicenseBadge(license)}
${renderLicenseLink(license)}`
  } else {return ''}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

  -[Description](#description)

  -[Installation](#installation)

  -[Screenshot](#screenshot)

  -[Usage](#usage)

  -[Contributions](#contributions)

  -[Contacts](#contacts)

## Description

${data.description}

## Installation

${data.installation}

## Screenshot

![Project Screenshot](${data.screenshot})
### deployed page --> ${data.link}

## Usage

${data.usage}

walkthrough Video - ${data.video}

${renderLicenseSection(data.license)}

## Contributions

${data.contributions}

## Contacts

E-mail - ${data.email}

GitHub - ${data.github}
`;
}

module.exports = generateMarkdown;
