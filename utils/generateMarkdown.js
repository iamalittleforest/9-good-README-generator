// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(`${data.license}` === "MIT") {
    return "![GitHub](https://img.shields.io/badge/license-MIT-blueviolet)";
  } else if (`${data.license}` === "Apache 2.0") {
    return "![GitHub](https://img.shields.io/badge/license-Apache%202.0-blueviolet)";
  } else if (`${data.license}` === "GPLv3") {
    return "![GitHub](https://img.shields.io/badge/license-GPLv3-blueviolet)";
  } else if (`${data.license}` === "BSD 3") {
    return "![GitHub](https://img.shields.io/badge/license-BSD%203-blueviolet)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} License.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, contact me directly at ${data.email}. See more of my work by visiting my [GitHub Profile](https://github.com/${data.username}/).
`;
}

// export generateMarkdown module
module.exports = generateMarkdown;
