export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Dropshipping Profit Calculator</h3>

    <label>Product Selling Price (₹)</label>
    <input id="sp" value="1500">

    <label>Supplier Cost (₹)</label>
    <input id="sc" value="900">

    <label>Marketing Cost per Unit (₹)</label>
    <input id="mc" value="150">

    <label>Units Sold</label>
    <input id="qty" value="40">

    <button onclick="calcDrop()">Calculate</button>
    <p id="dropResult"></p>
    <br>
    <p><u>Explanation about Dropshipping Profit Calculator</u> :</p>
    <p>The Dropshipping Profit Calculator is a valuable tool designed to help entrepreneurs and online retailers estimate their potential profits from dropshipping ventures. By inputting key financial parameters such as product selling price, supplier cost, marketing expenses, and the number of units sold, users can quickly calculate their total profit from dropshipping activities.</p>
    <p>To use the calculator, simply enter the selling price of the product, the cost charged by the supplier, the marketing cost incurred per unit sold, and the total number of units sold. Upon clicking the "Calculate" button, the calculator will compute the total profit by subtracting the supplier and marketing costs from the total revenue generated from sales.</p>
    <p>This tool is particularly useful for individuals looking to start or optimize their dropshipping business, as it provides insights into profitability and helps in making informed pricing and marketing decisions. By understanding the financial dynamics of dropshipping, users can strategize effectively to maximize their earnings.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional financial advice.</p>
    <br>
  `;

  window.calcDrop = function () {
    let sp = +document.getElementById("sp").value;
    let sc = +document.getElementById("sc").value;
    let mc = +document.getElementById("mc").value;
    let qty = +document.getElementById("qty").value;

    let profit = (sp - sc - mc) * qty;

    document.getElementById("dropResult").innerHTML =
      `<b>Total Profit:</b> ₹${profit}`;
  };

  return div;
}
