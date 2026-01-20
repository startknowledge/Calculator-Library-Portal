export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Inflation Calculator</h3>

    <div class="form-group">
      <label for="infAmount">Current Cost (₹)</label>
      <input type="number" id="infAmount">
    </div>

    <div class="form-group">
      <label for="infRate">Inflation Rate (%)</label>
      <input type="number" id="infRate">
    </div>

    <div class="form-group">
      <label for="infYears">Time Period (Years)</label>
      <input type="number" id="infYears">
    </div>

    <button onclick="calculateInflationUI()">Calculate</button>

    <p id="infResult"></p>
  `;

  window.calculateInflationUI = function () {
    let amount = document.getElementById("infAmount").value;
    let rate = document.getElementById("infRate").value;
    let years = document.getElementById("infYears").value;

    let result = calculateInflation(amount, rate, years);

    document.getElementById("infResult").innerText =
      "Future Cost: ₹" + result;
  };

  return div;
}

// 🔹 Formula function
function calculateInflation(currentAmount, inflationRate, years) {
  currentAmount = parseFloat(currentAmount);
  inflationRate = parseFloat(inflationRate) / 100;
  years = parseFloat(years);

  const futureCost =
    currentAmount * Math.pow(1 + inflationRate, years);

  return futureCost.toFixed(2);
}
