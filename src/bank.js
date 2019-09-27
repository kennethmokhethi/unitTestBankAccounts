let bankAccount = require("./bankAccounts");

class Bank {
  constructor(bankAccountNumber) {
    this.bankAccountNumber = bankAccountNumber;
  }

  withdraw(bankAccountNumber, amount) {
    this.withdraw(bankAccountNumber, amount);
    this.bankAccountNumber.withdraw(amount);
  }

  deposit(bankAccountNumber, amount) {
    this.bankAccountNumber.deposit(amount);
  }

  transfer(fromBankAcountNumber, toBankAccountNumber, amount) {
    toBankAccountNumber.deposit(amount);
    fromBankAcountNumber.withdraw(amount);
  }
}

let bannkAc1 = new bankAccounts(1000, 12, 50);
let bank1 = Bank(bannkAc1);
console.log(bank1);
