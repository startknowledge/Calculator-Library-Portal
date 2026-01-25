export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>SIP (Systematic Investment Plan) Calculator</h3>
      <p>Calculate the future value of your monthly investments based on interest rate and investment duration.</p>

      <label>Monthly Investment (₹):</label>
      <input id="sipAmount" placeholder="e.g. 5000">

      <label>Expected Annual Rate of Return (%):</label>
      <input id="sipRate" placeholder="e.g. 12">

      <label>Investment Duration (Years):</label>
      <input id="sipYears" placeholder="e.g. 10">

      <button id="sipBtn">Calculate</button>
      <p id="sipResult"></p>
      <br>

      <p><b>Explanation:</b> SIP allows you to invest a fixed amount every month, compounding over time to grow your wealth.</p>
      <p><b>For example:</b> Investing ₹5,000 per month at 12% annual return for 10 years can result in a significant corpus.</p>
      <p><b>Formula:</b> FV = P × [((1 + r)^n - 1) / r] × (1 + r), where:</p>
      <ul>
        <li>P = Monthly Investment</li>
        <li>r = Monthly Rate of Return (Annual Rate / 12)</li>
        <li>n = Total Number of Months</li>
      </ul>
      <p>Calculator is a tool to estimate your investment growth over time.</p>
      <p>Accuracy depends on correct numeric input and assumptions about rate of return.</p>
      <p>Based on standard financial SIP compounding formula.</p>
      <p>To use the calculator, enter the monthly investment, expected annual return, and duration, then click "Calculate".</p>
      <p><b>Note:</b> Returns are illustrative; actual returns depend on market performance.</p>
      <p>It is important to enter valid numeric values.</p>
      <p><b>Disclaimer:</b> This calculator is for educational purposes and estimation only. Investment decisions should consider market risks and financial advice.</p>
      <br>
    </div>
  `;

  div.querySelector("#sipBtn").onclick = () => {
    let p = parseFloat(document.getElementById("sipAmount").value);
    let r = parseFloat(document.getElementById("sipRate").value);
    let y = parseFloat(document.getElementById("sipYears").value);

    if (!p || !r || !y) {
      document.getElementById("sipResult").innerHTML = "<b>Please enter valid values!</b>";
      return;
    }

    let result = calculateSIP(p, r, y);
    document.getElementById("sipResult").innerHTML = `<b>Future Value:</b> ₹${result}`;
  };

  return div;
}

function calculateSIP(monthlyInvestment, rate, years) {
  const r = rate / 100 / 12;
  const n = years * 12;

  const futureValue =
    monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

  return futureValue.toFixed(2);
}
