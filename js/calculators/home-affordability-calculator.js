export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Affordable Price ≈ (Monthly Income × 12 × 0.3) ÷ Interest Rate</h3>

    <label>Monthly Income (₹)</label>
    <input id="income" value="60000">

    <label>Interest Rate (%)</label>
    <input id="rate" value="8">

    <button onclick="calcAfford()">Calculate</button>
    <p id="affordResult"></p>
    <br>
    <p>The Home Affordability Calculator helps you estimate the maximum home price you can afford based on your monthly income and the interest rate. By entering these values, users can quickly calculate an affordable home price to assist in their home-buying decisions.</p>
    <p>This calculator is useful for prospective homebuyers who want to understand their budget constraints. It provides a quick way to evaluate how much house one can afford based on income and prevailing interest rates.</p>
    <p>Ensure that the monthly income and interest rate inputs are accurate to get a reliable affordability estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter your monthly income in the "Monthly Income" field and the current interest rate in the "Interest Rate" field. Click the "Calculate" button to see the estimated affordable home price displayed below.</p>  
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Monthly Income (₹):</b> Your total monthly income before taxes and deductions.</li>
      <li><b>Interest Rate (%):</b> The annual interest rate for the mortgage loan.</li>
    </ul>
    <p><b>Output:</b></p>
    <ul>
      <li><b>Affordable Home Price (₹):</b> The estimated maximum home price you can afford based on the provided inputs.</li>
    </ul>
    
    <p><b>Note:</b> Ensure that the monthly income and interest rate inputs are accurate to get a reliable affordability estimate.</p>
    <p><b>Example:</b> For a monthly income of ₹60,000 and an interest rate of 8%, the affordable home price would be approximately ₹27,00,000.</p>
    <p><b>Formula:</b> Affordable Price ≈ (Monthly Income × 12 × 0.3) ÷ Interest Rate</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual affordable home prices may vary based on additional factors such as down payment, loan terms, credit score, and other financial obligations.</p>
    <br>
  `;

  window.calcAfford = function () {
    let income = +document.getElementById("income").value;
    let rate = +document.getElementById("rate").value / 100;

    let affordable = (income * 12 * 0.3) / rate;

    affordResult.innerHTML =
      `<b>Affordable Home Price:</b> ₹${affordable.toFixed(0)}`;
  };

  return div;
}
