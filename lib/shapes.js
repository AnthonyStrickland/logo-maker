class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colors) {
        this.color = colors;
    }
}
//cirlce class
class circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class square extends Shape {
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`;
    }
}

class triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>
        `;
    }
}