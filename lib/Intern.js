const Employee = require("./Employee");

class Intern extends Employee{
    constructor(Name, Id, Email, school){
        super(Name, Id, Email);
        this.school = school;
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern