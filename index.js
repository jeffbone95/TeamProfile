const inquirer = require('inquirer'); 
const generateHTML = require('./src/generateHtml');
const teamName = []
const Management = require('./lib/Management');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');



function init() {
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: "What is the head of Manager's name?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the Manager's email address?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the Manager's id number?",

  },

  {
    type: 'input',
    name: 'officeNumber',
    message: "What is the Manager's office number?",
  },
  ]).then((answers) => {
    const manager = new manager(answers.name, answers.id, answers.email, answers.officeNumber)
    teamName.push(manager)
    menu()
  })

}

function menu() {
  inquirer.prompt([{
    type: 'list',
    name: 'menu',
    message: "Which employee do you want to add?",
    choices: ['Engineer', 'Intern', 'Done'],
 


  }]).then((answers) => {
    console.log(answers.menu)
    switch (answers.menu) {
      case "Engineer":
        engineerQuestions()
        break;
      case "Intern":
        internQuestions()
        break;
      default:
        buildTeam()
        break;
    }
  })

}

function engineerQuestions() {
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: "What is the Engineer's name?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the Engineer's email address?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the Engineer's id number?",

  },

  {
    type: 'input',
    name: 'github',
    message: "What is the Engineer's github username?",
  },
  ]).then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    teamName.push(engineer)
    menu()
  })
}

function internQuestions() {
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: "What is the Intern's name?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the Intern's email address?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the Intern's id number?",

  },

  {
    type: 'input',
    name: 'school',
    message: "What is the Intern's school?",
  },
  ]).then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    teamName.push(intern)
    menu()
  })
}


function buildTeam() {
  fs.writeFileSync('./dist/index.html', generateHTML(teamMembers)) 
  
}

init()