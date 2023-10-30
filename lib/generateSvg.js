// Package needed for these functions
const { Circle, Triangle, Square } = require('./shapes');

// Function to return tag for selected shape
function getShape(shape, color){
    switch(shape) {
        case 'Circle':
            logo = new Circle();
            logo.setColor(color);
            break;
        case 'Square':
            logo = new Square();
            logo.setColor(color);
            break;
        case 'Triangle':
            logo = new Triangle();
            logo.setColor(color);
            break;
    }
    return logo.render()
}

// Function to generate SVG tag
function generateSVG(data) {
    return `<svg width = '300' height = '200' xmlns ='http://www.w3.org/2000/svg'>
    ${getShape(data.shape, data.shapeColor)}
    <text x = '${data.shape === 'Triangle' ? '50%' : '100'}' y = '${data.shape === 'Triangle' ? '115' : '100'}' dominant-baseline = 'middle' text-anchor = 'middle' font-size = '50' fill = '${data.textColor}'>
        ${data.text}
    </text>
</svg>`;
}

module.exports = generateSVG;