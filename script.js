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
    var a_1;
    var b_1;
    var c = // array
     void 0; // array
    var d = // obj
     void 0; // obj
    var e = //array obj
     void 0; //array obj
}
// TUPLES
// Tuples ek fixed type aur order ka array hota hai.
// Example: let info: [string, number] = ["John", 25]
/* let info: [string, number] = ["John", 25]; // Correct
info = ["John"]; // ❌ Error: Length kam hai
info = ["John", 25, true]; // ❌ Error: Length zyada hai
*/
{
    var a_2 = ["ali", 2];
    var b_2 = [1, 3, 4];
    var f = [true, "ali", 1];
    //nested tuplel
    var c = ["ali", [1, 2, 4]];
    var d = ["ali", [[1, 2], "zaid"]];
    var e = [
        ["ali,samad"],
        [
            ["samad", "ali"],
            [1, 2, 3, 4],
        ],
    ];
}
