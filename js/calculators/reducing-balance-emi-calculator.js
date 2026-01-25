export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Reducing Balance EMI Calculator</h3>

    <p>
      This calculator helps you calculate the monthly EMI (Equated Monthly Installment)
      using the reducing balance interest method, commonly used by banks and NBFCs.
    </p>

    <div class="form-group">
      <label>Loan Amount (₹)</label>
      <input type="number" id="rbAmount" placeholder="e.g. 500000">
    </div>

    <div class="form-group">
      <label>Interest Rate (% per annum)</label>
      <input type="number" id="rbRate" placeholder="e.g. 9">
    </div>

    <div class="form-group">
      <label>Tenure (Years)</label>
      <input type="number" id="rbYears" placeholder="e.g. 20">
    </div>

    <button onclick="calculateRBEMI()">Calculate</button>
    <p id="rbResult"></p>

    <hr>

    <h4>Explanation</h4>
    <p>
      In the reducing balance method, interest is calculated on the outstanding
      loan balance after each EMI payment. As the principal reduces over time,
      the interest component also decreases.
    </p>

    <h4>Formula</h4>
    <p>
      <b>
      EMI = [P × R × (1 + R)<sup>N</sup>] ÷ [(1 + R)<sup>N</sup> − 1]
      </b>
    </p>
    <p>
      Where:<br>
      P = Loan Amount<br>
      R = Monthly Interest Rate (Annual Rate ÷ 12 ÷ 100)<br>
      N = Loan Tenure in Months
    </p>

    <h4>How to Use the Calculator</h4>
    <p>
      1. Enter the loan amount.<br>
      2. Enter the annual interest rate.<br>
      3. Enter the loan tenure in years.<br>
      4. Click on Calculate to get the monthly EMI.
    </p>

    <h4>Example</h4>
    <p>
      Loan Amount = ₹5,00,000<br>
      Interest Rate = 9% per annum<br>
      Tenure = 20 years<br>
      <b>Monthly EMI ≈ ₹4,498</b>
    </p>

    <h4>Note</h4>
    <p>
      This calculator assumes a fixed interest rate throughout the loan tenure.
      Actual EMI may vary based on lender policies and interest rate changes.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This calculator provides approximate results for informational purposes only.
      Please consult your bank or financial advisor for exact loan repayment details.
    </p>
  `;

  window.calculateRBEMI = function () {
    const p = parseFloat(rbAmount.value);
    const r = parseFloat(rbRate.value);
    const y = parseFloat(rbYears.value);

    if (isNaN(p) || isNaN(r) || isNaN(y)) {
      rbResult.innerHTML = "<b>Please enter valid values.</b>";
      return;
    }

    rbResult.innerHTML =
      "<b>Monthly EMI:</b> ₹" + calculateEMI(p, r, y);
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
