export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Mutual Fund Returns Calculator</h3>

    <p>
      Estimate the future value of your mutual fund investment based on the investment amount, expected annual return, and investment period.
    </p>

    <div class="form-group">
      <label for="mfInvestment">Investment Amount (₹)</label>
      <input type="number" id="mfInvestment" min="0" placeholder="e.g. 50000">
    </div>

    <div class="form-group">
      <label for="mfRate">Expected Annual Return (%)</label>
      <input type="number" id="mfRate" min="0" step="0.01" placeholder="e.g. 12">
    </div>

    <div class="form-group">
      <label for="mfYears">Investment Period (Years)</label>
      <input type="number" id="mfYears" min="0" placeholder="e.g. 10">
    </div>

    <button onclick="calculateMFUI()">Calculate</button>
    <p id="mfResult"></p>
    <br>

    <p><b>Formula:</b><br>
      Future Value = P × (1 + r)^n<br>
      where P = Investment Amount, r = Annual Return Rate (decimal), n = Years
    </p>

    <p><b>Example:</b><br>
      Investment = ₹50,000<br>
      Annual Return = 12%<br>
      Period = 10 years<br>
      <b>Future Value ≈ ₹155,799.64</b>
    </p>

    <p><b>Use Case:</b><br>
      Useful for financial planning, SIP calculations, and mutual fund investments.
    </p>

    <p><b>Disclaimer:</b> This calculator provides an estimate for planning purposes only. Actual returns may vary based on market conditions.<br></p>
  `;

  window.calculateMFUI = function () {
    const principal = parseFloat(document.getElementById("mfInvestment").value);
    const rate = parseFloat(document.getElementById("mfRate").value);
    const years = parseFloat(document.getElementById("mfYears").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal < 0 || rate < 0 || years < 0) {
      document.getElementById("mfResult").innerText = "Please enter valid positive numbers.";
      return;
    }

    const futureValue = principal * Math.pow(1 + rate / 100, years);
    document.getElementById("mfResult").innerHTML = `<b>Future Value:</b> ₹${futureValue.toFixed(2)}`;
  };

  return div;
}
