// to compile ts code to js "tsc filename.ts"
// to watch the changes auto "tsc script.ts --watch"
// for global watch mode we create "tsc -- init"

var arr = [1, 2, 3, 4];
var arr2 = arr;
arr2.pop();
console.log("🚀 ~ arr2:", arr2);
console.log("🚀 ~ arr:", arr);

var a = 5;
var b = a;
a = a + 1;
console.log(a, "and", b);

// changes variable reference in primitive data type cannot change orignal value but in non primitive can..
/*Primitive data types store values directly, so when you do b = a, a copy of the value is created. Changes to b don't affect a because they are independent.

Non-primitive types store a reference to the value in memory. When b = a, both a and b point to the same memory location. Changes to the value via b will reflect in a because they share the same reference.*/

//Basic Data Types
// Numbers , Strings, Boolean, Arrays, Tuples, Any, Unknow, Never, Void, Enum

{
  let a: number;
  let b: string;
  let c: []; // array
  let d: {}; // obj
  let e: [{}]; //array obj
}

// TUPLES

// Tuples ek fixed type aur order ka array hota hai.
// Example: let info: [string, number] = ["John", 25]

/* let info: [string, number] = ["John", 25]; // Correct
info = ["John"]; // ❌ Error: Length kam hai
info = ["John", 25, true]; // ❌ Error: Length zyada hai
*/
{
  let a: [string, number] = ["ali", 2];
  let b: number[] = [1, 3, 4];
  let f: [boolean, string, number] = [true, "ali", 1];
  //nested tuplel
  let c: [string, number[]] = ["ali", [1, 2, 4]];
  let d: [string, [number[], string]] = ["ali", [[1, 2], "zaid"]];
  let e: [string[], [string[], number[]]] = [
    ["ali,samad"],
    [
      ["samad", "ali"],
      [1, 2, 3, 4],
    ],
  ];
}

// ANY

//never give type error
{
  let a: any;
  a = 1;
  a = "ali";
}

// NEVER
// { function infinte():never {
//     while(true){

//     }
//  }
//  infinte()
//  console.log("agy ka code nhi chalyga bcz loop will never ends");}

/*const sum = (a:number,b:number):number => {
    return a + b
}
sum(5,"2") */ //
// through and error bcz of one arr is number other is string

const sum = (a: number, b: number): number => {
  return a + b;
};
sum(1, 4);

// Void when nothing is return in  func

const vooid = (): void => {
  console.log("function is not returning anything");
};

// ENUM me pre define values ko store krty hai Enum: TypeScript automatically type-check karta hai enum ke values ko.

enum cars {
  tesla = "Tesla",
  toyota = "TOYOTA",
  ferrari = "FERRARI",
}

enum postion {
  x = 12,
  y = 15,
}

/* obj vs enum 
Enums ko aap fixed set of values ke liye use karte hain (like status, colors, etc.).
Enums ko enum keyword ke saath define kiya jata hai.
Enum values ko easily access kiya ja sakta hai aur wo automatically type-safe hote hain.
Object:

Objects me aap key-value pairs store karte hain, jahan values kisi bhi type ki ho sakti hain (numbers, strings, arrays, etc.).
Objects ko {} brackets me define kiya jata hai.
Objects me flexibility hoti hai, lekin wo enums ki tarah automatically type-safe nahi hote.

*/

// TYPE INFERENCE //automatically check type a/c value
{
  let a; //any type
  let b = "string"; //string
  let c = true; // boolean
}

// TYPE UNION and INTERSECTION

// UNION
{
  let a: string | number;
  a = 15;
  a = "ali";
  //   a= true // throw error bcz we use OR operator for UNION

  let b: null | number[];
  b = null;
  // b=1 // throw error bcz of we use array num
  b = [1, 2, 3];
}

// funfact
{
  let a: number;
  // a. will show all methods of number but if we

  let b: number | string;
  // b. we can only see those methods which are common in both number and string...

  // for check specfic

  let c: number | string;
  c = 25;
  if (typeof c === "number") {
    // c. will show all method if number
  }
  c = "ali";
  if (typeof c === "string") {
    // c.  all methods of string
  }
}

// imp concept
// practical example
{
  // let a: number | string;
  // a = "ali";
  // if (typeof a === "number") {
  //   a.toFixed(2);
  // } else if (typeof a === "string") {
  //   a.toUpperCase();
  // }
}

function uni(a: number | string) {
  if (typeof a === "number") {
    a.toFixed(2);
  } else if (typeof a === "string") {
    a.toUpperCase();
  }
}
uni(5);
uni("5");

// INTERSECTION take both types ..

{
  let a: number & String; // its value is never reads..
  //  overview of type and interfaces
  type city = {
    names: string;
  };
  type shop = {
    location: string;
    quantity: number;
  };

  type shopInCity = city & shop;

  let b: shopInCity = {
    // in here b belongs to type intersection
    names: "karachi",
    location: "tariq road",
    quantity: 24,
  }; // we created custom type inlcudes string and number
}

type studentsPersonalData = {
  name: string;
  address: string;
  contact: number;
  education: string;
};
type studentAcademyData = {
  batch: string;
  courses: string[];
  IsPresent: boolean;
  rollNo: number;
};

type studentInfo = studentsPersonalData & studentAcademyData;

let value: studentInfo = {
  name: "ali",
  address: "karachi",
  contact: 92300000,
  education: "Bsc",
  batch: "11",
  courses: ["WMA", "React Native"],
  IsPresent: true,
  rollNo: 172909,
};
