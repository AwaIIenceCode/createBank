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

//main function for compiling the code 
function main()
{
    
}

main();