generateHTML = require('./src/generateHTML')
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = [];

const start = [
    {
        type: "input",
        message: "What is the managers name? ",
        name: "name",
        validate: userName => {
            if (userName) {
                return true;
            } else {
                console.log("Please enter a name")
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is the managers employee ID? ",
        name: "id",
        validate: userId => {
            if (userId) {
                return true;
            } else {
                console.log("Plesae enter an ID");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is the managers email? ",
        name: "email",
        validate: userEmail => {
            if (userEmail) {
                return true;
            } else {
                console.log("Please enter an email");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is the managers office location? ",
        name: "officeLocation",
        validate: userNumber => {
            if (userNumber) {
                return true;
            } else {
                console.log("Please enter a locatoon");
                return false;
            }
        }
    },
];

questions().then(function ({ name, id, email, officeLocation}) {
    let teamManager;
    teamManager = new Manager(name, id, email, officeLocation);
    team.push(teamManager);
    choice();
});

function questions() {
    return inquirer.prompt(start);
}

const choice = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Please select a team member to add.",
                name: "role",
                choices: ["Engineer", "Intern", "There are no more team members"],
            }
        ]).then(data => {
            if (data.role === "Engineer") {
                engineerCard();
            } else if (data.role === "Intern") {
                internCard();
            } else if (data.role === "There are no more team members") {
                allDone();
            }
        })
};

const engineerCard = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the Engineers name? ",
                name: "name",
                validate: userName => {
                    if (userName) {
                        return true;
                    } else {
                        console.log("Please enter a name.")
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "What is the Engineers employee ID? ",
                name: "id",
                validate: userId => {
                    if (userId) {
                        return true;
                    } else {
                        console.log("Please enter an ID");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "What is the Engineers email? ",
                name: "email",
                validate: userEmail => {
                    if (userEmail) {
                        return true;
                    } else {
                        console.log("Please enter an email address");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "What is the Engineer's GitHub username? ",
                name: "github",
                validate: userGithub => {
                    if (userGithub) {
                        return true;
                    } else {
                        console.log("Please enter a GitHub username");
                        return false;
                    }
                }
            },
        ]).then(function ({ name, id, email, github }) {
            let teamEngineer;
            teamEngineer = new Engineer(name, id, email, github);
            team.push(teamEngineer);
            choice();
        });
}

const internCard = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the Interns name? ",
                name: "name",
                validate: userName => {
                    if (userName) {
                        return true;
                    } else {
                        console.log("Please enter a name")
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "What is the Intern's employee ID? ",
                name: "id",
                validate: userId => {
                    if (userId) {
                        return true;
                    } else {
                        console.log("Please enter an id.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "What is the Intern's email address? ",
                name: "email",
                validate: userEmail => {
                    if (userEmail) {
                        return true;
                    } else {
                        console.log("Please enter an email address");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "What school does the Intern attend? ",
                name: "school",
                validate: userSchool => {
                    if (userSchool) {
                        return true;
                    } else {
                        console.log("Please enter a University or College");
                        return false;
                    }
                }
            },
        ]).then(function ({ name, id, email, school }) {
            let teamIntern;
            teamIntern = new Intern(name, id, email, school);
            team.push(teamIntern);
            choice();
        });
}

const generateCards = (emp) => {
    if (emp.getRole() === 'Manager') {
        return `
        <div class="card" style="width: 19rem;">
            <div class="card-header">
                <h3>${emp.name}</h3>
                <h5><i class="fas fa-coffee"></i> Manager</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${emp.id}</li>
                    <li class="list-group-item">Email: </br><a href = 'mailto: ${emp.email}'>${emp.email}</a></li>
                    <li class="list-group-item">Office Number: ${emp.officeLocation}</li>
                </ul>
            </div>
        </div>
`
    }
    if (emp.getRole() === 'Engineer') {
        return `
        <div class="card" style="width: 19rem;">
            <div class="card-header">
                <h3>${emp.name}</h3>
                <h5><i class="fas fa-glasses"></i> Engineer</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${emp.id}</li>
                    <li class="list-group-item">Email: </br><a href = 'mailto: ${emp.email}'>${emp.email}</a></li>
                    <li class="list-group-item">GitHub: <a href='https://github.com/${emp.github}'>${emp.github}</a></li>
                </ul>
            </div>	
        </div>
`
    }
    if (emp.getRole() === 'Intern') {
        return `
            <div class="card" style="width: 19rem;">
                <div class="card-header">
                    <h3>${emp.name}</h3>
                    <h5><i class="fas fa-user-graduate"></i> Intern</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${emp.id}</li>
                        <li class="list-group-item">Email: </br><a href = 'mailto: ${emp.email}'>${emp.email}</a></li>
                        <li class="list-group-item">School: ${emp.school}</li>
                    </ul>
                </div>	
            </div>
`
    }

}

const allDone = () => {
    const teamArray = team;
    let employeeCards = "";

    for (i in teamArray) {
        const emp = teamArray[i];
        employeeCards += generateCards(emp);
    }
    const finalTeam = render(employeeCards);

    fs.writeFileSync('./dist/builtteam.html', finalTeam)

    console.log(`You have successfully created your team`);
}