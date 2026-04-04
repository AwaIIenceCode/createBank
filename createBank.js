const prompt = require("prompt-sync")();

//create objects for bank`s users
function createUser(name, age)
{
    let balance = 0;

    return {

        name: name,
        age: age,

        deposit: function(userAmount)
        {
            balance += userAmount;
        },

        withdraw: function(userAmount)
        {
            if (userAmount > balance)
                {
                    console.log("You can`t withrdraw more, than you have, try again");
                    return;
                }

            balance -= userAmount;
        },

        getBalance: function()
        {
            return balance;
        },

        getInfo: function()
        {
            console.log(`\nUser name -> ${name}\nUser age -> ${age}\nUser balance -> ${balance}`);
        }
    }
}

// function for check user input
function enterUserAmount()
{
    let userAmount = Number(prompt("Enter the sum -> "));

    if (isNaN(userAmount) || userAmount <= 0)
    {
        console.log("Enter the correct sum! Try again")
        return enterUserAmount();
    }

    return userAmount;
}

// function for check user age
function enterUserAge()
{
    let userAge = Number(prompt("Enter your age -> "));

    if (isNaN(userAge) || userAge < 18)
    {
        console.log("You can`t use this app, if you are under 18");
        return enterUserAge();
    }

    return userAge;
}

// function for check user name
function enterUserName()
{
    let userName = prompt("Enter your name -> ");

    if (!userName || userName.trim().length < 2)
    {
        console.log("Name can`t be less than 2 symbols, try again");
        return enterUserName();
    }

    return userName;
}

//main function for compiling the code 
function main()
{
    let userName = enterUserName();
    let userAge = enterUserAge();

    let user_1 = createUser(userName, userAge);

    while(true)
    {
        console.log("\nPress \"1\" for deposit your balance\nPress \"2\" for withdraw your balance\nPress \"3\" for check your balance\nPress \"4\" for check your info\nPress \"5\" for exit");

        let userChoice = Number(prompt("\nEnter your choice -> "));

        switch(userChoice)
        {
            case 1:
                {
                    let amount = enterUserAmount();
                    user_1.deposit(amount);

                    console.log(`Your balance: ${user_1.getBalance()} $`);

                    break;
                }

            case 2:
                {
                    let amount = enterUserAmount();
                    user_1.withdraw(amount);

                    console.log(`Your balance: ${user_1.getBalance()} $`);

                    break;
                }
            
            case 3:
                {
                    console.log(`\n${user_1.name}, In your deposit -> ${user_1.getBalance()} $`);
                    break;
                }

            case 4:
                {
                    user_1.getInfo();
                    break;
                }
            
            case 5:
                {
                    console.log("Exit the program...");
                    return;
                }

            default:
                {
                    console.log("There is no such answer option");
                    continue;
                }
        }
    }
}

main();