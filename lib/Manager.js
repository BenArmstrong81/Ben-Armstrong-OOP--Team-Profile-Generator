// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager' 
// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.


const Employee = require("./Employee");
//--------------------Extending from Employee to get "Engineer":
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //--------------------To set the Office Number:
    getOfficeNumber(){
        return this.officeNumber;
    }
    //--------------------To set the Role:
    getRole() {
        return "Manager";
    }
};

module.exports = Manager;