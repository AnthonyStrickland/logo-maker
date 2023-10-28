

//testing for circle
describe("Circle", () => {
    test("test for circle with background blue", () =>{
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');

    });
});

describe("square", () => {
    test("test for square with background green", () =>{
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="10" y="10" width="30" height="30" fill="green" />');

    });
});

describe("triangle", () => {
    test("test for triangle with background red", () =>{
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');

    });
});
