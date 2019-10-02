// const bcrypt = require("bcrypt");
let Bank = require("./bank");

class Customer {
  constructor(bal, int, mon, bankAcc) {
    this.Bank = new Bank(bal, int, mon, bankAcc);
  }

  setPassword(passwordp) {
    this.Bank.Password = passwordp;
  }
}

let cu = new Customer(1000, 2, 10, 12451);
console.log(cu);
console.log("===========================");
cu.setPassword(2);
console.log(cu);
console.log("===========================");
cu.Bank.withdraw(12451, 10, 2);
console.log("===========================");
console.log(cu.Bank.Password);
