class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  speak() {
    return `${this.name} make a sound.`;
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, bread) {
    super(name, age, color, legs);
    this.bread = bread;
  }
  speak() {
    return `${this.name} barks.`;
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, bread) {
    super(name, age, color, legs);
    this.bread = bread;
  }
  speak() {
    return `${this.name} meo.`;
  }
}
