class Employee {
    constructor(Name, Id, Email){
        this.Name = Name;
        this.Id = Id;
        this.Email = Email;
    }

    getName() {
        return this.Name;
    }

    getId(){
        return this.Id;
    }

    getEmail(){
        return this.Email;
    }

    getRole(){
        return 'Employee';
    }


}

module.exports = Employee;