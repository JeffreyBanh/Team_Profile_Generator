const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const htmlTemplate = require("./src/htmlTemplate");

let repeat = true;
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
            type: "confirm",
            name: "employeeAdd",
            message: "Add employee?",
        }
    ]).then((data) => {
        return data.employeeAdd
    })
}

async function employeePrompt(){
        do{ 
        await inquirer.prompt([
            {
            type: "rawlist",
            name: 'employeeChoice',
            choices: ["Engineer", "Intern"],
            message: "Choose an option",
            }
        ])
        .then(async (employeeData) => {
            if (employeeData.employeeChoice == "Engineer"){
                await inquirer.prompt([
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
                .then(async (engineerData) => {
                var engineer = new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.engineerGithub)
                teamProfile.push(engineer)
                })
            }
            else {
                await inquirer.prompt([
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
                .then(async (internData) => {
                    var intern = new Intern(internData.internName, internData.internId, internData.internEmail, internData.internSchool)
                    teamProfile.push(intern)
                })
            }
        })
        repeat = (
            await inquirer.prompt([
            {
                type: "confirm",
                name: "repeat",
                message: "Do you want to add another employee?",
            },
            ])
        ).repeat;
    }while(repeat)}

function generateCard(data){
    var cardArray = [];
    for (var i = 0; i < data.length; i++){
        if (data[i].getRole() == 'Manager'){
            cardArray.push(htmlTemplate.generateManager(data[i]))
        }
        else if (data[i].getRole() == "Engineer"){
            cardArray.push(htmlTemplate.generateEngineer(data[i]))
        }
        else if (data[i].getRole() == "Intern"){
            cardArray.push(htmlTemplate.generateIntern(data[i]))
        }
    }
    return (cardArray)
}

function writeFile(data){

    fs.writeFile('./dist/index.html', htmlTemplate.generate_team_page(generateCard(data)), err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}

async function main(){
    await managerPrompt()
    var x = await addEmployeePrompt()
    if(x){
    await employeePrompt()
    }
    await writeFile(teamProfile)
}

main()




