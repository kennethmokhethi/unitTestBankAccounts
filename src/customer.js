// const bcrypt = require("bcrypt");
// let Bank = require("./bank");

class Customer {
  constructor(bal, int, mon, bankAcc) {
    this.Bank = new Bank(bal, int, mon, bankAcc);
  }

  setPassword(passwordp) {
    this.Bank.Password = passwordp;
  }
}
