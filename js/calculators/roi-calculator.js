export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>ROI Calculator</h3>

    <p>
      This calculator estimates the Return on Investment (ROI) for a given investment amount and its corresponding return.
    </p>

    <h4>Formula</h4>
    <p>
      ROI (%) = ((Return Amount − Investment Amount) / Investment Amount) × 100
    </p>

    <label>Investment Amount (₹)</label>
    <input id="invest" value="50000">

    <label>Return Amount (₹)</label>
    <input id="returnAmt" value="65000">

    <button onclick="calcROI()">Calculate</button>
    <p id="roiResult"></p>

    <h4>Example</h4>
    <p>
      Investment = ₹50,000<br>
      Return = ₹65,000<br>
      <b>ROI:</b> 30%
    </p>

    <h4>Note</h4>
    <p>
      ROI is a simple measure of the profitability of an investment. It does not consider the time period of the investment or any associated risks or costs.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This calculator provides an estimate for educational purposes. Do not rely solely on it for investment decisions.
    </p>
  `;

  window.calcROI = function () {
    let i = +document.getElementById("invest").value;
    let r = +document.getElementById("returnAmt").value;

    if (i <= 0 || r < 0) {
      document.getElementById("roiResult").textContent = "Please enter valid values.";
      return;
    }

    let roi = ((r - i) / i) * 100;

    document.getElementById("roiResult").innerHTML =
      `<b>ROI:</b> ${roi.toFixed(2)}%`;
  };

  return div;
}
