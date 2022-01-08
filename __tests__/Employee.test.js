const Employee = require("../lib/Employee");

test("set name by constructor", () => {
  const name = "John Smith";
  const employee = new Employee(name);

  expect(employee.name).toBe("John Smith");
});

test("set id by constructor", () => {
  const id = 1;
  const employee = new Employee("John Smith", id);

  expect(employee.id).toBe(1);
});

test("set email by constructor", () => {
  const email = "JSmith@email.com";
  const employee = new Employee("John Smith", 1, email);

  expect(employee.email).toBe("JSmith@email.com");
});

test("get name by getName", () => {
  const name = "John Smith";
  const employee = new Employee(name);

  expect(employee.getName()).toBe("John Smith");
});

test("get id by getId", () => {
  const id = 1;
  const employee = new Employee("John Smith", id);

  expect(employee.getId()).toBe(1);
});

test("get email by getEmail", () => {
  const email = "JSmith@email.com";
  const employee = new Employee("John Smith", 1, email);

  expect(employee.getEmail()).toBe("JSmith@email.com");
});

test("get role by getRole", () => {
    const role = "employee";
    const employee = new Employee("John Smith", 1, "JSmith@email.com");
  
    expect(employee.getRole()).toBe(role);
  });

// expect(employee.id).toEqual(expect.any(Number));
// expect(employee.email).toEqual(expect.any(Number));
