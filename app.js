const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = []


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
async function takeInfo() {
  // loop to take in employee info until no more team members to add
  let another = true;
  while(another) {
    // ask what kind of employee to add if any
    const {employee: employee} = await inquirer.prompt({
      type: 'list',
      name: 'employee',
      message: "What type of member would you like to add?",
      choices: ['Manager', 'Engineer', 'Intern', 'None']
    })
    // if None wasn't chosen work, else exit info entry loop
    if (employee !== 'None') {
      // ask for name, Id, and email
      const {name, ID, email} = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: `What is the ${employee}'s name?`
        },
        {
          type: 'input',
          name: 'ID',
          message: `What is the ${employee}'s ID?`
        }, 
        {
          type: 'input',
          name: 'email',
          message: `What is the ${employee}'s email?`
        }
      ])
      // Ask for unique info
      switch(employee) {
        case "Manager":
          const {officeNum} = await inquirer.prompt({
            type: 'input',
            name: 'officeNum',
            message: "What is the manager's Office Number?"
          })
          employees.push(new Manager(name, ID, email, officeNum))
          break
        case "Engineer":
          const {github} = await inquirer.prompt({
            type: 'input',
            name: 'github',
            message: "What is the engineer's github?"
          })
          employees.push(new Engineer(name, ID, email, github))
          break
        case "Intern":
          const {school} = await inquirer.prompt({
            type: 'input',
            name: 'school',
            message: "What is the intern's school?"
          })
          employees.push(new Intern(name, ID, email, school))
          break
      }
    } else {
      another = false;
    }
  }
}

async function main() {

  await takeInfo();
  console.log(employees)

  // After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!
  const skeleton = render(employees);
  console.log(skeleton)
}

main()



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
