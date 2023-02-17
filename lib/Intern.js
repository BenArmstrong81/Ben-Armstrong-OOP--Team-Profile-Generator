// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern' Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.


const Employee = require("./Employee");
//--------------------Extending from Employee to get "Intern":
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    //--------------------To set the GitHub Username:
    getSchool(){
        return this.school;
    }
    //--------------------To set the Role:
    getRole() {
        return "Intern";
    }
};

module.exports = Intern;