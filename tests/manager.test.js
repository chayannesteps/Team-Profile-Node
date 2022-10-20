
const Manager = require('../lib/Manager');
  
// creating object
test('creates an Manager object', () => {
    const manager = new Manager('emma', 3450, 'emma.doe@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// geting role
test('gets role of employee', () => {
    const manager = new Manager('emma', 3450, 'emma.doe@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 