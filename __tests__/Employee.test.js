const Employee = require("../lib/Employee");
const { it, expect, test } = require("@jest/globals");

    
test("Settting up employee objects", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
})

test("Constructor for employees name", () => {
    const name = "Mary";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
})

test("Constructor for employee id", () => {
    const id = 43221;
    const emp = new Employee("Mary", 43221);
    expect(emp.id).toBe(id);
})

test("Constructor for employee email", () => {
    const email = "mptheofield@gmail.com";
    const emp = new Employee("Mary", 43221, email);
    expect(emp.email).toBe(email);
})

test("Constructor for employee role", () => {
    const role = "Employee";
    const emp = new Employee("Mary", 43221, "mptheofield@gmail.com", role);
    expect(emp.role).toBe(role);
})