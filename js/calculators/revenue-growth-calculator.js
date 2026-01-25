export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Revenue Growth Calculator</h3>
    <p>
      This calculator determines the percentage growth in revenue between two periods.
    </p>

    <h4>Formula</h4>
    <p>
      Revenue Growth (%) = ((New Revenue − Old Revenue) / Old Revenue) × 100
    </p>

    <label>Previous Revenue (₹)</label>
    <input id="old" value="500000">

    <label>Current Revenue (₹)</label>
    <input id="newR" value="650000">

    <button onclick="calcRG()">Calculate</button>
    <p id="rgResult"></p>

    <hr>

    <h4>How to Use</h4>
    <p>
      1. Enter the previous period's revenue.<br>
      2. Enter the current period's revenue.<br>
      3. Click "Calculate" to see the revenue growth percentage.
    </p>

    <h4>Example</h4>
    <p>
      Previous Revenue: ₹500,000<br>
      Current Revenue: ₹650,000<br>
      <b>Revenue Growth:</b> 30%
    </p>

    <h4>Note</h4>
    <p>
      A positive growth indicates an increase in revenue, while a negative value indicates a decline.
    </p>

    <h4>Disclaimer</h4>
    <p>
      Results are for informational purposes only. Actual business performance may vary due to multiple factors.
    </p>
  `;

  window.calcRG = function () {
    let old = +document.getElementById("old").value;
    let newR = +document.getElementById("newR").value;

    if (isNaN(old) || isNaN(newR) || old <= 0) {
      document.getElementById("rgResult").innerHTML = "<b>Please enter valid revenue values!</b>";
      return;
    }

    let growth = ((newR - old) / old) * 100;

    document.getElementById("rgResult").innerHTML =
      `<b>Revenue Growth:</b> ${growth.toFixed(2)} %`;
  };

  return div;
}
