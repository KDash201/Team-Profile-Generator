const Engineer = require("../lib/Engineer");

test("set github by constructor", () => {
  const github = "kdash201";
  const engineer = new Engineer("John", 1, "JSmith@email.com", github);

  expect(engineer.github).toBe("kdash201");
});

test("get github by getGithub", () => {
  const github = "kdash201";
  const engineer = new Engineer("John", 1, "JSmith@email.com", github);

  expect(engineer.getGithub()).toBe(github);
});

test("get role by getRole", () => {
  const role = "engineer";
  const engineer = new Engineer("John", 1, "JSmith@email.com", "kdash201");

  expect(engineer.getRole()).toBe(role);
});
