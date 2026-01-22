export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Customer Acquisition Cost (CAC)</h3>
    <h3>Marketing Cost / New Customers</h3><br>
    <label>Marketing Cost (₹)</label>
    <input id="cost" value="50000">

    <label>New Customers</label>
    <input id="cust" value="100">

    <button onclick="calcCAC()">Calculate</button>
    <p id="cacResult"></p>
    <br>
    <p><u>Explanation about Customer Acquisition Cost (CAC) Calculator</u> :</p>
    <p>The Customer Acquisition Cost (CAC) Calculator is a financial tool designed to help businesses determine the average cost incurred to acquire a new customer. This metric is crucial for evaluating the effectiveness of marketing strategies and overall business profitability. By understanding CAC, companies can make informed decisions about their marketing budgets, pricing strategies, and customer retention efforts.</p>
    <p>To use the calculator, users need to input the total marketing cost spent on acquiring customers and the number of new customers gained during that period. The calculator then divides the total marketing cost by the number of new customers to provide the CAC value.</p>
    <p>This calculator is particularly useful for marketers, business owners, and financial analysts who want to assess the efficiency of their customer acquisition efforts. By providing a clear breakdown of acquisition costs, this tool aids in optimizing marketing strategies and improving return on investment (ROI).</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional financial advice or detailed business analysis.</p>
    <br>
  `;

  window.calcCAC = function () {
    let cost = +document.getElementById("cost").value;
    let cust = +document.getElementById("cust").value;

    let cac = cost / cust;

    cacResult.innerHTML =
      `<b>CAC:</b> ₹${cac.toFixed(2)}`;
  };

  return div;
}
