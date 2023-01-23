// console.log("Hello World \n ");
// // alert("Hellow World")


// //  Practice:

// // console.log("Salam")
// // console.log(123)

// // VARIABLES
// // var x = 5;
// // var x = 4;
// // console.log(x)

// // let x = 5;
// // x = 4;
// // console.log(x)

// // const x = 3
// // const x = 5
// // console.log(x)

// // DATA TYPE
// // var x = "Pakistan"
// // console.log(typeof x)

// // LOGICAL OPERATORS
// // var var1 = 4
// // var var2 = 8
// // console.log(var1 + var2);
// // console.log(var1 - var2);
// // console.log(var1 * var2);
// // console.log(var1 / var2);

// // FUNCTIONS

// // Function Declaration:
// // function check() {
// //     console.log("Hello !")
// // }
// // check();

// // Function Expression:

// // var x = function check() {
// //     console.log("Printing inside Function Expression")
// // }
// // x();

// // Arrow Function:

// // var x = () => {
// //     console.log("Printing inside Arrow Function")
// // } 
// // x();

// // no need to add {} and return incase of only 1 line declaration.
// // Shortcut for 1 liner arrow function,

// // var x = (num1,num2) => num1 + num2;
// // console.log(x(3,4));


// // IF ELSE:

// // var num1 = 3;
// // var num2 = 6;
// // if (num2 == 0) {
// //     console.log("Denominator can not be zero")
// // }
// // else {
// //     console.log(num1/num2)
// // }


// // var num1 = 3;
// // var num2 = 0;
// // if (num2 == 0) {
// //     console.log("Denominator can not be zero")
// // }
// // else {
// //     console.log(num1/num2)
// // }


// // function div(num1,num2) {
// //     if (num2 == 0) {
// //         console.log("Denominator can not be zero")
// //     }
// //     else {
// //         console.log(num1/num2)
// //     }

// // }
// // div(4,2);
// // div(5,0);



// // OBJECTS (DICTIONERIES)

// var studentsData = {
//     name : "Hammad",
//     fName : "Aslam",
//     age : 27 
// } 

// // Accessing an object
// console.log(studentsData);

// // Accessing a value of an ocject  (way-1)
// console.log(studentsData.name)
// console.log(studentsData.fName)
// console.log(studentsData.age)

// // way-2
// // always use " " incase of accessiong through [ ] because its always takes string value. 
// console.log(studentsData["name"]);
// console.log(studentsData["fName"]);
// console.log(studentsData["age"]);

// // Adding a value to an object
// studentsData.city = "Karachi"
// console.log(studentsData.city);

// studentsData["Province"] = "Simdh"
// console.log(studentsData["Province"]);

// // Deleting a value of an object
// delete studentsData["name"]
// console.log(studentsData);

// // Chechking
// console.log(studentsData.hasOwnProperty("Country"))
// console.log(studentsData.hasOwnProperty("city"))