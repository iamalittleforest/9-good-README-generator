// create an object that holds all of the licenses images and links
const licenses = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Apache 2.0": "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)",
  "BSD 3": "[![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${licenses[data.license] || ""}

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
Run the following command to install:
\`\`\`
${data.installation}
\`\`\`

## Usage
Run the following command to use:
\`\`\`
${data.usage}
\`\`\`

## License
This project is licensed under the ${data.license} License.

## Contributing
${data.contributing}

## Tests
Run the following command to test:
\`\`\`
${data.tests}
\`\`\`

## Questions
If you have any questions, contact me directly at ${data.email}. See more of my work by visiting my [GitHub Profile](https://github.com/${data.username}/).
`;
}

// export generateMarkdown module
module.exports = generateMarkdown;
