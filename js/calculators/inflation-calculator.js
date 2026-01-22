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
    <br>
    <p>The Inflation Calculator helps you estimate the future cost of an item based on its current price, the expected inflation rate, and the time period in years. By entering these values, users can quickly calculate how much more they might need to pay in the future due to inflation.</p>
    <p>This calculator is useful for individuals and businesses who want to plan their finances and understand the impact of inflation on their purchasing power over time.</p>  
    <p>Ensure that the current cost, inflation rate, and time period inputs are accurate to get a reliable estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter the current cost of the item in the "Current Cost" field, the expected inflation rate in percentage in the "Inflation Rate" field, and the time period in years in the "Time Period" field. Click the "Calculate" button
    to see the estimated future cost displayed below.</p>
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Current Cost (₹):</b> The current cost of the item in Indian Rupees.</li>
      <li><b>Inflation Rate (%):</b> The expected annual inflation rate in percentage.</li>
      <li><b>Time Period (Years):</b> The number of years into the future for which you want to estimate the cost.</li>
    </ul>
    <p><b>Output:</b></p>
    <ul>
      <li><b>Future Cost (₹):</b> The estimated future cost of the item based on the provided inputs.</li>
    </ul>
    <p><b>Note:</b> Ensure that the current cost, inflation rate, and time period inputs are accurate to get a reliable estimate.</p>
    <p><b>Example:</b> For a current cost of ₹1000, an inflation rate of 5%, and a time period of 2 years, the future cost would be ₹1102.50.</p>
    <p><b>Formula:</b> Future Cost = Current Cost × (1 + Inflation Rate) ^ Time Period</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual costs may vary based on additional factors such as market conditions and specific economic changes.</p>
    <br>
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
