export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Loan EMI Calculator</h2>
    <p>This calculator computes the monthly EMI (Equated Monthly Installment) for a loan based on principal, interest rate, and tenure.</p>

    <div class="form-group">
      <label>Loan Amount (₹)</label>
      <input type="number" id="loanAmount" placeholder="Enter principal amount">
    </div>

    <div class="form-group">
      <label>Interest Rate (%)</label>
      <input type="number" id="loanRate" placeholder="Annual interest rate">
    </div>

    <div class="form-group">
      <label>Loan Tenure (Years)</label>
      <input type="number" id="loanYears" placeholder="Enter number of years">
    </div>

    <button onclick="calculateLoanEMI()">Calculate</button>
    <p id="loanResult"></p>

    <br>
    <p><b>Explanation:</b> The EMI is the fixed monthly payment you make to repay a loan over a specified tenure with a fixed interest rate.</p>
    <p><b>Formula:</b> <i>EMI = [P × r × (1 + r)^n] / [(1 + r)^n – 1]</i></p>
    <p><b>Calculator is a tool:</b> Useful for planning your loan repayments and budgeting.</p>
    <p><b>Relative Note:</b> The calculation assumes a fixed interest rate and equal monthly installments throughout the loan tenure.</p>
    <p><b>Based On:</b> Standard EMI formula used in banking and finance.</p>
    <p><b>To Use the Calculator:</b> Enter the loan amount, annual interest rate, and tenure in years, then click "Calculate".</p>
    <p><b>Note:</b> Ensure interest rate is annual and tenure is in years. The result shows monthly EMI.</p>
    <p><b>It is important:</b> EMI may vary if there are prepayments, changing interest rates, or fees.</p>
    <p><b>Disclaimer:</b> This is a reference calculator. Verify actual EMI with your bank or lender.</p>
    <br><hr>
  `;

  window.calculateLoanEMI = function () {
    const principal = parseFloat(document.getElementById("loanAmount").value);
    const rate = parseFloat(document.getElementById("loanRate").value);
    const years = parseFloat(document.getElementById("loanYears").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal <= 0 || rate <= 0 || years <= 0) {
      document.getElementById("loanResult").innerHTML = "❌ Please enter valid positive numbers for all fields.";
      return;
    }

    document.getElementById("loanResult").innerHTML =
      `<b>Monthly EMI:</b> ₹${calculateEMI(principal, rate, years)}`;
  };

  function calculateEMI(P, r, y) {
    r = r / 12 / 100; // monthly interest
    const n = y * 12; // total months
    return ((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)).toFixed(2);
  }

  return div;
}
