export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Inventory Turnover Calculator</h3>

    <label>Cost of Goods Sold (₹)</label>
    <input id="cogs" value="500000">

    <label>Average Inventory (₹)</label>
    <input id="avgInv" value="100000">

    <button onclick="calcInventory()">Calculate</button>
    <p id="invResult"></p>
    <br>
    <p>The Inventory Turnover Calculator helps you determine how efficiently your inventory is being managed by calculating the inventory turnover ratio. By entering the cost of goods sold and average inventory, users can quickly calculate how many times inventory is sold and replaced over a specific period.</p>
    <p>This calculator is useful for businesses looking to optimize their inventory management and improve cash flow.</p>
    <p>Ensure that the cost of goods sold and average inventory inputs are accurate to get a reliable turnover ratio.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter the cost of goods sold in the "Cost of Goods Sold" field and the average inventory in the "Average Inventory" field. Click the "Calculate" button to see the inventory turnover ratio displayed below.</p>
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Cost of Goods Sold (₹):</b> The total cost of goods sold during the period in Indian Rupees.</li>
      <li><b>Average Inventory (₹):</b> The average value of inventory during the period in Indian Rupees.</li>
    </ul>
    <p><b>Output:</b></p>
    <ul>
      <li><b>Inventory Turnover Ratio:</b> The calculated inventory turnover ratio.</li>
    </ul>
    <p><b>Note:</b> Ensure that the cost of goods sold and average inventory inputs are accurate to get a reliable turnover ratio.</p>
    <p><b>Example:</b> For a cost of goods sold of ₹500,000 and an average inventory of ₹100,000, the inventory turnover ratio would be 5.00.</p>
    <p><b>Formula:</b> Inventory Turnover Ratio = Cost of Goods Sold / Average Inventory</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual inventory turnover may vary based on additional factors such as seasonal fluctuations, changes in demand, and specific business conditions.</p>
    <br>
  `;

  window.calcInventory = function () {
    let cogs = +document.getElementById("cogs").value;
    let avg = +document.getElementById("avgInv").value;

    let turnover = cogs / avg;

    document.getElementById("invResult").innerHTML =
      `<b>Inventory Turnover Ratio:</b> ${turnover.toFixed(2)}`;
  };

  return div;
}
