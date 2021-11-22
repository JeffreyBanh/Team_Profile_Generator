const Employee = require("./Employee");

class Intern extends Employee{
    constructor(Name, Id, Email, school){
        super(Name, Id, Email);
        this.school = school;
    }

    get School(){
        return this.school
    }

    get Role(){
        return "Intern";
    }
}

module.exports = Intern