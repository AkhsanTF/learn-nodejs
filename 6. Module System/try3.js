console.log(`Hello Heaven`);
function printName(nama) {
  return `Halo nama saya ${nama}`;
}

class People {
  constructor() {
    console.log("People  object have been created");
  }
}

const PI = 3.14;

const human = {
  name: "Syafiq",
  printName() {
    return console.log(`This human name is ${this.name}`);
  },
};

// module.exports.printName = printName;
// module.exports.People = People;
// module.exports.human = human;
// module.exports.PI = PI;

module.exports = {
  printName,
  People,
  human,
  PI,
};
