// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee' The other three classes will extend Employee.
// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.


//--------------------Const for File:
const Employee = require('../lib/Employee');
//--------------------Initializing "Employee":
describe('Employee', () => {
    it('Correctly displays a new Employee', () => {
        const Employee = new Employee ();
        expect(typeof(Employee)).toBe("object");
    });
});
//--------------------Test for Name:
describe("getName", () => {
    it("Correctly displays Employees Name", () => {
        const Name = "Ben";
        const Employee = new Employee(Name);
        expect(Employee.getName()).toBe(Name);
    });
});
//--------------------Test for ID:
describe('getId', () => {
    it('Correctly displays Employees ID', () => {
        const id = 1;
        const Employee = new Employee("Ben", id);
        expect(Employee.getId()).toBe(id);
    });
});
//--------------------Test for Email:
describe('getEmail', () => {
    it('Correctly displays Employees email', () => {
        const Email = "ben@email.com";
        const Employee = new Employee("Ben", 1, Email);
        expect(Employee.getEmail()).toBe(Email);
    });
});
//--------------------Test to set the Role:
describe('getRole', () => {
    it('Correctly displays Employees Role', () => {
        const Role = "Employee";
        const Employee = new Employee("Ben", 1, "ben@email.com");
        expect(Employee.getRole()).toBe(Role);
    });
});