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
        const employee = new Employee ();
        expect(typeof(employee)).toBe("object");
    });
});
//--------------------Test for name:
describe("getName", () => {
    it("Correctly displays Employees name", () => {
        const name = "Ben";
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
    });
});
//--------------------Test for ID:
describe('getId', () => {
    it('Correctly displays Employees ID', () => {
        const id = 1;
        const employee = new Employee("Ben", id);
        expect(employee.getId()).toBe(id);
    });
});
//--------------------Test for email:
describe('getEmail', () => {
    it('Correctly displays Employees email', () => {
        const email = "ben@email.com";
        const employee = new Employee("Ben", 1, email);
        expect(employee.getEmail()).toBe(email);
    });
});
//--------------------Test to set the Role:
describe('getRole', () => {
    it('Correctly displays Employee as the Role', () => {
        const role = "Employee";
        const employee = new Employee("Ben", 1, "ben@email.com");
        expect(employee.getRole()).toBe(role);
    });
});