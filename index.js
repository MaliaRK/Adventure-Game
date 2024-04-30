#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellowBright.underline("\n\t***ADVENTURE GAME***\n"));
console.log(chalk.italic.yellowBright("\n\tLET'S START!"));
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    message: "Enter your name: ",
    type: "input",
    name: "name"
});
let opponent = await inquirer.prompt({
    message: "Select your opponent: ",
    type: "list",
    name: "select",
    choices: ["Skeleton", "Zombie", "Alien"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // Skeleton
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt({
            message: "What would you like to do?",
            type: "list",
            name: "opt",
            choices: ["Attack", "Drink portion", "Run for your life..."]
        });
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.redBright(`\n${p1.name} fuel is ${p1.fuel}.`));
                console.log(chalk.greenBright(`${o1.name} fuel is ${o1.fuel}.\n`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.redBright("\n\tYou Loose, Better Luck Next Time."));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.redBright(`\n${o1.name} fuel is ${o1.fuel}.`));
                console.log(chalk.greenBright(`${p1.name} fuel is ${p1.fuel}.\n`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.greenBright("\n\tYou Win!..."));
                    process.exit();
                }
            }
            ;
        }
        ;
        if (ask.opt === "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.blue(`\nYou drink health portion & your fuel is: ${p1.fuel}.\n`));
        }
        ;
        if (ask.opt === "Run for your life...") {
            console.log(chalk.bold.redBright("\n\tYou Loose, Better Luck Next Time."));
            process.exit();
        }
    }
    ;
    // Zombie
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt({
            message: "What would you like to do?",
            type: "list",
            name: "opt",
            choices: ["Attack", "Drink portion", "Run for your life..."]
        });
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.redBright(`\n${p1.name} fuel is ${p1.fuel}.`));
                console.log(chalk.greenBright(`${o1.name} fuel is ${o1.fuel}.\n`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.redBright("\n\tYou Loose, Better Luck Next Time."));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.redBright(`\n${o1.name} fuel is ${o1.fuel}.`));
                console.log(chalk.greenBright(`${p1.name} fuel is ${p1.fuel}.\n`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.greenBright("\n\tYou Win!..."));
                    process.exit();
                }
            }
            ;
        }
        ;
        if (ask.opt === "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.blue(`\nYou drink health portion & your fuel is: ${p1.fuel}.\n`));
        }
        ;
        if (ask.opt === "Run for your life...") {
            console.log(chalk.bold.redBright("\n\tYou Loose, Better Luck Next Time."));
            process.exit();
        }
    }
    ;
    // Alien
    if (opponent.select === "Alien") {
        let ask = await inquirer.prompt({
            message: "What would you like to do?",
            type: "list",
            name: "opt",
            choices: ["Attack", "Drink portion", "Run for your life..."]
        });
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.redBright(`\n${p1.name} fuel is ${p1.fuel}.`));
                console.log(chalk.greenBright(`${o1.name} fuel is ${o1.fuel}.\n`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.redBright("\n\tYou Loose, Better Luck Next Time."));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.redBright(`\n${o1.name} fuel is ${o1.fuel}.`));
                console.log(chalk.greenBright(`${p1.name} fuel is ${p1.fuel}.\n`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.greenBright("\n\tYou Win!..."));
                    process.exit();
                }
            }
            ;
        }
        ;
        if (ask.opt === "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.blue(`\nYou drink health portion & your fuel is: ${p1.fuel}.\n`));
        }
        ;
        if (ask.opt === "Run for your life...") {
            console.log(chalk.bold.redBright("\n\tYou Loose, Better Luck Next Time."));
            process.exit();
        }
    }
    ;
} while (true);
