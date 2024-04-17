// user/bin/env node 
import inquirer from "inquirer";
// declare a constant answer and assign it to the result of inquirer.prompt funstion
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter your sentence to count the words",
    }
]);
const words = answer.sentence.trim().split(" ");
// print array of words to console
console.log(words);
// print the word the count of sentence to console
console.log(`your sentence word count is ${words.length}`);
