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
