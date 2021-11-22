const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

teamProfile = [];

inquirer.prompt([
    {
    type: "input",
    name: 'managerName',
    message: "What is your name?",
    },
    {
    type: "input",
    name: 'managerId',
    message: "What is your ID?",
    },
    {
    type: "input",
    name: 'managerEmail',
    message: "What is your email?",
    },
    {
    type: "input",
    name: 'manager_office_number',
    message: "What is your office number?",
    },
    {
    type: "confirm",
    name: 'employeeConfirm',
    message: "Add an employee?",
    },
])
.then(managerData => {
    const Manager = new Manager (managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.manager_office_number)
    teamProfile.push(Manager)
    console.log("manager added")
    do {
        inquirer.prompt([
            {
            type: "rawlist",
            name: 'employeeChoice',
            choices: ["Engineer", "Intern"],
            message: "Choose an option",
            }
        ])
        .then((employeeData) => {
            if (employeeData.employeeChoice == "Engineer"){
                inquirer.prompt([
                    {
                    type: "input",
                    name: 'engineerName',
                    message: "What is your name?",
                    },
                    {
                    type: "input",
                    name: 'engineerId',
                    message: "What is your ID?",
                    },
                    {
                    type: "input",
                    name: 'engineerEmail',
                    message: "What is your email?",
                    },
                    {
                    type: "input",
                    name: 'engineerGithub',
                    message: "What is your Github?",
                    },
                    {
                    type: "confirm",
                    name: 'employeeConfirm',
                    message: "Add another employee?",
                    },
                ])
                .then((engineerData) => {
                var Engineer = new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.engineerGithub)
                teamProfile.push(Engineer)
                })
            }
            else {
                inquirer.prompt([
                    {
                    type: "input",
                    name: 'internName',
                    message: "What is your name?",
                    },
                    {
                    type: "input",
                    name: 'internId',
                    message: "What is your ID?",
                    },
                    {
                    type: "input",
                    name: 'internEmail',
                    message: "What is your email?",
                    },
                    {
                    type: "input",
                    name: 'internSchool',
                    message: "What is your school?",
                    },
                    {
                    type: "confirm",
                    name: 'employeeConfirm',
                    message: "Add another employee?",
                    },
                ])
                .then((internData) => {
                    var Intern = new Intern(internData.internData, internData.internId, internData.internEmail, internData.internSchool)
                    teamProfile.push(Intern)
                })
            }
        })
    }
    while(internData.employeeConfirm || engineerData.employeeConfirm)
})

