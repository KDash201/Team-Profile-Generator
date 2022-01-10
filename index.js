const { writeFile } = require("./src/generate-site");

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const render = require("./src/page-template.js");

const employeeArray = [];

function initMenu() {
  // Create Manager prompts
  function createManager() {
    console.log("Create your team");
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the name of the Team Manager?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter the Manager's name!";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the Manager's ID number?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return "Please enter the Manager's ID!";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the Manager's email address?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Please enter the Manager's email address!";
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the Manager's office number?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return "Please enter the Manager's Office Number!";
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerID,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        employeeArray.push(manager);
        teamBuild();
      });
  }

  function teamBuild() {
    // Choice to add more members or complete team build
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I do not want to add anymore team members",
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;
          default:
            genTeam();
        }
      });
  }

  // Create Engineer prompts
  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the name of the Engineer?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter the Engineer's name!";
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the Engineer's ID number?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return "Please enter the Engineer's ID!";
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the Engineer's email address?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Please enter the Engineer's email address!";
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the Engineer's GitHub username?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter the Engineer's GitHub username!";
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerID,
          answers.engineerEmail,
          answers.engineerOfficeNumber
        );
        employeeArray.push(engineer);
        teamBuild();
      });
  }

  // Create Intern prompts
  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the name of the Intern?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter the Intern's name!";
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is the Intern's ID number?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return "Please enter the Intern's ID!";
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the Intern's email address?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Please enter the Intern's email address!";
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is the Intern's School?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter the Intern's School!";
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internID,
          answers.internEmail,
          answers.internOfficeNumber
        );
        employeeArray.push(intern);
        teamBuild();
      });
  }

  // Generate team/Write to Html
  function genTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(employeeArray), "utf-8");
  }

  createManager();
  
}

initMenu();