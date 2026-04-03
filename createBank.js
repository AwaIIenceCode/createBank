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
                    console.log("You can`t withrdraw more, than you have, try again...");
                    return;
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



//main function for compiling the code 
function main()
{
    
}

main();