const prompt = require("prompt-sync")();

//function for
function createUser(name, age, deposit, withdraw)
{
    let balance = 0;

    return {
        name: name,
        age: age,
        deposit: deposit,
        withdraw: withdraw,

        name: function()
        {
            return name;
        },

        age: function()
        {
            return age;
        },

        deposit: function(amount)
        {
            return balance += amount;
        },

        withdraw: function(amount)
        {
            return balance -= amount;
        },

        getBalanceUser: function()
        {
            return balance;
        },

        getInfoUser: function()
        {
            console.log(`User name -> ${this.name}\nUser age -> ${this.age}\nUser balance -> ${this.balance}`);
        }
    }
    
}


//main function for for compiling the code 
function main()
{

}

main();