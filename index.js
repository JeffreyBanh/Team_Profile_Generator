const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var employeeBoolean = true;

teamProfile = [];

function managerPrompt(){
return inquirer.prompt([
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
])
.then((managerData) => {
    const manager = new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.manager_office_number)
    teamProfile.push(manager)
})
}


function addEmployeePrompt(){
    return inquirer.prompt([
        {
            type: "type",
            name: "employeeAdd",
            message: "How many employee do you want to add?",
        }
    ]).then((data) => {
        return data.employeeAdd
    })
}

function employeePrompt(){
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
                ])
                .then((engineerData) => {
                var engineer = new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.engineerGithub)
                teamProfile.push(engineer)
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
                ])
                .then((internData) => {
                    var intern = new Intern(internData.internName, internData.internId, internData.internEmail, internData.internSchool)
                    teamProfile.push(intern)
                })
            }
        })
    }


async function main(){
    await managerPrompt()
    var x = await addEmployeePrompt()
    for (var i = 0; i <= x; i++){
        return employeePrompt()
    }
    
}

main()