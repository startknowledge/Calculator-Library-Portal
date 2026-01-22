export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Economic Order Quantity (EOQ) Calculator</h3>
    <h3>EOQ = √((2 × Demand × Ordering Cost) ÷ Holding Cost)</h3><br>

    <label>Annual Demand (Units)</label>
    <input id="demand" value="10000">

    <label>Ordering Cost per Order (₹)</label>
    <input id="orderCost" value="500">

    <label>Holding Cost per Unit / Year (₹)</label>
    <input id="holdCost" value="20">

    <button onclick="calcEOQ()">Calculate</button>
    <p id="eoqResult"></p>
    <br>
    <p><u>Explanation about Economic Order Quantity (EOQ) Calculator</u> :</p>
    <p>The Economic Order Quantity (EOQ) Calculator is a tool designed to help businesses determine the optimal order quantity that minimizes the total inventory costs, which include ordering costs and holding costs. By inputting key parameters such as annual demand, ordering cost per order, and holding cost per unit per year, users can quickly calculate the EOQ using the EOQ formula.</p>
    <p>The EOQ formula is given by EOQ = √((2 × Demand × Ordering Cost) ÷ Holding Cost). This formula helps businesses find the most cost-effective quantity to order, balancing the costs associated with ordering too frequently against the costs of holding excess inventory.</p>
    <p>To use the calculator, simply enter the annual demand in units, the cost incurred each time an order is placed, and the cost to hold one unit of inventory for a year. After clicking the "Calculate" button, the tool will compute and display the optimal order quantity that minimizes total inventory costs.</p>
    <p>This calculator is particularly useful for inventory managers, supply chain professionals, and business owners who aim to optimize their inventory management practices. By determining the EOQ, businesses can reduce costs, improve cash flow, and enhance overall operational efficiency.</p>
    <p>In summary, the Economic Order Quantity (EOQ) Calculator is a valuable resource for making informed decisions about inventory ordering strategies, ultimately leading to cost savings and improved business performance.</p> 
    <p><b>Note:</b> This calculator assumes constant demand and lead time, and does not account for quantity discounts or stockouts.</p>
    <p>For more detailed analysis, consider consulting with a supply chain expert or using advanced inventory management software.</p>
    <p>Happy Calculating!</p>
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a financial advisor or supply chain expert for critical business decisions.</p>
    <br>






  `;

  window.calcEOQ = function () {
    let demand = +document.getElementById("demand").value;
    let orderCost = +document.getElementById("orderCost").value;
    let holdCost = +document.getElementById("holdCost").value;

    let eoq = Math.sqrt((2 * demand * orderCost) / holdCost);

    document.getElementById("eoqResult").innerHTML =
      `<b>Optimal Order Quantity (EOQ):</b> ${eoq.toFixed(0)} units`;
  };

  return div;
}
