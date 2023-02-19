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
        const engineer = new Engineer ();
        expect(typeof(engineer)).toBe("object");
    });
});
//--------------------Test for github—GitHub username:
describe("getGithub", () => {
    it("Correctly displays Engineers GitHub Username", () => {
        const gitHub = "github.com/mschumacher";
        const engineer = new Engineer("Ben", 1, "ben@email.com", gitHub);
        expect(engineer.getGithub()).toBe(gitHub);
    });
});
//--------------------getRole()—overridden to return 'Engineer':
describe("getRole", () => {
    it("Correctly displays Engineers Role", () => {
        const role = "Engineer";
        const engineer = new Engineer("Ben", 1, "ben@email.com", "github.com/mschumacher");
        expect(engineer.getRole()).toBe(role);
    });
});