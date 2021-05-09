// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "",
  },
  {
    type: "input",
    name: "description",
    message: ""
  },
  {
    type: "input",
    name: "installation",
    message: "",
  },
  {
    type: "input",
    name: "usage",
    message: ""
  },
  {
    type: "list",
    name: "license",
    message: "",
    choices: []
  },
  {
    type: "input",
    name: "contributing",
    message: ""
  },
  {
    type: "input",
    name: "tests",
    message: ""
  },
  {
    type: "input",
    name: "questions",
    message: ""
  },
  {
    type: "input",
    name: "username",
    message: ""
  },
  {
    type: "input",
    name: "email",
    message: ""
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
