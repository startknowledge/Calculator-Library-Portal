export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Customer Lifetime Value (LTV)</h3>
    <small>Formula: APV × Frequency × Lifespan</small><br><br>

    <label>Average Purchase Value (₹)</label>
    <input id="apv" value="1500">

    <label>Purchase Frequency / Year</label>
    <input id="freq" value="5">

    <label>Customer Lifespan (Years)</label>
    <input id="life" value="4">

    <button onclick="calcLTV()">Calculate</button>
    <p id="ltvResult"></p>
    <br>
    <p><u>Explanation about Customer Lifetime Value (LTV) Calculator</u> :</p>
    <p>The Customer Lifetime Value (LTV) Calculator is a tool designed to help businesses estimate the total revenue they can expect from a customer over the entire duration of their relationship. By inputting the average purchase value, purchase frequency, and customer lifespan, users can calculate the LTV, which is a crucial metric for understanding customer profitability.</p>
    <p>To use the calculator, simply enter the average purchase value in Indian Rupees (₹), the number of purchases made by the customer per year, and the expected lifespan of the customer in years. The calculator will then multiply these three values to provide the total Customer Lifetime Value.</p>
    <p>This tool is particularly useful for marketers, sales strategists, and business owners who want to optimize their customer acquisition and retention strategies. Understanding LTV helps in making informed decisions about marketing budgets and customer relationship management.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional financial advice or detailed customer value analysis.</p>
    <br>
  `;

  window.calcLTV = function () {
    let apv = +document.getElementById("apv").value;
    let freq = +document.getElementById("freq").value;
    let life = +document.getElementById("life").value;

    let ltv = apv * freq * life;

    document.getElementById("ltvResult").innerHTML =
      `<b>Customer Lifetime Value:</b> ₹${ltv.toFixed(2)}`;
  };

  return div;
}
