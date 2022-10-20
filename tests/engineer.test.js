// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('chayanne', 5690, 'chayanne.stephen@gmail.com', 'chayannesteps');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// geting the github
test('gets engineer github value', () => {
    const engineer = new Engineer('Chayanne', 5690, 'chayanne.stephen@gmail.com', 'chayannesteps');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// geting role 
test('gets role of employee', () => {
    const engineer = new Engineer('chayanne', 5690, 'chayanne.stephen@gmail.com', 'chayannesteps');

    expect(engineer.getRole()).toEqual("Engineer");
});