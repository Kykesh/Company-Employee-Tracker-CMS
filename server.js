const inquirer = require('inquirer');
const connection = require('./db/connection');

function init() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add a Department',
        'Add a Role',
        'Add an Employee',
        'Update an Employee Role',
        'Exit'
      ]
    }
  ]).then(answers => {
    switch(answers.action) {
      case 'View All Departments':
        break;
      case 'Exit':
        connection.end();
        break;
    }
  }).catch(err => console.error(err));
}

init();
