const prompt = require("prompt-sync")();

//create objects for bank`s users
function createUser(name, age)
{
    let balance = 0;

    return {

        name: name,
        age: age,

        getName: function()
        {
            return name;
        },

        getAge: function()
        {
            return age;
        },

        deposit: function(amount)
        {
            return balance += amount;
        },

        withdraw: function(amount)
        {
            if (amount > balance)
                {
                    console.log("You can`t withrdraw more, than you have, try again");
                    return this.withdraw(amount);
                }

            return balance -= amount;
        },

        getBalanceUser: function()
        {
            return balance;
        },

        getInfoUser: function()
        {
            console.log(`User name -> ${name}\nUser age -> ${age}\nUser balance -> ${balance}`);
        }
    }
}

// function for check user input
function enterUserAmount(message)
{
    let userAmount = Number(prompt(message));

    if (isNaN(message) || userAmount <= 0)
    {
        console.log("Enter the correct sum! Try again")
        return enterUserAmount(message);
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
    
}

main();