// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is your project called?',
    },
    {
        type:'input',
        name:'description',
        message:'Please enter a brief description.\nYour description should answer the following questions:\nWhy did you make this project?(not "because it was an assignment")\nWhat problem does this project solve?\nWhat did you learn in the making of this project?',
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps to install your project? (or N/A)',
    },
    {
        type:'input',
        name:'screenshot',
        message:'Please provide the relative path to your screenshot',
    },
    {
        type:'input',
        name:'link',
        message:'Please provide the URL to your deployed project',
    },
    {
        type:'input',
        name:'usage',
        message:'What steps do users need to follow to fully utilize your project',
    },
    {
        type:'input',
        name:'video',
        message:'Please enter a link to a walthrough video. (or N/A)',
    },
    {
        type:'input',
        name:'contributions',
        message:'Who contributed and what did they contribute? (or N/A)',
    },
    {
        type:'list',
        name:'license',
        message:'Please select an applicable license',
        choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'None'],
    },
    {
        type:'input',
        name:'email',
        message:'Please enter an E-mail where you can be reached. (or N/A)',
    },
    {
        type:'input',
        name:'github',
        message:'Please enter a link to your GitHub profile. (or N/A)',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
