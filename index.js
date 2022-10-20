const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const teamMembers = [];
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const DES_DIR = path.resolve(__dirname, 'design');
const desPath = path.join(DES_DIR, 'team.html');
const render = require('./src/page-template');
const idArr = [];

console.log('\n Welcome to the Team Generator\n Use NPM Run Reset to reset the design folder')

function appMenu() {
    function createManager() {
        console.log('Start building your team')
        inquirer.prompt([
            {
                type: 'input',
                name: 'tmName',
                message: 'What is the team managers name?',
                validate: (answer) => {
                    if (answer !== '') {
                        return true
                    }
                    return 'Please enter at least one character'
                }
            },
            {
                type: 'input',
                name: 'tmId',
                message: 'What is the team managers id?',
                validate: (answer) => {
                    const ok = answer.match(/^[1-9]\d*$/);
                    if (ok) {
                        return true
                    }
                    return 'Please enter positive number greater than zero'
                }
            },
            {
                type: 'input',
                name: 'tmEmail',
                message: 'What is the team managers email address?',
                validate: (answer) => {
                    const ok = answer.match(/\S+@\S+\.\S+/);
                    if (ok) {
                        return true
                    }
                    return 'Please enter a valid email address'
                }
            },
            {
                type: 'input',
                name: 'tmOffice',
                message: 'What is the team managers office number?',
                validate: (answer) => {
                    const ok = answer.match(/^[1-9]\d*$/);
                    if (ok) {
                        return true
                    }
                    return 'Please enter positive number greater than zero'
                }
            },
        ])
        .then((answers) => {
            const manager = new Manager (
                answers.tmName, 
                answers.tmId,
                answers.tmEmail,
                answers.tmOffice
            );
            teamMembers.push(manager);
            idArr.push(answers.tmId);
            createTeam();
        });
    }
    function createTeam() {
        inquirer.prompt ()
        .then((userChoice) => {
            switch(userChoice.type) {
                case 'Engineer': 
                addEngineer();
                break;
            }
        })
    }
}
const tmQuestions = [

    {
        type: 'list',
        name: 'type',
        message: 'What type of team member would you like to add next?',
        choices: teamMembers
    },
    ];

    const enQuestions = [
    {
        type: 'input',
        name: 'enName',
        message: 'What is your engineers name?'
    },
    {
        type: 'input',
        name: 'enId',
        message: 'What is your engineers id?'
    },
    {
        type: 'input',
        name: 'enEmail',
        message: 'What is your engineers email?'
    },
    {
        type: 'input',
        name: 'enGithub',
        message: 'What is your engineers Github username?'
    },
    {
        type: 'list',
        name: 'type',
        message: 'What type of team member would you like to add next?',
        choices: teamMembers
    },
    ];
    const inQuestions = [
    {
        type: 'input',
        name: 'inName',
        message: 'What is your interns name?'
    },
    {
        type: 'input',
        name: 'inId',
        message: 'What is your interns id?'
    },
    {
        type: 'input',
        name: 'inEmail',
        message: 'What is your interns email?'
    },
    {
        type: 'input',
        name: 'inSchool',
        message: 'What is your interns school?'
    },
    {
        type: 'list',
        name: 'type',
        message: 'What type of team member would you like to add next?',
        choices: teamMembers
    },
    ];
        
    // inquirer.prompt(tmQuestions)
    //     .then(function(answers){
    //         console.log(answers)
    // })
    // inquirer.prompt(enQuestions)
    //     .then(function(answers){
    // })
    // inquirer.prompt(inQuestions)
    //     .then(function(answers){
    // })
    //     .catch(function(){
    // })
   
    
// function to write file
    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(),  fileName), data);
     }

// function to initialize app
function init() {
    inquirer.prompt(questions).then(answer => {
        console.log('Creating...');
        writeToFile('index.html', generateMarkdown({ ...answer }));
    })
}

// function call to initialize
init();