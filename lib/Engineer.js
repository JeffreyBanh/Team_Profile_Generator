const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(Name, Id, Email, Github){
        super(Name, Id, Email);
        this.Github = Github;
    }

    get Github(){
        return this.Github;
    }

    get Role(){
        return "Engineer";
    }
}

module.exports = Engineer