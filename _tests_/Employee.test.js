const Employee = require("../lib/Employee");

test('checks an employee object for name, id, and email', () => {
    const employee = new Employee('Jeffrey', 123, 'banh.jeff@gmail.com');

    expect(employee.Name).toEqual(expect.any(String));
    expect(employee.Id).toEqual(expect.any(Number));
    expect(employee.Email).toEqual(expect.any(String));
});

test('checks for an employee object name using the getName method', () => {
    const employee = new Employee('Jeffrey', 123, 'banh.jeff@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('checks for an employee object ID using the getId method', () => {
    const employee = new Employee('Jeffrey', 123, 'banh.jeff@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('checks for an employee object email using the getId method', () => {
    const employee = new Employee('Jeffrey', 123, 'banh.jeff@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.Email.toString()));
});

test('checks for an employee object role using the getRole method', () => {
    const employee = new Employee('Jeffrey', 123, 'banh.jeff@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 