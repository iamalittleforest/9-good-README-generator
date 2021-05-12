// import external packages
const inquirer = require("inquirer");
const fs = require("fs");

// import generateMarkdown module
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project Title: ",
  },
  {
    type: "input",
    name: "description",
    message: "Description: "
  },
  {
    type: "input",
    name: "installation",
    message: "Installation Instructions: ",
    default: "npm i"
  },
  {
    type: "input",
    name: "usage",
    message: "Usage Information: "
  },
  {
    type: "list",
    name: "license",
    message: "License: ",
    choices: ["MIT", "Apache 2.0", "GPLv3", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "contributing",
    message: "Contribution Guidelines: "
  },
  {
    type: "input",
    name: "tests",
    message: "Test Instructions",
    default: "npm test"
  },
  {
    type: "input",
    name: "username",
    message: "Enter GitHub username: "
  },
  {
    type: "input",
    name: "email",
    message: "Enter email address: "
  }];

// function to generate REAMDE file based on user input
function init() {
  inquirer.prompt(questions)
    .then((data) => writeToFile("./output/README_sample.md", generateMarkdown(data)));
};
  
// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('README file generated')
  );
}

// initialize
init();
