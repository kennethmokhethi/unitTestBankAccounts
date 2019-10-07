let BankAccounts = require("./bankAccounts");

class Bank {
  constructor(balance, interest, mon, bankAccountNumber) {
    this.bankAcc = new BankAccounts(balance, interest, mon);
    this.bankAccountNumber = bankAccountNumber;
    // this.Password;
    this.bAccounts = [];
    this.bAccounts.push({
      bankAccountNumber: this.bankAccountNumber,
      bankAcc: this.bankAcc
    });
  }

  ///Method that creates the bank accounts
  createAccounts(balance, interest, mon, bankAccountNumber) {
    this.bankAcc = new BankAccounts(balance, interest, mon);
    this.bankAccountNumber = bankAccountNumber;
    this.Password;
    this.bAccounts.push[
      { bankAccountNumber: this.bankAccountNumber, bankAcc: this.bankAcc }
    ];
  }
  withdraw(bankAccountNumber, amount) {
    for (let a = 0; a < this.bAccounts.length; a++) {
      if (bankAccountNumber == this.bAccounts[a].bankAccountNumber) {
        this.bAccounts[a].bankAcc.withdraw(amount);
      }
    }
  }

  deposit(bankAccountNumber, amount) {
    for (let a = 0; a < this.bAccounts.length; a++) {
      if (bankAccountNumber == this.bAccounts[a].bankAccountNumber) {
        this.bAccounts[a].bankAcc.deposit(amount);
      }
    }
  }

  // transfer(fromBankAcountNumber, toBankAccountNumber, amount, secretPassword) {
  //   fromBankAcountNumber.bankAcc.withdraw(amount);
  //   toBankAccountNumber.bankAcc.deposit(amount);
  // }
}

let ken = new Bank(1000, 12, 2, 124);
ken.withdraw(124, 10);
console.log(ken.bankAcc.balance);
