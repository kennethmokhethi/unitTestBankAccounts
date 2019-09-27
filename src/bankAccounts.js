let bank = require("./bank");

class bankAccounts {
  constructor(balance, interest, monthlyFee) {
    this.balance = balance;
    this.interest = interest;
    this.monthlyFee = monthlyFee;
  }

  //   Upadate the balnce after an interest has been earned and monthfee deducted
  finishMonth() {
    let bal = (this.balance * (this.interest / 100)) / 12;

    this.balance = this.balance + bal - this.monthlyFee;
  }

  //   update the balnce when money deposited
  deposit(moneyIn) {
    this.balance += moneyIn;
  }

  //   update balance when money withdrawn
  withdraw(moneyOut) {
    this.balance -= moneyOut;
  }
}

// let bannkAc1 = new bankAccounts(1000, 12, 50);
// bannkAc1.finishMonth();
// console.log(bannkAc1.balance);
