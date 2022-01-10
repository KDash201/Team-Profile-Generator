const Intern = require("../lib/Intern");

test("set school by constructor", () => {
  const school = "Rutgers";
  const intern = new Intern("John", 1, "JSmith@email.com", school);

  expect(intern.school).toBe("Rutgers");
});

test("get school by getSchool", () => {
  const school = "Rutgers";
  const intern = new Intern("John", 1, "JSmith@email.com", school);

  expect(intern.getSchool()).toBe(school);
});

test("get role by getRole", () => {
  const role = "intern";
  const intern = new Intern("John", 1, "JSmith@email.com", "Rutgers");

  expect(intern.getRole()).toBe(role);
});
