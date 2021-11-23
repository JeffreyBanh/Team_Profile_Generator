const Engineer = require('../lib/Engineer');


test('creates an Engineer object and checks for name, id, email, and github ', () => {
    const engineer = new Engineer('Jeffrey', 123, 'banh.jeff@gmail.com', 'jeffreybanh');
    
    expect(engineer.Name).toEqual(expect.any(String));
    expect(engineer.Id).toEqual(expect.any(Number));
    expect(engineer.Email).toEqual(expect.any(String));
    expect(engineer.Github).toEqual(expect.any(String));
});

test('creates an Engineer objects and checks the getGithub method', () => {
    const engineer = new Engineer('Jeffrey', 123, 'banh.jeff@gmail.com', 'jeffreybanh');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.Github.toString()));
});

test('creates an Engineer objects and checks the getRole method', () => {
    const engineer = new Engineer('Jeffrey', 123, 'banh.jeff@gmail.com', 'jeffreybanh');

    expect(engineer.getRole()).toEqual("Engineer");
});