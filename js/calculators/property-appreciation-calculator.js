export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Property Appreciation Calculator</h3>

    <label>Current Property Value (₹)</label>
    <input id="pv" value="5000000">

    <label>Annual Appreciation Rate (%)</label>
    <input id="rate" value="8">

    <label>Years</label>
    <input id="yrs" value="10">

    <button onclick="calcPA()">Calculate</button>
    <p id="paResult"></p>

    <h4>Explanation:</h4>
    <p>This calculator estimates the future value of a property based on its current value, annual appreciation rate, and the number of years held.</p>

    <h4>Formula:</h4>
    <p>Future Value = Current Value × (1 + Appreciation Rate)^Years</p>

    <h4>How to Use:</h4>
    <p>Enter the current property value, annual appreciation rate, and holding period in years, then click "Calculate".</p>

    <h4>Note:</h4>
    <p>The result assumes a constant annual appreciation rate and does not account for taxes, fees, or market fluctuations.</p>

    <h4>Disclaimer:</h4>
    <p>This calculator provides an estimate for planning purposes only and should not be considered financial advice.</p>
  `;

  window.calcPA = function () {
    let pv = +document.getElementById("pv").value;
    let rate = +document.getElementById("rate").value / 100;
    let yrs = +document.getElementById("yrs").value;

    if (isNaN(pv) || isNaN(rate) || isNaN(yrs) || pv < 0 || yrs < 0) {
      paResult.innerHTML = "Please enter valid values!";
      return;
    }

    let value = pv * Math.pow(1 + rate, yrs);

    document.getElementById("paResult").innerHTML =
      `<b>Future Property Value:</b> ₹${value.toFixed(0)}`;
  };

  return div;
}
