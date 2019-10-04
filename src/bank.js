class Bank {
  constructor(balance, interest, mon, bankAccountNumber) {
    this.bankAcc = new BankAccounts(balance, interest, mon);
    this.bankAccountNumber = bankAccountNumber;
    this.Password;
  }

  withdraw(bankAccountNumber, amount, secretPassword) {
    bankAccountNumber.bankAcc.withdraw(amount);
  }

  deposit(bankAccountNumber, amount) {
    bankAccountNumber.bankAcc.deposit(amount);
  }

  transfer(fromBankAcountNumber, toBankAccountNumber, amount, secretPassword) {
    fromBankAcountNumber.bankAcc.withdraw(amount);
    toBankAccountNumber.bankAcc.deposit(amount);
  }
}
