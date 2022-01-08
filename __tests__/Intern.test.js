const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Dave');

    expect(intern.name).toBe('Dave');
    expect(intern.school).toBe('Rutgers University');
})

// test("gets intern's school", () => {
//     const intern = new Intern
// })