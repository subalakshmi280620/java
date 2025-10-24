class Bankaccount{
 constructor(accountnumber, initialbalance = 0) {
    this.accountnumber = accountnumber;
    this.balance = initialbalance;
}

deposit(amount){
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance:${this.balance}`);
    } else {
        console.log(`Deposit amount must be positive.`);
    }
}
withdraw(amount){
    if (amount > 0) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`withdraw ${amount}. New balance: ${this.balance}`);
        } else {
            console.log(`Insufficient balance for withdrawal.`);
        }
    } else {
        console.log(`Account ${this.accountnumber} balance:${this.balance}`);
    }
}
checkbalance(){
    console.log(`Account ${this.accountnumber} balance:${this.balance}`);
    return this.balance;
}
}
const myaccount=new Bankaccount("js12345",500);
myaccount.checkbalance();
myaccount.deposit(200);
myaccount.checkbalance();
myaccount.withdraw(100);
myaccount.checkbalance();