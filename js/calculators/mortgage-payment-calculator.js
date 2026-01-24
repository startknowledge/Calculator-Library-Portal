export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Mortgage Payment (EMI) Calculator</h3>

    <p>
      Calculate your monthly EMI (Equated Monthly Installment) 
      based on the loan amount, annual interest rate, and tenure.
    </p>

    <label>Loan Amount (₹)</label>
    <input type="number" id="loan" min="0" value="3000000" placeholder="e.g. 3000000">

    <label>Interest Rate (%)</label>
    <input type="number" id="rate" min="0" step="0.01" value="8" placeholder="e.g. 8">

    <label>Loan Tenure (Years)</label>
    <input type="number" id="years" min="0" value="20" placeholder="e.g. 20">

    <button onclick="calcMortgage()">Calculate</button>

    <p id="mortResult"></p>
    <br>

    <p><b>Formula:</b><br>
      EMI = P × r × (1+r)^n / ((1+r)^n − 1)<br>
      where P = Loan Amount, r = Monthly Interest Rate, n = Total Months
    </p>

    <p><b>Example:</b><br>
      Loan Amount = ₹3,000,000<br>
      Interest Rate = 8%<br>
      Tenure = 20 years<br>
      <b>Monthly EMI ≈ ₹25,039.29</b>
    </p>

    <p><b>Use Case:</b><br>
      Useful for home loans, personal loans, and financial planning.
    </p>

    <p><b>Disclaimer:</b> This calculator provides an estimate for planning purposes only.<br></p>
  `;

  window.calcMortgage = function () {
    const P = parseFloat(document.getElementById("loan").value);
    const annualRate = parseFloat(document.getElementById("rate").value);
    const years = parseFloat(document.getElementById("years").value);

    if (isNaN(P) || isNaN(annualRate) || isNaN(years) || P <= 0 || annualRate <= 0 || years <= 0) {
      document.getElementById("mortResult").innerHTML =
        "<b>Please enter valid positive numbers for all fields.</b>";
      return;
    }

    const r = (annualRate / 100) / 12; // monthly interest rate
    const n = years * 12; // total months

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    document.getElementById("mortResult").innerHTML =
      `<b>Monthly EMI:</b> ₹${emi.toFixed(2)}`;
  };

  return div;
}
