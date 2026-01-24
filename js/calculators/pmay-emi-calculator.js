export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>PMAY Approx EMI Calculator</h3>
    <p>Estimate your monthly EMI under the PMAY scheme.</p>
    <p><b>Formula:</b> EMI = Loan Amount ÷ (Years × 12)</p>

    <label>Loan Amount (₹)</label>
    <input type="number" id="loan" min="0" placeholder="Enter loan amount">

    <label>Tenure (Years)</label>
    <input type="number" id="years" min="1" placeholder="Enter number of years">

    <button onclick="calcPMAYEMI()">Calculate</button>
    <p id="emiResult"></p>

    <p><b>Disclaimer:</b> This is an approximate calculation. Actual EMI may vary based on interest rate and bank policies.</p>
    <br>
  `;

  window.calcPMAYEMI = function () {
    const loan = parseFloat(document.getElementById("loan").value);
    const years = parseFloat(document.getElementById("years").value);

    if (isNaN(loan) || loan <= 0) {
      emiResult.innerHTML = "Please enter a valid loan amount.";
      return;
    }

    if (isNaN(years) || years <= 0) {
      emiResult.innerHTML = "Please enter a valid tenure in years.";
      return;
    }

    const emi = loan / (years * 12);

    emiResult.innerHTML = `<b>Approx EMI:</b> ₹${emi.toFixed(2)}`;
  };

  return div;
}
