import inquirer from "inquirer";

let todolist: any[] = [];
let conditions = true

console.log("\n \t Welcome to to-do list application! \n")

async function runTodoList() {
    while (conditions) {
        let addTask = await inquirer.prompt([
            {
                name: "task",
                type: "input",
                message: "Input your new task:",
            }
        ]);
        todolist.push(addTask.task);
        console.log(`${addTask.task} is added in your to-do list!`);

        let moreTask = await inquirer.prompt([
            {
                name: "Addmore",
                type: "confirm",
                message: "Do you want to add another task?",
                default: false
            }
        ]);
        conditions = moreTask.Addmore;
    }

    console.log(`Your updated to-do list: ${todolist}`);
}

runTodoList();
