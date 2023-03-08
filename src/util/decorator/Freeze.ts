
export default function ObjectFreeze(target: any, key: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const result = method.apply(this, args);
        return Object.freeze(result);
    };
    return descriptor;
}
// import { freeze } from './freeze';
//
// class Person {
//   @freeze
//   public getPerson() {
//     return {
//       name: 'John',
//       age: 20,
//     };
//   }
// }
//
// const person = new Person();
// const result = person.getPerson();
// result.name = 'Jane';
// console.log(result);
//
// //output
// // { name: 'John', age: 20 }
//