class Employee {
  // An instanciated employee can set name, id, and email via constructor arguments
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name
  }

  getId() {
    return this.id
  }

  getEmail() {
    return this.email
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;