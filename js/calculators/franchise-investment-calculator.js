export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Franchise Investment Calculator</h3>

    <label>Total Investment (₹)</label>
    <input id="inv" value="1000000">

    <label>Expected Monthly Profit (₹)</label>
    <input id="monthly" value="50000">

    <button onclick="calcFran()">Calculate</button>
    <p id="franResult"></p>
    <br>
    <p>The Franchise Investment Calculator helps you estimate the payback period for a franchise investment based on the total investment amount and the expected monthly profit. Simply enter the total investment in rupees and the expected monthly profit, then click "Calculate" to see the payback period in months.</p>
    <p>This calculator is useful for potential franchisees, investors, and business analysts who need to evaluate the financial viability of a franchise opportunity. It allows for quick calculations and aids in making informed investment decisions.</p>
    <p><b>Note:</b> Ensure that the investment and profit inputs are accurate to get a reliable estimate.</p>
    <p><b>Example:</b> For a franchise with a total investment of ₹1,000,000 and an expected monthly profit of ₹50,000, the payback period would be 20 months.</p>
    <p><b>Formula:</b> Payback Period (months) = Total Investment (₹) / Expected Monthly Profit (₹)</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual payback periods may vary based on additional factors such as operating costs, market conditions, and franchise performance.</p>
    <br>
  `;

  window.calcFran = function () {
    let inv = +document.getElementById("inv").value;
    let monthly = +document.getElementById("monthly").value;

    let months = inv / monthly;

    document.getElementById("franResult").innerHTML =
      `<b>Payback Period:</b> ${months.toFixed(1)} months`;
  };

  return div;
}
