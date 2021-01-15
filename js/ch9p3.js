// Account list
// Let's build upon a previous account object exercise. A bank account is still defined by:

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Erica, another to Brad and the third one to Georges. 
// These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

class Account{
    constructor(name){
        this.owner = name
        this.balance = 0
    }
    credit(value){
        this.balance += value
    }
    describe(){
        console.log(`owner: ${this.owner}, balance ${this.balance}`)
    }
}

let accountsArray = [] //arr of objects

accountsArray.push(new Account('Erica'))
accountsArray.push(new Account('Brad'))
accountsArray.push(new Account('Georges'))

accountsArray.forEach(account => {
    account.credit(1000)
    console.log(account.describe())
})