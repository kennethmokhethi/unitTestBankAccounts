let BankAccounts = require("./bankAccounts");

let customer = class Bank {
  constructor(balance, interest, mon, bankAccountNumber) {
    this.bankAcc = new BankAccounts(balance, interest, mon);
    this.bankAccountNumber = bankAccountNumber;
    this.Password;
  }

  withdraw(bankAccountNumber, amount, secretPassword) {
    if (this.password === secretPassword) {
      console.log("hi");
      bankAccountNumber.bankAcc.withdraw(amount);
    } else {
      console.log(`the following password is wrong ${this.Password}`);
      console.log(typeof secretPassword);
    }
  }

  deposit(bankAccountNumber, amount) {
    bankAccountNumber.bankAcc.deposit(amount);
  }

  transfer(fromBankAcountNumber, toBankAccountNumber, amount, secretPassword) {
    fromBankAcountNumber.bankAcc.withdraw(amount);
    toBankAccountNumber.bankAcc.deposit(amount);
  }
};
module.exports = customer;
// let bank2 = new Bank(2000, 12, 45);
// let bank2 = new Bank(1000, 12, 45);
// let bank3 = new Bank(100, 12, 45);

// console.log("after invoking the deposit method");
// bank1.transfer(bank1, bank2, 10);
// bank1.deposit(bank1, 150);
// console.log("Bank1 below");
// console.log(bank1);
// console.log("Bank3 below");
// console.log(bank2);
