const Employee = require("../lib/Employee");

test("creates a employee object", () => {
    const employee = new Employee ("John Smith");

    expect(employee.name).toBe("John Smith");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(Number));
});



