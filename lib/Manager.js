const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
  // set office number via constructor argument
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber;
  }

  // getRole() should return "Manager"
  getRole() {
    return "Manager"
  }

  // Can get office number via getOffice()
  getOffice() {
    return this.officeNumber
  }
}

const man = new Manager("name", 3, "email", 333);
console.log( man.getOffice())

module.exports = Manager