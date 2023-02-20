//------------Global References:
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");
//-------------Arrays for each Class; Manager, Engineer, Intern and Employee:
const managers = [];
const engineers = [];
const interns = [];
const employee =[];
//-------------Const for Manager Questions (Answers will be Caught in an Array):
const managerQuestions = [
{
    type: 'input',
    message: 'What is the Team Mangers Name?',
    name: 'name',
    validate: (nameInput) => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please Enter your Name!");
            return false;
        }
    }
  },
  {
    type: 'input',
    message: 'What is the Team Mangers ID?',
    name: 'id',
    validate: (idInput) => {
        if (idInput) {
            return true;
        } else {
            console.log("Please Enter a Valid ID!");
            return false;
        }
    }
  },
  {
      type: 'input',
      message: 'What is the Team Mangers Email?',
      name: 'email',
      validate: (emailInput) => {
        if (emailInput) {
            return true;
        } else {
            console.log("Please Enter a Valid Email Address!");
            return false;
        }
    }
  },
  {
    type: 'input',
    message: 'What is the Team Mangers office number?',
    name: 'officeNumber',
    validate: (officeNumberInput) => {
        if (officeNumberInput) {
            return true;
        } else {
            console.log("Please Enter the Valid Office Number!");
            return false;
        }
    }
  },
];
//-------------Const for Engineer Questions (Answers will be Caught in an Array):
const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the Teams Engineers Name?',
        name: 'name',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please Enter the Engineers Name!");
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'What is the Engineers ID?',
        name: 'id',
        validate: (idInput) => {
            if (idInput) {
                return true;
            } else {
                console.log("Please Enter a Valid ID!");
                return false;
            }
        }
      },
      {
          type: 'input',
          message: 'What is the Engineers Email?',
          name: 'email',
          validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please Enter a Valid Email Address!");
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'What is the Engineers GitHub UserName?',
        name: 'github',
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please Enter a Valid GutHub UserName!");
                return false;
            }
        }
      },
    ];
//-------------Const for Intern Questions (Answers will be Caught in an Array):
const internQuestions = [
    {
        type: 'input',
        message: 'What is the Teams Intern Name?',
        name: 'name',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please Enter the Interns Name!");
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'What is the Interns ID?',
        name: 'id',
        validate: (idInput) => {
            if (idInput) {
                return true;
            } else {
                console.log("Please Enter a Valid ID!");
                return false;
            }
        }
      },
      {
          type: 'input',
          message: 'What is the Interns Email?',
          name: 'email',
          validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please Enter a Valid Email Address!");
                return false;
            }
        }
      },
      {
        type: 'input',
        message: 'What is the Interns School?',
        name: 'school',
        validate: (schoolInput) => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please Enter a School!");
                return false;
            }
        }
      },
    ];

//-------------Function to prompt the user to input for first round of Data relating to the Manager:
function promptData() {
    inquirer.prompt(managerQuestions)
        .then((managerAnswers) => {
            //----Creates/Captures User input for the Manager class:
            const manager = new Manager(managerAnswers.name,managerAnswers.id,managerAnswers.email,managerAnswers.officeNumber);
            //console.log(manager);
            //----Pushes the Captured Manager input and pushes into the teamMembers array:
            employee.push(manager);
            //----Calls the function to prompt for additional team members, and aslo catches and logs any errors:
            promptTeamMembers();
        })
        .catch((error) => {
            console.error(error);
        });
    }
//-------------Function that prompts the user to add details for additional team members:
function promptTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamMemberType',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members thank you']
        }
    ])
    .then((answer) => {
        switch (answer.teamMemberType) {
            case "Engineer":
                inquirer.prompt(engineerQuestions)
                    .then((engineerAnswers) => {
                        //----Creates/Captures User input for the Manager class:
                        const engineer = new Engineer(engineerAnswers.name,engineerAnswers.id,engineerAnswers.email,engineerAnswers.github);
                        //----Pushes the Captured Manager input and pushes into the teamMembers array:
                        employee.push(engineer);
                        //----Calls the function to prompt for additional team members, and aslo catches and logs any errors:
                        promptTeamMembers();
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                break;
            case "Intern":
                inquirer.prompt(internQuestions)
                    .then((internAnswers) => {
                        //----Creates/Captures User input for the Manager class:
                        const intern = new Intern(internAnswers.name,internAnswers.id,internAnswers.email,internAnswers.school);
                        //----Pushes the Captured Manager input and pushes into the teamMembers array:
                        employee.push(intern);
                        //----Calls the function to prompt for additional team members, and aslo catches and logs any errors:
                        promptTeamMembers();
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                break;
            case "I do not want to add any more team members thank you":
                // call the function to generate the HTML file
                //const html = generateHTML(employee);
                //console.log( template.generateHTML(employee));
                fs.writeFile('./dist/index.html',  template.generateHTML(employee), err => {
                if (err) throw err;
                console.log("Team Profile successfully generated! Check out the HTML file in /dist folder!");
                })
            }
        })
    };
//-------------Initialize the Appplication along with Prompts for the User:
function init() {
    console.log("Welcome to the Team Generator!");
    console.log("Use `npm run reset` to reset the dist/folder");
    console.log("Please build your team! 👥");
    promptData();
};
init();