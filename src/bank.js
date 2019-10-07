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
    // this.Password;

    this.bAccounts.push([
      { bankAccountNumber: this.bankAccountNumber, bankAcc: this.bankAcc }
    ]);
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

  transfer(fromBankAcountNumber, toBankAccountNumber, amount) {
    this.withdraw(fromBankAcountNumber, amount);
    this.deposit(toBankAccountNumber, amount);
  }
}

let ken = new Bank(1000, 12, 2, 124);
ken.createAccounts(150, 2, 1, 552);
ken.createAccounts(110, 2, 1, 512);

// ken.withdraw(124, 10);

console.log(ken.bAccounts[0].bankAcc.balance);
console.log(ken.bAccounts[1].bankAcc.balance);
console.log(ken.bAccounts);
