export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Income Tax Calculator (New Regime)</h3>

    <label>Annual Income (₹)</label>
    <input type="number" id="income">

    <button onclick="calcIncomeTax()">Calculate</button>
    <p id="taxResult"></p>
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
