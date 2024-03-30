import inquirer from 'inquirer';
import chalk from 'chalk';
let myBalance = 10000; // in doller
let myPin = 9996;
console.log(chalk.blue("\n \tWelcome to your Account\t"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin number :",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("CORRECT PIN CODE ---- login successfully");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Enter your operation :",
            choices: [, "Withdraw", "check Balance",]
        }
    ]);
}
