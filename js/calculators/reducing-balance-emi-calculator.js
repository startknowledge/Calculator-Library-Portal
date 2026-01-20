export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="form-group">
      <label>Loan Amount (₹)</label>
      <input type="number" id="rbAmount">
    </div>

    <div class="form-group">
      <label>Interest Rate (%)</label>
      <input type="number" id="rbRate">
    </div>

    <div class="form-group">
      <label>Tenure (Years)</label>
      <input type="number" id="rbYears">
    </div>

    <button onclick="calculateRBEMI()">Calculate</button>
    <p id="rbResult"></p>
  `;

  window.calculateRBEMI = function () {
    rbResult.innerText =
      "Monthly EMI: ₹" +
      calculateEMI(rbAmount.value, rbRate.value, rbYears.value);
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
