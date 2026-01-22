export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="form-group">
      <label>Loan Amount (₹)</label>
      <input type="number" id="loanAmount">
    </div>

    <div class="form-group">
      <label>Interest Rate (%)</label>
      <input type="number" id="loanRate">
    </div>

    <div class="form-group">
      <label>Loan Tenure (Years)</label>
      <input type="number" id="loanYears">
    </div>

    <button onclick="calculateLoanEMI()">Calculate</button>
    <p id="loanResult"></p><br>
    <p><u>Explanation about Car Loan EMI Calculation</u> :</p>
    <p>EMI (Equated Monthly Installment) is the fixed payment amount made by a borrower to a lender at a specified date each calendar month. It is used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full.</p>
    <p>The formula to calculate EMI is:</p>
    <p>EMI = [P x R x (1+R)^N]/[(1+R)^N-1]</p>
    <p><u>Where,</u> </p>
    <ul>
      <li>P = Principal Loan Amount</li>
      <li>R = Monthly Interest Rate (Annual Rate / 12)</li>
      <li>N = Number of Monthly Installments (Loan Tenure in Years × 12)</li>
    </ul>
    <p>This formula takes into account the principal amount, the interest rate, and the loan tenure to calculate the fixed monthly payment required to repay the loan in full over the specified period.</p>
      const loanAmount = div.querySelector("#loanAmount");
      const loanRate = div.querySelector("#loanRate");
      const loanYears = div.querySelector("#loanYears");
      const loanResult = div.querySelector("#loanResult");
    <p>Different lenders may have varying interest rates and terms, so it's advisable to compare offers before finalizing a car loan.</p>
    <p>Disclaimer: This calculator provides an estimate and should not be considered as financial advice. For precise calculations and personalized advice, please consult a financial advisor or lender.</p>
    <br>

  `;

  window.calculateLoanEMI = function () {
    loanResult.innerText =
      "Monthly EMI: ₹" +
      calculateEMI(loanAmount.value, loanRate.value, loanYears.value);
  };

  return div;
}

function calculateEMI(p, r, y) {
  r = r / 12 / 100;
  let n = y * 12;
  return (
    (p * r * Math.pow(1 + r, n)) /
    (Math.pow(1 + r, n) - 1)
  ).toFixed(2);
}
