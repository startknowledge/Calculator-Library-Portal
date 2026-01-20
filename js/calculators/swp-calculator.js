export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>SWP Calculator</h3>

    <div class="form-group">
      <label for="swpAmount">Initial Investment (₹)</label>
      <input type="number" id="swpAmount">
    </div>

    <div class="form-group">
      <label for="swpWithdrawal">Monthly Withdrawal (₹)</label>
      <input type="number" id="swpWithdrawal" placeholder="Rs 500 or more">
    </div>

    <div class="form-group">
      <label for="swpRate">Annual Rate (%)</label>
      <input type="number" id="swpRate" placeholder="8% or as you expect">
    </div>

    <div class="form-group">
      <label for="swpYears">Time Period (Years)</label>
      <input type="number" id="swpYears" placeholder="5% or as you invest">
    </div>

    <button onclick="calculateSWPUI()">Calculate</button>

    <p id="swpResult"></p>
  `;

  window.calculateSWPUI = function () {
    let initial = document.getElementById("swpAmount").value;
    let withdrawal = document.getElementById("swpWithdrawal").value;
    let rate = document.getElementById("swpRate").value;
    let years = document.getElementById("swpYears").value;

    let result = calculateSWP(initial, withdrawal, rate, years);
    
    document.getElementById("swpResult").innerText =
      "Remaining Amount: ₹" + result;
  };

  return div;
}

function calculateSWP(initialAmount, withdrawal, rate, years) {
  initialAmount = parseFloat(initialAmount);
  withdrawal = parseFloat(withdrawal);
  rate = parseFloat(rate) / 100 / 12;
  years = parseFloat(years);

  let months = years * 12;
  let amount = initialAmount;

  for (let i = 0; i < months; i++) {
    amount = amount * (1 + rate) - withdrawal;
    if (amount < 0) return "0.00";
  }

  return amount.toFixed(2);
}
