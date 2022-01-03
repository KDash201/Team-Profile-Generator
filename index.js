const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generatePage = require("./src/page-template");
const employeeArray = [];
const fs = require("fs");

// Create a Manager/Manger prompts
function createManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the Team Manager?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Manager's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the Manager's ID number?",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the Manager's ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the Manger's email address?",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the Manager's email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the Manger's office number?",
      validate: (officeNumberInput) => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log("Please enter the Team Manager's office number!");
          return false;
        }
      },
    },
    createEngineer(),
  ]);
}

function createEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the name of the Engineer?",
      validate: (engineerNameInput) => {
        if (engineerNameInput) {
          return true;
        } else {
          console.log("Please enter the Engineer's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the Engineer's ID number?",
      validate: (engineerIdInput) => {
        if (engineerIdInput) {
          return true;
        } else {
          console.log("Please enter the Engineer's ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the Engineer's email address?",
      validate: (engineerEmailInput) => {
        if (engineerEmailInput) {
          return true;
        } else {
          console.log("Please enter the Engineer's email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is the Engineer's GitHub username?",
    },
    createIntern(),
  ]);
}

function createIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the Intern name?",
      validate: (internNameInput) => {
        if (internNameInput) {
          return true;
        } else {
          console.log("Please enter the Intern's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "internId",
      message: "What is the Intern's ID number?",
      validate: (internIdInput) => {
        if (internIdInput) {
          return true;
        } else {
          console.log("Please enter the Engineer's ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the Intern's Email Address?",
      validate: (internEmailInput) => {
        if (internEmailInput) {
          return true;
        } else {
          console.log("Please enter the Intern's email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "internSchool",
      message: "What school did the Intern attend?",
    },
  ]);
};

createManager();
