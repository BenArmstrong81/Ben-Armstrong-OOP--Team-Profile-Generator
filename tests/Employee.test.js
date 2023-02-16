// The first class is an Employee parent class with the following properties and methods:

// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee' The other three classes will extend Employee.
// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Correctly displays Employees Name', () => {
        const Employee = new Employee ();
        expect(typeof(Employee)).toBe("object");
    });
});

describe("getName", () => {
    it("Correctly displays Employees Name", () => {
        const Name = "Ben";
        const Employee = new Employee(Name);
        expect(Employee.getName()).toBe(Name);
    });
});

describe('getId', () => {
    it('Correctly displays Employees ID', () => {
        const id = 1;
        const Employee = new Employee("Ben", id);
        expect(Employee.getId()).toBe(id);
    });
});

describe('getEmail', () => {
    it('Correctly displays Employees email', () => {
        const Email = "ben@email.com";
        const Employee = new Employee("Ben", 1, Email);
        expect(Employee.getEmail()).toBe(Email);
    });
});

describe('getRole', () => {
    it('Correctly displays Employees Role', () => {
        const Role = "Employee";
        const Employee = new Employee("Ben", 1, "ben@email.com");
        expect(Employee.getRole()).toBe(Role);
    });
});