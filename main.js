import inquirer from "inquirer";
// initialize user balance and pin code
let mybalance = 2000;
let mypin = 1234;
// print welcome message;
console.log("welcome to my ATM Machine ");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please firstly enter your pin code :"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("pin is correct , login successfully !");
    // console.log(`current account balance is ${mybalance}`)
    let operationans = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operator:",
            choices: ["withdraw amount", "check balance"]
        }
    ]);
    if (operationans.operation === "withdraw amount") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter the amount to withdraw :"
            }
        ]);
        if (amountans.amount > mybalance) {
            console.log("insufficient balance");
        }
        else {
            mybalance -= amountans.amount;
            console.log(`${amountans.amount} wiithdraw successfully`);
            console.log(`your remaining balance is : ${mybalance}`);
        }
    }
    else if (operationans.operation === "check balance") {
        console.log(`your account balance is: ${mybalance}`);
    }
}
else {
    console.log(`pin is incorrect try again please!`);
}
