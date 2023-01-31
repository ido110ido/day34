//EX3

// //1
// const getValueType = (value: string | number | boolean): Object => {
//   return {
//     value: value,
//     Type: typeof value,
//   };
// };
// console.log(getValueType("hello")); // { value: "hello", type: "string" }
// console.log(getValueType("hello")); // { value: "hello", type: "string" }
// console.log(getValueType(123)); // { value: 123, type: "number" }
// console.log(getValueType(true)); // { value: true, type: "boolean" }
// console.log(getValueType("hello")); // { value: "hello", type: "string" }
// //2
// interface IRectangle {
//   length: number;
//   width: number;
// }
// class Rectangle {
//   rect: IRectangle;
//   constructor(rect: IRectangle) {
//     this.rect = rect;
//   }
//   getArea(): number {
//     return this.rect.length * this.rect.width;
//   }
//   getPerimeter(): number {
//     return this.rect.length * 2 + this.rect.width * 2;
//   }
// }
// let a: Rectangle = new Rectangle({ length: 7, width: 4 });
// console.log(a.getArea());
// console.log(a.getPerimeter());
// //3
// interface IPoint {
//   x: number;
//   y: number;
// }
// const distance = (point1: IPoint, point2: IPoint): number => {
//   let xD: number = point1.x - point2.x;
//   let xY: number = point1.y - point2.y;
//   return Math.sqrt(xD ** 2 + xY ** 2);
// };
// console.log(distance({ x: 3, y: 4 }, { x: 0, y: 0 }));
// //4
// enum CardRank {
//   Ace = 1,
//   Two,
//   Three,
//   Four,
//   Five,
//   Six,
//   Seven,
//   Eight,
//   Nine,
//   Ten,
//   Jack,
//   Queen,
//   King,
// }
// interface Card {
//   suit: string;
//   rank: CardRank;
// }
// const higherRankedCard = (card1: Card, card2: Card): Card => {
//   if (card1.rank > card2.rank) {
//     return card1;
//   } else {
//     return card2;
//   }
// };
// console.log(
//   higherRankedCard(
//     { suit: "a", rank: CardRank.Ten },
//     { suit: "b", rank: CardRank.Seven }
//   )
// );
// //5
// class Person {
//   name: string;
//   age: number;
//   email: string;
//   constructor(name: string, age: number, email: string) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }
// }
// let person: Person = new Person("ido", 23, "ido@walla.com");
// console.log(person);
// //6
// interface ICircle {
//   radius: number;
// }
// type Shape = ICircle & IRectangle;
// const area = (shape: Shape): number => {
//   return shape.length * shape.width + Math.PI * Math.pow(shape.radius, 2);
// };
// const myShape: Shape = { width: 2, length: 4, radius: 1 };
// console.log(area(myShape)); // 15.141592653589793
// //7
// function swap<Type>(value1: Type, value2: Type): [Type, Type] {
//   return [value2, value1];
// }
// console.log(swap("hello", "world")); // [ 'world', 'hello' ]
// console.log(swap(123, 456)); // [456, 123]
// console.log(swap(true, false)); // [false, true]
// //8
function minMax<Type>(arr: Type[]): Type[] {
  let min: Type = arr.reduce((min, crr) => (min > crr ? crr : min));
  let max: Type = arr.reduce((max, crr) => (max < crr ? crr : max));
  return [min, max];
}
// console.log(minMax([3, 1, 5, 2, 4])); // [1, 5]
// console.log(minMax(["apple", "banana", "cherry"])); // ["apple", "cherry"]
//9
interface IPerson {
  name: string;
  age: number;
  address: string;
}
interface IDeveloper {
  programmingLanguages: String[];
}
type DeveloperPerson = IPerson & IDeveloper;
class MyDeveloper {
  developerPers: DeveloperPerson;
  constructor(
    name: string,
    age: number,
    address: string,
    programLan: string[]
  ) {
    this.developerPers = {
      name,
      age,
      address,
      programmingLanguages: programLan,
    };
  }
}
const myDeveloper: MyDeveloper = new MyDeveloper(
  "John Doe",
  30,
  "123 Main St",
  ["JavaScript", "TypeScript"]
);
console.log(myDeveloper.developerPers);
