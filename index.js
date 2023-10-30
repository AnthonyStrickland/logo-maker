const inquirer = require('inquirer');
const fs = require('fs');
const{Circle, Square, Triangle} = require("./lib/shapes.js");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
const generateSVG =require("./lib/generateSvg.js");

const svgQuestions = [ {

type: "maxlength-input",
message: "What would you like to display? Choose up to three characters",
name: "text",
maxLength: 3
},
{
type: "input",
message: "What color would you like your text to be? Choose a color or hexadecimal number",
name: "textColor"  
},
{
type: "list",
message: "what shape would you like to use",
choices: [ "Circle", "Square", "Triangle"],
name: "shape"
},
{
type: "input",
message: "What color would you like your shape to be? Choose a color or hexadecimal number",
name: "shapeColor"

},]

// Function to write README file
// Function to write .svg file
function writeToFile(data) {
    const filename = `${data.shape}.svg`;
    fs.writeFile(`./examples/${filename}`, generateSVG(data), (err) => err ? console.log(err) : console.log('Generated logo.svg'))
}

// Function to initialize app
function init() {
    inquirer.prompt(svgQuestions)
    .then((answers) => {
        writeToFile(answers)
    });
}

// Function call to initialize app
init();