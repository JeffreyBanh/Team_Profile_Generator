const Employee = require("./Employee")

class Manager extends Employee{
    constructor(Name, Id, Email, officeNumber){
        super(Name, Id, Email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;


