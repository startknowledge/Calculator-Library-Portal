export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Loan EMI Calculator</h3>
    <p>Calculate your monthly EMI for a loan based on the principal, interest rate, and tenure.</p>

    <div class="form-group">
      <label>Loan Amount (₹)</label>
      <input type="number" id="loanAmount" placeholder="Enter loan amount">
    </div>

    <div class="form-group">
      <label>Interest Rate (% per annum)</label>
      <input type="number" id="loanRate" placeholder="Enter annual interest rate">
    </div>

    <div class="form-group">
      <label>Loan Tenure (Years)</label>
      <input type="number" id="loanYears" placeholder="Enter tenure in years">
    </div>

    <button onclick="calculateLoanEMI()">Calculate</button>
    <p id="loanResult"></p>

    <p><b>Formula:</b> EMI = P × r × (1+r)^n / ((1+r)^n − 1)</p>
    <p><b>Example:</b> Loan = ₹10,00,000, Rate = 8%, Tenure = 10 years → EMI ≈ ₹12,134</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate for planning purposes only. Actual EMI may vary depending on lender terms.</p>
    <br>
  `;

  window.calculateLoanEMI = function () {
    const p = parseFloat(document.getElementById("loanAmount").value);
    const r = parseFloat(document.getElementById("loanRate").value);
    const y = parseFloat(document.getElementById("loanYears").value);

    if (isNaN(p) || isNaN(r) || isNaN(y) || p <= 0 || r <= 0 || y <= 0) {
      document.getElementById("loanResult").innerText = "Please enter valid positive numbers.";
      return;
    }

    document.getElementById("loanResult").innerText =
      "Monthly EMI: ₹" + calculateEMI(p, r, y);
  };

  return div;
}

function calculateEMI(p, r, y) {
  const monthlyRate = r / 12 / 100;
  const n = y * 12;
  const emi = (p * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
  return emi.toFixed(2);
}
