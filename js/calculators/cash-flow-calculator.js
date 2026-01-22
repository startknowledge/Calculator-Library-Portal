export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Cash Flow Calculator</h3>

    <label>Cash Inflow (₹)</label>
    <input id="inflow" value="250000">

    <label>Cash Outflow (₹)</label>
    <input id="outflow" value="180000">

    <button onclick="calcCash()">Calculate</button>
    <p id="cashResult"></p><br>
    <p><u>Explanation about Cash Flow Calculator</u> :</p>
    <p>This calculator helps you determine the net cash flow by subtracting cash outflows from cash inflows. It is useful for assessing the financial health of a business or personal finances over a specific period.</p>
    <p>For example, if your cash inflow is ₹250,000 and your cash outflow is ₹180,000, the net cash flow would be ₹70,000.</p>
    <p>Positive net cash flow indicates more money coming in than going out, while negative net cash flow indicates the opposite.</p>
    <p>Disclaimer: This tool provides a basic calculation and should not be used as a substitute for professional financial advice.</p>
    <br>
  `;

  window.calcCash = function () {
    let inflow = +document.getElementById("inflow").value;
    let outflow = +document.getElementById("outflow").value;

    let net = inflow - outflow;

    document.getElementById("cashResult").innerHTML =
      `<b>Net Cash Flow:</b> ₹${net}`;
  };

  return div;
}
