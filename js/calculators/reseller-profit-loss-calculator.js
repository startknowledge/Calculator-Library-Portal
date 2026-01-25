export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Reseller Profit / Loss Calculator</h3>

    <p>
      The Reseller Profit / Loss Calculator helps online sellers,
      wholesalers, and traders calculate total profit or loss
      based on purchase price, selling price, and quantity sold.
    </p>

    <label>Purchase Price (₹ per unit)</label>
    <input type="number" id="buy" value="800">

    <label>Selling Price (₹ per unit)</label>
    <input type="number" id="sellR" value="1000">

    <label>Quantity</label>
    <input type="number" id="qty" value="10">

    <button onclick="calcResell()">Calculate</button>

    <p id="resellResult"></p>

    <hr>

    <h4>Explanation</h4>
    <p>
      Profit or loss in reselling depends on the difference between
      the selling price and the purchase price multiplied by
      the total quantity sold. This calculator provides a quick
      financial overview of your resale transactions.
    </p>

    <h4>Formula</h4>
    <p>
      <b>Profit / Loss</b> = (Selling Price − Purchase Price) × Quantity
    </p>

    <h4>How to Use the Calculator</h4>
    <p>
      1. Enter the purchase price per unit.<br>
      2. Enter the selling price per unit.<br>
      3. Enter the total quantity sold.<br>
      4. Click the Calculate button to view profit or loss.
    </p>

    <h4>Example</h4>
    <p>
      Purchase Price = ₹800<br>
      Selling Price = ₹1000<br>
      Quantity = 10<br>
      Profit = (1000 − 800) × 10 = <b>₹2000</b>
    </p>

    <h4>Note</h4>
    <p>
      This calculation does not include platform fees, shipping costs,
      taxes, packaging expenses, or discounts. Actual profit may vary
      after deducting operational costs.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This calculator is for informational purposes only and provides
      approximate results. Business decisions should consider all
      applicable costs, risks, and professional financial advice.
    </p>
  `;

  window.calcResell = function () {
    let buy = parseFloat(document.getElementById("buy").value);
    let sell = parseFloat(document.getElementById("sellR").value);
    let qty = parseFloat(document.getElementById("qty").value);

    if (isNaN(buy) || isNaN(sell) || isNaN(qty)) {
      document.getElementById("resellResult").innerHTML =
        "<b>Please enter valid numbers.</b>";
      return;
    }

    let profit = (sell - buy) * qty;

    let resultText =
      profit >= 0
        ? `<b>Total Profit:</b> ₹${profit.toFixed(2)}`
        : `<b>Total Loss:</b> ₹${Math.abs(profit).toFixed(2)}`;

    document.getElementById("resellResult").innerHTML = resultText;
  };

  return div;
}
