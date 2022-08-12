const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("To see if Employee is Engineer", () => {
    const emp = new Engineer();
    expect(typeof(emp)).toBe("object");
})

test("Constructor to see Engineers name", () => {
    const name = "Mary";
    const emp = new Engineer(name);
    expect(emp.name).toBe(name);
})

test("Constructor to see Engineers id", () => {
    const id = 33323;
    const emp = new Engineer("Mary", 33323);
    expect(emp.id).toBe(id);
})

test("Constructor to see Engineers email", () => {
    const email = "mptheofield@gmail.com";
    const emp = new Engineer("Mary", 33323, email);
    expect(emp.email).toBe(email);
})

test("Constructor to see Engineers github", () => {
    const github = "mtheofield";
    const emp = new Engineer("Mary", 33323, "mptheofield@gmail.com", github);
    expect(emp.github).toBe(github);
})

test("Constructor to see role", () => {
    const role = "Engineer";
    const emp = new Engineer("Mary", 33323, "mptheofield@gmail.com", "mtheofield", role);
    expect(emp.role).toBe(role);
})