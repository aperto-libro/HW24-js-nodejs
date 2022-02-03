class Person {
  constructor(data) {
    this.name = data.name;
    this.age = data.age;
    this.gender = data.gander;
    this.interests = data.interests;
  }

  greetengs() {
    console.log(`Hello! My name is ${this.name}`);
  }
}

exports.Person = Person;
