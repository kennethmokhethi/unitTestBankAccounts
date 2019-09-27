class bankAccounts {
  constructor(balance, interest, monthlyFee) {
    this.balance = balance;
    this.interest = interest;
    this.monthlyFee = monthlyFee;
  }

  //   Upadate the balnce after an interest has been earned and monthfee deducted
  finishMonth() {
    this.balance =
      this.balance + this.balance * (this.interest / 12) - this.monthlyFee;
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
