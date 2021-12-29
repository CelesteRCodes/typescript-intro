// Primitives: numbers, strings, booleans
// Complex types: arrays, objects
// Function types, parameters

// Primitive Types (start in lowercase): 

let age: number;
// let age: number = 22;
age = 12; 

let userName: string;
userName = 'Celeste'

let isFinanciallyAbundant: boolean;
isFinanciallyAbundant = true;

// don't set things to null, can't reassign 
let hobbies: null;
// hobbies = 'sleep' (not assignable to 'null')

// Array Types:

let faves: string[];    // can only be an array of strings
faves = ['my bed', 'access to food', 'comfort'];

// Object Types:

// let person;
// default 'any' type allows for all types; 
// a fallback type (not advised, it's standard JS now)

// Type Aliases: 
// 'type' is pure TS and will be thrown out when JS complied
// only have to define types once
type Person = {
  name: string,
  age: number
}

let person: Person; 

// type assignment 'object type definition' 
// defines structure of an object
// only objects with these types can be stored 
person = {
  name: 'Celeste',
  age: 28
};

// person = {
//   isInfinite: true
// } 
// will not be stored since types are declared as string and number

let people: Person[]; 
// store an array of person objects

// Type Inference: 
let course = 'React - The Complete Guide';

// course = 12345; 
// throws error because number cannot be assigned to string
// TS tries to infer which types are being used if not set
// then uses that value type as an inferred type for the variable

// Union Types: allow more than one type (as many as needed)

let book: string | number = 'React - The Complete Guide';
book = 12345
// can use wherever you're using type assignment
let user: string | string[];

// Functions & Types 
function add(a:number, b:number) {
  return a + b;
};
// the return value is inferred bc it sees the parameters have type numbers 
// can explicitly set return type:
  // function add(a:number, b:number): number | string

function printAddFunction(value: any) {
  console.log(value);
};
// it has no return statement so the return type = void (undefined), 
// this function never returns anything

// Generics:
// function insertAtBeginning(array: any[], value: any){ // set array to an array of any type
//   const newArray = [value, ...array];
//   return newArray;
// }
//   const demoArray = [1, 2, 3]; // TS doesn't see this as an array of numbers bc type = any

//   const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

//   updatedArray[0].split(''); 
//   // throws runtime error bc can't call split on a string 
//   //but TS doesn't see it as a string

function insertAtBeginning<T>(array: T[], value: T){ // type of array and value should be the same with this syntax
  const newArray = [value, ...array];
  return newArray;
}
  const demoArray = [1, 2, 3]; // TS doesn't see this as an array of numbers bc type = any

  const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
  const stringArray = insertAtBeginning(['a', 'b'], 'd');

  // updatedArray[0].split(''); 
  // throws (runtime) error bc can't call split on a string 
  //but TS doesn't see it as a string
  stringArray[0].split('');







