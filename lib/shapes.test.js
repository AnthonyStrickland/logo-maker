const{Circle, Square, Triangle} = require("./shapes.js");

//testing for circle
describe("Circle", () => {
    test("test for circle with background blue", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');

    });
});

describe("Square", () => {
    test("test for square with background green", () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="150" y="150" width="150" height="150" fill="green"/>');

    });
});

describe("Triangle", () => {
    test("test for triangle with background red", () => {
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red"/>');

    });
});
