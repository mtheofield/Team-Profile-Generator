const Employee = require("./Employee");

// class for manager role
class Manager extends Employee {
    constructor(name, id, email, officeLocation, role) {
        super(name, id, email)
        this.officeLocation = officeLocation;
        this.role = role;
    }

    getOfficeNumber() {
        return this.officeLocation;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;