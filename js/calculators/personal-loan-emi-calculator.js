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
    <p id="loanResult"></p>
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
