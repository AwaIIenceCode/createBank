# Simple Bank App — JavaScript

A console-based banking application built with JavaScript, demonstrating closures, factory functions, input validation, and recursive error handling.

## Features

- Create a bank user with name and age validation
- Deposit funds to balance
- Withdraw funds with insufficient balance protection
- Check current balance
- View full user info

## Concepts used

**Closure for private balance** — `balance` is declared inside `createUser` and is not accessible directly from outside. It can only be modified through `deposit` and `withdraw` methods. This prevents direct manipulation like `user.balance = 999999`.

**Factory function** — `createUser(name, age)` creates and returns a new user object. Multiple independent users can be created without hardcoding data.

**Recursive input validation** — if the user enters invalid data, the input function calls itself until valid data is provided. This replaces the typical `while(true)` loop approach.

**Single responsibility** — input validation (`enterUserAmount`, `enterUserAge`, `enterUserName`) is separated from business logic (`createUser`) and program flow (`main`).

## How it works

```
Enter name → Enter age (must be 18+) → Main menu loop
```

Menu options:
| Option | Action |
|---|---|
| 1 | Deposit — enter amount, add to balance |
| 2 | Withdraw — enter amount, check if sufficient, subtract |
| 3 | Check balance |
| 4 | View user info |
| 5 | Exit |

## Usage example

```
Enter your name -> Oleg
Enter your age -> 25

Press "1" for deposit your balance
Press "2" for withdraw your balance
Press "3" for check your balance
Press "4" for check your info
Press "5" for exit

Enter your choice -> 1
Enter the sum -> 500
Your balance: 500 $
```

## How to run

```bash
npm install prompt-sync
node bank.js
```

## Requirements

- Node.js v14 or higher
- prompt-sync package

## Ideas for future development

- Multiple users support
- Transaction history
- Transfer between users
- Interest calculation
- Exchange rates (crypto exchange pet project)