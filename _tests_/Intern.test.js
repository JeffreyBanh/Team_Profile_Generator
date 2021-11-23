const Intern = require('../lib/Intern');

test('creates an Intern object and checks for name, id, email, and school', () => {
    const intern = new Intern('Jeffrey', 123, 'banh.jeff@gmail.com', 'SJSU');
    
    expect(intern.Name).toEqual(expect.any(String));
    expect(intern.Id).toEqual(expect.any(Number));
    expect(intern.Email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('creates an Intern object and checks for getSchool method', () => {
    const intern = new Intern('Jeffrey', 123, 'banh.jeff@gmail.com', 'SJSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('creates an Intern object and checks for getRole method', () => {
    const intern = new Intern('Jeffrey', 123, 'banh.jeff@gmail.com', 'SJSU');

    expect(intern.getRole()).toEqual("Intern");
}); 