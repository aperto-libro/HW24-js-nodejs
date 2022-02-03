const { Person } = require('../Person');

class Student extends Person {
  greetengs() {
    console.log(`Hi people. My name is ${this.name}. I am a student.`);
  }
}

exports.Student = Student;
