export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Amazon Seller Profit Calculator</h3>

    <label>Selling Price (₹)</label>
    <input id="sell" value="1200">

    <label>Cost Price (₹)</label>
    <input id="cost" value="800">

    <label>Units Sold</label>
    <input id="qty" value="50">

    <button id="calcBtn">Calculate</button>
    <p id="amzResult"></p><br>
    <p><u>Explanation about Amazon Seller Profit Calculation</u> :</p>
    <p>The Amazon Seller Profit Calculator is a tool designed to help sellers on the Amazon platform estimate their potential profits from selling products. By inputting key variables such as the selling price, cost price, and the number of units sold, sellers can quickly calculate their total profit.</p>
    <p>To use the calculator, sellers need to provide the selling price per unit, which is the amount they charge customers for each product. They also need to input the cost price per unit, which includes the expenses incurred to acquire or produce the product. Finally, sellers must enter the total number of units they expect to sell.</p>
    <p>The calculator then computes the profit by subtracting the total cost (cost price multiplied by units sold) from the total revenue (selling price multiplied by units sold). This provides sellers with a clear understanding of their earnings from sales on Amazon.</p>
    <p>Understanding profit margins is crucial for Amazon sellers as it helps them make informed decisions
    about pricing strategies, inventory management, and overall business planning. By regularly using the Amazon Seller Profit Calculator, sellers can optimize their operations and enhance their profitability on the platform.</p>
    <p>For more detailed information, please refer to Amazon seller resources or financial management guides.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of profit calculation for Amazon sellers. For specific details, please consult official Amazon resources or financial advisors.</p>
    <br>
  `;

  div.querySelector("#calcBtn").onclick = function () {
    let sell = +document.getElementById("sell").value;
    let cost = +document.getElementById("cost").value;
    let qty = +document.getElementById("qty").value;

    let profit = (sell - cost) * qty;

    document.getElementById("amzResult").innerHTML =
      `<b>Total Profit:</b> ₹${profit}`;
  };

  return div;
}
