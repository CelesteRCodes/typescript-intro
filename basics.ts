// primitives: numbers, strings, booleans
// complex types: arrays, objects
// function types, parameters

// primitive types (start in lowercase): 

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

// array types:

let faves: string[];    // can only be an array of strings
faves = ['my bed', 'access to food', 'comfort'];

// object types:

// let person;
// default 'any' type allows for all types; 
// a fallback type (not advised, it's standard JS now)

let person: {
  name: string;
  age: number;
}; 
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

let people: {
  name: string,
  age: number
}[]; 
// store an array of person objects

// type inference: 
let course = 'React - The Complete Guide';

// course = 12345; 
// throws error because number cannot be assigned to string
// TS tries to infer which types are being used if not set
// then uses that value type as an inferred type for the variable

// union types: allow more than one type (as many as needed)

let book: string | number = 'React - The Complete Guide';
book = 12345
// can use wherever you're using type assignment
let user: string | string[];




