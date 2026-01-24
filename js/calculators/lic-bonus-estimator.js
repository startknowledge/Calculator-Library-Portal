export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>LIC Bonus Estimator</h3>

    <label>Sum Assured (₹)</label>
    <input type="number" id="licSum">

    <label>Bonus Rate (₹ per 1000)</label>
    <input type="number" id="licRate">

    <label>Policy Term (Years)</label>
    <input type="number" id="licYears">

    <button onclick="calcLICBonus()">Calculate</button>
    <p id="licResult"></p>
    <br>
    <p>The LIC Bonus Estimator helps policyholders estimate the total bonus earned over the policy term.</p>
    <p>This calculator is useful for understanding maturity benefits of LIC policies that offer reversionary bonuses.</p>
    <p>By entering the sum assured, declared bonus rate, and policy duration, users can quickly calculate the estimated bonus.</p>    <p><b>How to Use:</b></p>
    <p>
      Enter the Sum Assured, Bonus Rate (per ₹1000), and Policy Term in years.
      Click the <b>Calculate</b> button to view the estimated LIC bonus.
    </p>
    <p><b>Formula:</b></p>
    <p>Total Bonus = (Sum Assured ÷ 1000) × Bonus Rate × Policy Term</p>
    <p><b>Example:</b></p>
    <p>
      If Sum Assured = ₹5,00,000, Bonus Rate = ₹50 per 1000,
      Policy Term = 20 years,<br>
      Estimated Bonus = <b>₹5,00,000</b>
    </p>
    <p><b>Note:</b> Bonus rates are declared by LIC annually and may vary.</p>
    <p><b>Disclaimer:</b> This calculator provides an estimated value for informational purposes only. Actual bonus may differ based on LIC policy terms and declarations.</p>
    <br>
  `;

  window.calcLICBonus = function () {
    let sum = parseFloat(document.getElementById("licSum").value) || 0;
    let rate = parseFloat(document.getElementById("licRate").value) || 0;
    let years = parseFloat(document.getElementById("licYears").value) || 0;

    let bonus = (sum / 1000) * rate * years;

    document.getElementById("licResult").innerHTML =
      `<b>Estimated Bonus:</b> ₹${bonus.toFixed(2)}`;
  };

  return div;
}
