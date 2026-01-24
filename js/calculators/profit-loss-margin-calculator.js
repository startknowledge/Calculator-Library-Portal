export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Reseller Profit / Loss Calculator</h3>

    <label>Purchase Price (₹)</label>
    <input id="buy" value="800">

    <label>Selling Price (₹)</label>
    <input id="sellR" value="1000">

    <label>Quantity</label>
    <input id="qty" value="10">

    <button onclick="calcResell()">Calculate</button>
    <p id="resellResult"></p>

    <h4>Explanation:</h4>
    <p>This calculator helps resellers determine their total profit or loss for a given quantity of items based on purchase and selling prices.</p>

    <h4>Formula:</h4>
    <p>Total Profit / Loss = (Selling Price − Purchase Price) × Quantity</p>

    <h4>How to Use:</h4>
    <p>Enter the purchase price, selling price, and quantity of items, then click "Calculate".</p>

    <h4>Note:</h4>
    <p>If the result is positive, it indicates profit; if negative, it indicates a loss.</p>

    <h4>Disclaimer:</h4>
    <p>This calculator provides an estimate and may not include taxes, shipping, or other business costs.</p>
  `;

  window.calcResell = function () {
    let buy = +document.getElementById("buy").value;
    let sell = +document.getElementById("sellR").value;
    let qty = +document.getElementById("qty").value;

    if (isNaN(buy) || isNaN(sell) || isNaN(qty) || qty < 0) {
      resellResult.innerHTML = "Please enter valid numbers!";
      return;
    }

    let profit = (sell - buy) * qty;

    document.getElementById("resellResult").innerHTML =
      `<b>Total Profit / Loss:</b> ₹${profit}`;
  };

  return div;
}
