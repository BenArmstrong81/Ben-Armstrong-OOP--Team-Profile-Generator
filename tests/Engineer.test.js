// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'
// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.


//--------------------Const for File:
const Engineer = require('../lib/Engineer');
//--------------------Initializing "Engineer":
describe('Engineer', () => {
    it('Correctly displays a new Engineer', () => {
        const Engineer = new Engineer ();
        expect(typeof(Engineer)).toBe("object");
    });
});
//--------------------Test for github—GitHub username:
describe("getGithub", () => {
    it("Correctly displays Engineers GitHub Username", () => {
        const GitHub = "github.com/mschumacher";
        const Engineer = new Engineer("Ben", 1, "ben@email.com", GitHub);
        expect(Engineer.getEngineer()).toBe(GitHub);
    });
});
//--------------------getRole()—overridden to return 'Engineer':
describe("getRole", () => {
    it("Correctly displays Engineers Role", () => {
        const Role = Engineer;
        const Engineer = new Engineer("Ben", 1, "ben@email.com", "github.com/mschumacher");
        expect(Engineer.getEngineer()).toBe(Role);
    });
});