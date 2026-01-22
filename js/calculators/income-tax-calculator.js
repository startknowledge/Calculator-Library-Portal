export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Income Tax Calculator (New Regime)</h3>

    <label>Annual Income (₹)</label>
    <input type="number" id="income">

    <button onclick="calcIncomeTax()">Calculate</button>
    <p id="taxResult"></p>
    <br>
    <p>The Income Tax Calculator helps you estimate your income tax liability based on the new tax regime slabs. By entering your annual income, users can quickly calculate the tax payable.</p>
    <p>This calculator is useful for individuals who want to understand their tax obligations under the new income tax regime.</p>  
    <p>Ensure that the income input is accurate to get a reliable tax estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter your annual income in the "Annual Income" field. Click the "Calculate" button to see the estimated tax payable displayed below.</p>
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Annual Income (₹):</b> Your total annual income in Indian Rupees.</li>
    </ul>
    <p><b>Output:</b></p>
    <ul>
      <li><b>Tax Payable (₹):</b> The estimated tax payable based on your income.</li>
    </ul>
    <p><b>Note:</b> Ensure that the income input is accurate to get a reliable tax estimate.</p>
    <p><b>Example:</b> For an annual income of ₹500,000, the tax payable would be ₹15,000.</p>
    <p><b>Formula:</b> Tax Payable = Tax Slab Calculation Based on New Regime</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual tax liabilities may vary based on additional factors such as deductions, exemptions, and specific tax laws.</p>
    <br>
  `;

  window.calcIncomeTax = function () {
    let income = parseFloat(document.getElementById("income").value);
    let tax = 0;

    if (income <= 300000) tax = 0;
    else if (income <= 600000) tax = (income - 300000) * 0.05;
    else if (income <= 900000) tax = 15000 + (income - 600000) * 0.10;
    else if (income <= 1200000) tax = 45000 + (income - 900000) * 0.15;
    else if (income <= 1500000) tax = 90000 + (income - 1200000) * 0.20;
    else tax = 150000 + (income - 1500000) * 0.30;

    document.getElementById("taxResult").innerHTML =
      `<b>Tax Payable:</b> ₹${tax.toFixed(2)}`;
  };

  return div;
}
