export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Property EMI Calculator</h3>

    <label>Loan Amount (₹)</label>
    <input id="loan" value="4000000">

    <label>Interest Rate (%)</label>
    <input id="rate" value="9">

    <label>Loan Tenure (Years)</label>
    <input id="yrs" value="20">

    <button onclick="calcPEMI()">Calculate</button>
    <p id="emiResult"></p>

    <h4>Explanation:</h4>
    <p>This calculator estimates the monthly EMI (Equated Monthly Installment) for a property loan based on the loan amount, interest rate, and tenure.</p>

    <h4>Formula:</h4>
    <p>EMI = P × r × (1+r)^n / ((1+r)^n − 1)<br>
       where P = Loan Amount, r = Monthly Interest Rate, n = Total Months</p>

    <h4>How to Use:</h4>
    <p>Enter the loan amount, annual interest rate, and loan tenure in years, then click "Calculate".</p>

    <h4>Note:</h4>
    <p>This EMI calculation assumes a fixed interest rate and equal monthly payments throughout the loan tenure.</p>

    <h4>Disclaimer:</h4>
    <p>This calculator provides an estimate for planning purposes only and should not be considered financial advice.</p>

    <hr>

    <h3>Property Appreciation Calculator</h3>

    <label>Current Property Value (₹)</label>
    <input id="pv" value="5000000">

    <label>Annual Appreciation Rate (%)</label>
    <input id="apprate" value="8">

    <label>Years</label>
    <input id="apyrs" value="10">

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

  window.calcPEMI = function () {
    let P = +document.getElementById("loan").value;
    let r = +document.getElementById("rate").value / 12 / 100;
    let n = +document.getElementById("yrs").value * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || P < 0 || n <= 0) {
      emiResult.innerHTML = "Please enter valid values!";
      return;
    }

    let emi = (P * r * Math.pow(1 + r, n)) /
              (Math.pow(1 + r, n) - 1);

    document.getElementById("emiResult").innerHTML =
      `<b>Monthly EMI:</b> ₹${emi.toFixed(0)}`;
  };

  window.calcPA = function () {
    let pv = +document.getElementById("pv").value;
    let rate = +document.getElementById("apprate").value / 100;
    let yrs = +document.getElementById("apyrs").value;

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
