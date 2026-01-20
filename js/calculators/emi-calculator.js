export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="form-group">
      <label>Loan Amount (₹)</label>
      <input type="number" id="emiAmount">
    </div>

    <div class="form-group">
      <label>Annual Interest Rate (%)</label>
      <input type="number" id="emiRate">
    </div>

    <div class="form-group">
      <label>Loan Tenure (Years)</label>
      <input type="number" id="emiYears">
    </div>

    <button onclick="calculateEMIUI()">Calculate</button>
    <p id="emiResult"></p>
  `;

  window.calculateEMIUI = function () {
    let p = emiAmount.value;
    let r = emiRate.value;
    let y = emiYears.value;

    emiResult.innerText = "Monthly EMI: ₹" + calculateEMI(p, r, y);
  };

  return div;
}

function calculateEMI(principal, rate, years) {
  principal = parseFloat(principal);
  let r = parseFloat(rate) / 12 / 100;
  let n = years * 12;

  let emi =
    (principal * r * Math.pow(1 + r, n)) /
    (Math.pow(1 + r, n) - 1);

  return emi.toFixed(2);
}
