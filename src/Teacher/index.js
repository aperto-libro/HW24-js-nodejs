const { Person } = require('../Person');

class Teacher extends Person {
  constructor(data) {
    super(data);
    this.subject = data.subject;
  }

  greetengs() {
    console.log(
      `Hello! My name is ${this.name}. I am your teacher. We will study the subject ${this.subject}`
    );
  }
}

exports.Teacher = Teacher;
