// Account list
// Let's build upon a previous account object exercise. A bank account is still defined by:

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Erica, another to Brad and the third one to Georges. 
// These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

class Account{
    constructor(name, balance, credit){
        this.name = name
        this.balance = balance
        this.credit = credit
    }
    describe(){
        console.log(`owner: ${this.name}, balance ${this.balance}`)
    }
}


let accountsArray = [] //arr of objects