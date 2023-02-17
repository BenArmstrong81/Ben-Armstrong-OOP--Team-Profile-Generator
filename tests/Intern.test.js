// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern' Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.


//--------------------Const for File:
const Intern = require('../lib/Intern');
//--------------------Initializing "Intern":
describe('Intern', () => {
    it('Correctly displays a new Intern', () => {
        const Intern = new Intern ();
        expect(typeof(Intern)).toBe("object");
    });
});
//--------------------test for getting school for the intern:
describe("getSchool", () => {
    it("Correctly displays Interns School", () => {
        const School = "UniSA";
        const Intern = new Intern("Ben", 1, "ben@email.com", School);
        expect(Intern.getIntern()).toBe(School);
    });
});
//--------------------getRole()—overridden to return 'Intern':
describe("getRole", () => {
    it("Correctly displays Interns Role", () => {
        const Role = Intern;
        const Intern = new Intern("Ben", 1, "ben@email.com", "UniSA");
        expect(Intern.getIntern()).toBe(Role);
    });
});