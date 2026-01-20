export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="form-group">
      <label>Home Loan Amount (₹)</label>
      <input type="number" id="homeAmount">
    </div>

    <div class="form-group">
      <label>Interest Rate (%)</label>
      <input type="number" id="homeRate">
    </div>

    <div class="form-group">
      <label>Loan Tenure (Years)</label>
      <input type="number" id="homeYears">
    </div>

    <button onclick="calculateHomeEMI()">Calculate</button>
    <p id="homeResult"></p>
  `;

  window.calculateHomeEMI = function () {
    homeResult.innerText =
      "Monthly EMI: ₹" +
      calculateEMI(homeAmount.value, homeRate.value, homeYears.value);
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
