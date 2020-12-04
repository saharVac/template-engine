const Employee = require("./Employee");

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

module.exports = Manager