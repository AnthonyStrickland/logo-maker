class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colors) {
        this.color = colors;
    }
}

//cirlce class
class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="80" fill="${this.color}"/>`;
    }
}
//square class
class Square extends Shape {
    render() {
        return `<rect x="25" y="25" width="150" height="150" fill="${this.color}"/>`;
    }
}
// triangle class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
}

module.exports = {Circle, Square, Triangle};