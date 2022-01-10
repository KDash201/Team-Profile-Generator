const Manager = require("../lib/Manager");

test("set officeNumber by constructor", () => {
  const officeNumber = "555.555.5555";
  const manager = new Manager("John", 1, "JSmith@email.com", officeNumber);

  expect(manager.officeNumber).toBe("555.555.5555");
});

test("get role by getRole", () => {
    const role = "manager";
    const engineer = new Manager("John", 1, "JSmith@email.com", "555.555.5555");
  
    expect(engineer.getRole()).toBe(role);
  });