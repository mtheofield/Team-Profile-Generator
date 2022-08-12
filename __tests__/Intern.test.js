const Intern = require("../lib/Intern");

test("To see if Employee is Intern", () => {
    const emp = new Intern();
    expect(typeof(emp)).toBe("object");
})

test("Constructor to get Interns name", () => {
    const name = "Mary";
    const emp = new Intern(name);
    expect(emp.name).toBe(name);
})

test("Constructor to get Interns id", () => {
    const id = 65432;
    const emp = new Intern("Mary", 65432);
    expect(emp.id).toBe(id);
})

test("Constructor to get Interns email", () => {
    const email = "mptheofield@gmail.com";
    const emp = new Intern("Mary", 65432, email);
    expect(emp.email).toBe(email);
})

test("Constructor to get Interns University/College", () => {
    const school = "Boston College";
    const emp = new Intern("Mary", 65432, "mptheofield@gmail.com", school);
    expect(emp.school).toBe(school);
})

test("Constructor to see role", () => {
    const role = "Intern";
    const emp = new Intern("Mary", 65432, "mptheofield@gmail.com", "Boston College", role);
    expect(emp.role).toBe(role);
})