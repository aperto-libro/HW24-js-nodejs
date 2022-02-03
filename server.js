const { Student } = require('./src/Student');
const { Teacher } = require('./src/Teacher');

const student = new Student({
  name: 'Vitalii',
  age: 18,
  gender: 'male',
  interests: 'learning IT',
});
student.greetengs();

const teacher = new Teacher({
  name: 'Vic',
  age: 33,
  gender: 'male',
  interests: 'teaching IT',
  subject: 'JS',
});
teacher.greetengs();
