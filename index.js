// // const promise = new Promise();
// // Json - pdf file
// // Database required data - get
// // Data display on screen - loading
// const promise = new Promise((fulfill, reject) => {
//   fulfill("Promise successfully executed");
// });
// promise
//   .then((val) => {
//     // console.log(val);
//   })
//   .catch(() => {});
// //   Async
// const getData = async () => {
//   try {
//     const data = await fetch("https://dummyjson.com/products");
//     const resp = await data.json();
//     console.log("🚀 ~ getData ~ data:", resp);
//   } catch (err) {
//     console.log(err);
//   }
// };
// getData();
import inquirer from "inquirer";
const calcInput = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter 1st number?",
    },
    {
        name: "num2",
        type: "number",
        message: "Enter 2nd number?",
    },
    {
        name: "operator",
        type: "list",
        message: "Choose on option.",
        choices: ["/", "+", "-", "*"],
    },
]);
// console.log("Sum of two nums", calcInput.num1 + calcInput.num2);
console.log(calcInput, "Calculator Input");
if (calcInput.operator === "+") {
    console.log(calcInput.num1 + calcInput.num2);
}
else if (calcInput.operator === "-") {
    console.log(calcInput.num1 - calcInput.num2);
}
