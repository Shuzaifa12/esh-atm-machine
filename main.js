#! /usr/bin/env node
console.log("\t\t ** WELCOME TO Ai BANK ACCOUNT ** ");
let Balance = 50000; // this is the current balance in an account
let pin = ["1245"]; // initially assigned the value of password
import inquirer from "inquirer"; // here we input password
let password = await inquirer.prompt({
    message: " Enter Your Pin to Login Into an Account : ",
    type: "input",
    name: "pass",
});
// these are the two messages assigned in a varible
let initial_message = " ** you are succesfully login into your account ** ";
let wrong_pass = " ** Wrong Password. Please Input correct password ** ";
// if input pin matches with initially assigned pin initial message will print
if (pin.includes(password.pass)) {
    console.log(initial_message.toUpperCase());
    // now after successfully login int an account it will ask for the actions to perform:
    // Options to perform action :
    let Options = await inquirer.prompt({
        message: " What action you want to perform ",
        type: "list",
        name: "Action",
        choices: ["Check_Balance", "Deposit_Cash", "Withdraw_Amount"],
    });
    // if option is equal to check balance the following statment will print
    if (Options.Action == "Check_Balance") {
        console.log(" YOUR CURRENT BALANCE IS = ", Balance);
    }
    // if option is equal to deposit cash the it will ask how much to deposit
    else if (Options.Action == "Deposit_Cash") {
        let deposit = await inquirer.prompt({
            message: " Please Enter the amount you want to deposit = ",
            type: "number",
            name: "cash",
        });
        Balance += deposit.cash; // here deposit value is added to original balance
        // after depsoit it will print a message
        console.log(" Your new balance is = ", Balance);
    }
    // if option is equal to withdraw  amount it will ask how much amount you want to withdraw
    else if (Options.Action == "Withdraw_Amount") {
        let withdraw = await inquirer.prompt({
            message: " Please Enter the amount you want to withdraw = ",
            type: "number",
            name: "amount",
        });
        // if amount is less than or equal to original balance the following if statement will print
        if (withdraw.amount <= Balance) {
            Balance -= withdraw.amount;
            console.log(`After withdrawing ${withdraw.amount}`, " Your new balance is = ", Balance);
        }
        // other wise it will show following message of insuffiency
        else {
            console.log("You don't have sufficient balance in your account, and your current balance is", Balance);
        }
    }
}
// if input pin does not matches to assigned pin the wrong pass message will print.
else {
    console.log(wrong_pass.toUpperCase());
}
