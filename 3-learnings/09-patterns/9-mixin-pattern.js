// Mixins are classes that offer functionality that can be easily inherited by a sub-class or group of sub-classes for the purpose of the function reuse.

const Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = 'male';
};

const clark = new Person('Clark', 'kent');

const SuperHero = function(firstName, lastName, powers) {
  Person.call(this.firstName, this.lastName);
  this.powers = powers;
};

SuperHero.prototype = Object.create(Person.prototype);
const superman = new SuperHero('Clark', 'Kent', ['flight', 'heat-vision']);

console.log(superman); //output personal attributes as well as power
