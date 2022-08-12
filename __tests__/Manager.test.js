const Manager = require("../lib/Manager");

test("To see if employee is a Manager", () => {
    const emp = new Manager();
    expect(typeof(emp)).toBe("object");
})

test("Constructor to see Managers name", () => {
    const name = "Mary";
    const emp = new Manager(name);
    expect(emp.name).toBe(name);
})

test("Constructor to see Managers id", () => {
    const id = 22224;
    const emp = new Manager("Mary", 22224);
    expect(emp.id).toBe(id);
})

test("Constructor to see Managers email", () => {
    const email = "mptheofield@gmail.com";
    const emp = new Manager("Mary", 22224, email);
    expect(emp.email).toBe(email);
})

test("Constructor for Managers office location", () => {
    const officeLocation = 595;
    const emp = new Manager("Mary", 22224, "mptheofield@gmail.com", officeLocation);
    expect(emp.officeLocation).toBe(officeLocation);
})

test("Manager role constructor", () => {
    const role = "Manager";
    const emp = new Manager("Mary", 2224, "mptheofield@gmail.com", 595, role);
    expect(emp.role).toBe(role);
})