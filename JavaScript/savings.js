function SavingCalc(paycheck) {
    this.percent = 0.30;
    this.paycheck = paycheck;
  
    this.deposit = function() {
      return (this.percent * this.paycheck)
    }
  }
  
const piggyBank = new SavingCalc(2000);
console.log(piggyBank.deposit());