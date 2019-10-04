describe("Evaluating the ankAccount class", () => {
  describe("Evaluating the bankAccount class values", () => {
    let bankAcc = new BankAccounts(1000, 7.5, 12);

    it("should return the balance", () => {
      expect(bankAcc.balance).toBe(1000);
    });
    it("should return the interest ", () => {
      expect(bankAcc.interest).toBe(7.5);
    });
    it("should return the monthly fee ", () => {
      expect(bankAcc.monthlyFee).toBe(12);
    });
  });

  describe("Testing the finish method", () => {
    it("Should return 2585.92", () => {
      let bankAcc2 = new BankAccounts(2500, 47, 12);
      bankAcc2.finishMonth();
      expect(bankAcc2.balance).toBe(2585.92);
    });
  });

  describe("Testing the withdraw method", () => {
    it("Should return 120", () => {
      let bankAcc3 = new BankAccounts(140, 47, 12);
      bankAcc3.withdraw(20);
      expect(bankAcc3.balance).toBe(120);
    });
  });

  describe("Testing the deposit method of bankAccounts class", () => {
    it("it return ..", () => {
      let bankAcc4 = new BankAccounts(200, 47, 12);
      bankAcc4.withdraw(20);
      expect(bankAcc4.balance).toBe(180);
    });
  });
});

describe("Testing bank class", () => {
  describe("Evaluating deposit", () => {
    it("return 112", () => {
      let bank = new Bank(100, 12, 2, 1245);
      bank.deposit(bank, 12);
      expect(bank.bankAcc.balance).toBe(112);
    });
  });

  describe("Evaluating the withdraw", () => {
    it("return 90", () => {
      let bank1 = new Bank(100, 12, 2, 1255);
      bank1.withdraw(bank1, 10, 1255);
      expect(bank1.bankAcc.balance).toBe(90);
    });
  });

  describe("Evaluating the transfer method", () => {
    let bank3 = new Bank(500, 12, 18, 245);
    let bank4 = new Bank(842, 47, 41, 954);
    bank3.transfer(bank3, bank4, 10);
    it("Should return 49", () => {
      expect(bank3.bankAcc.balance).toBe(490);
    });
    it("Should return 852", () => {
      expect(bank4.bankAcc.balance).toBe(852);
    });
  });
});
