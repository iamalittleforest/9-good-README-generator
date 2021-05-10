// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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
    choices: []
  },
  {
    type: "input",
    name: "contributing",
    message: "Contribution Guidelines: "
  },
  {
    type: "input",
    name: "tests",
    message: "Test Instructions"
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('README file generated')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((data) => writeToFile("README.md", generateMarkdown(data)));
};

// Function call to initialize app
init();
