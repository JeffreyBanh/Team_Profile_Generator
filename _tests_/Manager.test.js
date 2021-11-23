const Manager = require('../lib/Manager');

test('creates a Manager object and checks for name, id, email, and office number', () => {
    const manager = new Manager('Jeffrey', 123, 'banh.jeff@gmail.com', 123);
    
    expect(manager.Name).toEqual(expect.any(String));
    expect(manager.Id).toEqual(expect.any(Number));
    expect(manager.Email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('creates a Manager object and checks the getRole method', () => {
    const manager = new Manager('Jeffrey', 123, 'banh.jeff@gmail.com', 123);

    expect(manager.getRole()).toEqual("Manager");
}); 