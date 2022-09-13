const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown');
const { choices } = require('yargs');
const teamMembers = ['Team Manager', 'Engineer', 'Intern', 'I dont want to add a team member']
// const questions = require('./questions')
// console.log(questions)

const tmQuestions = [
    {
    type: 'input',
    name: 'tmName',
    message: 'What is the team managers name?'
    },
    {
        type: 'input',
        name: 'tmId',
        message: 'What is the team managers id?'
    },
    {
        type: 'input',
        name: 'tmEmail',
        message: 'What is the team managers email address?'
    },
    {
        type: 'input',
        name: 'tmOffice',
        message: 'What is the team managers office number?'
    },
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
    //         // console.log(answers)
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