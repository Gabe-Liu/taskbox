
// declare let jQuery: (selector: string) => any;
// declare var $: (selector: string) => any;

declare var Nestable: (selector: string) => any;

declare var num: number;

declare class Animal {
  name: string;
  constructor(name: string);
  sayHi(): string;
}
// declare var num = 10;

// declare const name: string;
declare function getName(): string;
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
interface Options {
    data: any;
}

// 使用export的話, 需要用到的地方就要用import
// 兒且export前方也可不用加declare
// 而且此地方的沒被export的,就算是declare也無法直接使用！
// export { num, getName, Animal, Directions, Options };

// declare namespace foo {
//   const name: string;
//   namespace bar {
//       function baz(): string;
//   }
// }

// export namespace foo {
//   const name: string;
//   namespace bar {
//       function baz(): string;
//   }
// }
