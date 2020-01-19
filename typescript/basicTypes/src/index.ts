class People {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const geonwoo = new People("jeong", 25, "male");

interface Human {
  name: string;
  age: number;
  gender: string;
}
const person = {
  name: "jeong",
  age: 25,
  gender: "male"
};

const sayHi = (geonwoo: People): string => {
  return `you are ${geonwoo.name}, and ${geonwoo.age} year, ${geonwoo.gender} `;
};

const sayHello = (person: Human): string => {
  return `you are ${person.name}, and ${person.age} year, ${person.gender} `;
};

console.log(sayHi(geonwoo));
console.log(sayHello(person));
