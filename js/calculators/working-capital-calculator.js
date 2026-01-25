export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Working Capital Calculator</h2>
    <p>This calculator helps you determine the working capital of a business, which indicates the short-term financial health of the company.</p>

    <div class="form-group">
      <label>Current Assets (₹)</label>
      <input type="number" id="assets" value="300000" placeholder="Enter current assets">
    </div>

    <div class="form-group">
      <label>Current Liabilities (₹)</label>
      <input type="number" id="liabilities" value="180000" placeholder="Enter current liabilities">
    </div>

    <button onclick="calcWC()">Calculate</button>
    <p id="wcResult"></p>

    <br>
    <p><b>Explanation:</b> Working capital represents the difference between a company’s current assets and current liabilities. It shows the liquidity available to run day-to-day operations.</p>
    <p><b>Formula:</b> <i>Working Capital = Current Assets − Current Liabilities</i></p>
    <p><b>Calculator is a tool:</b> Helps business owners and financial analysts quickly assess liquidity and operational efficiency.</p>
    <p><b>Relative Note:</b> Positive working capital indicates good short-term financial health; negative indicates potential liquidity issues.</p>
    <p><b>Based On:</b> Standard accounting principles for current assets and current liabilities.</p>
    <p><b>To Use the Calculator:</b> Enter current assets and current liabilities, then click "Calculate". The working capital will be displayed below.</p>
    <p><b>Note:</b> Ensure that both values are correct and up-to-date for accurate results.</p>
    <p><b>It is important:</b> Use this calculation as a general guide and verify with official financial statements.</p>
    <p><b>Disclaimer:</b> The developer is not responsible for financial decisions made using this calculator. Always consult a certified accountant for critical business decisions.</p>
    <br><hr>
  `;

  window.calcWC = function () {
    let a = parseFloat(document.getElementById("assets").value);
    let l = parseFloat(document.getElementById("liabilities").value);

    if (isNaN(a) || isNaN(l) || a < 0 || l < 0) {
      wcResult.innerHTML = "❌ Please enter valid positive numbers.";
      return;
    }

    let wc = a - l;
    wcResult.innerHTML = `<b>Working Capital:</b> ₹${wc}`;
  };

  return div;
}
