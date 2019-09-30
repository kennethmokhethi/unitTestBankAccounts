let BankAccounts = require("./bankAccounts");

class Bank {
 
  constructor(balance, interest, mon, bankAccountNumber) {
    this.bankAcc = new BankAccounts(balance, interest, mon);
    this.bankAccountNumber = bankAccountNumber;
  }

  withdraw(bankAccountNumber, amount) {
    
    this.withdraw(amount);
    

  deposit(bankAccountNumber, amount) {
    this.bankAccountNumber.deposit(amount);
  }

  transfer(fromBankAcountNumber, toBankAccountNumber, amount) {
    toBankAccountNumber.deposit(amount);
    fromBankAcountNumber.withdraw(amount);
  }
}


let bank = new Bank(1000, 20, 30, 1245558545);


bank.bankAcc.finishMonth();

console.log(bank);

