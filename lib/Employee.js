// The first class is an Employee parent class with the following properties and methods:
// name, id, email, getName(), getId(), getEmail(), getRole() // Returns 'Employee'


//--------------------Initializing "Employee" which will be the 'Base' of all Questions/Cards on HTML file:
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //--------------------To get the Name:
    getName() {
        return this.name;
    }
    //--------------------To get ID:
    getId() {
        return this.id;
    }
    //--------------------To get Email:
    getEmail() {
        return this.email;
    }
    //--------------------To set the Role:
    getRole() {
        return "Employee";
    }
};
//--------------------Eports the Emplyee Questions (Base Questions):
module.exports = Employee;