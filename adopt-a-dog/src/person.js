var Dog = require("./dog.js");

class Person {
  constructor(name, dogObj) {
    this.name = name;
    this.dog = dogObj;
  }

  fillFoodBowl() {
    this.dog.eat();
  }

  throwBall() {
    this.dog.fetchBall();
    return `${this.dog.name} loves playing fetch!`;
  }

  introduceNewFriends(diffDog) {
    this.dog.makeNewFriend(diffDog);
    // this.dog.friends.push(diffDog.name);
  }

  adoptAPup(name, age) {
    if (!this.dog) {
      this.dog = new Dog({name: name, age: age});
    } else {
      return `You can\'t adopt ${name}. You already have ${this.dog.name}!`
    }
  }

}

module.exports = Person;
