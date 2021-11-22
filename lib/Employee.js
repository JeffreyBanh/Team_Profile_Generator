class Employee{
    constructor(Name, Id, Email){
        this.Name = Name;
        this.Id = Id;
        this.Email = Email;
    }

    get Name() {
        return this.Name;
    }

    get Id(){
        return this.Id;
    }

    get Email(){
        return this.Email;
    }

    get Role(){
        return 'Employee';
    }


}

module.exports = Employee;