
const Intern = require('../lib/Intern');

// creating new object  
test('creates an Intern object', () => {
    const intern = new Intern('sarah', 2670, 'sarah.smith@gmail.com', 'Rutgers');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// getting intern school
test('gets employee school', () => {
    const intern = new Intern('sarah', 2670, 'sarah.smith@gmail.com', 'Rutgers');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// geting intern role
test('gets role of employee', () => {
    const intern = new Intern('sarah', 2670, 'sarah.smith@gmail.com', 'Rutgers');

    expect(intern.getRole()).toEqual("Intern");
}); 