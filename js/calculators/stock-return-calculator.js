export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>Stock Return Calculator</h3>

      <div class="form-group">
        <label for="stockBuy">Buy Price (₹)</label>
        <input type="number" id="stockBuy" placeholder="e.g. 100">
      </div>

      <div class="form-group">
        <label for="stockSell">Sell Price (₹)</label>
        <input type="number" id="stockSell" placeholder="e.g. 150">
      </div>

      <div class="form-group">
        <label for="stockQty">Quantity</label>
        <input type="number" id="stockQty" placeholder="e.g. 50">
      </div>

      <button onclick="calculateStockUI()">Calculate</button>
      <p id="stockResult"></p>
      <br>

      <p><b>Explanation:</b> This calculator helps determine the total profit or loss from buying and selling stocks based on purchase price, selling price, and quantity.</p>
      <p><b>For example:</b> Buying 50 shares at ₹100 and selling at ₹150 gives a profit = (150-100) × 50 = ₹2500.</p>
      <p><b>Formula:</b> Profit / Loss = (Sell Price - Buy Price) × Quantity</p>
      <p>Calculator provides quick insight into stock returns.</p>
      <p>Accuracy depends on correct numeric input.</p>
      <p>To use the calculator, enter buy price, sell price, quantity, and click "Calculate".</p>
      <p><b>Note:</b> Ensure all values are positive numbers.</p>
      <p><b>Disclaimer:</b> For reference only; does not account for brokerage, taxes, or other charges.</p>
      <br>
    </div>
  `;

  window.calculateStockUI = function () {
    let buy = parseFloat(document.getElementById("stockBuy").value);
    let sell = parseFloat(document.getElementById("stockSell").value);
    let qty = parseFloat(document.getElementById("stockQty").value);

    if (!buy || !sell || !qty || buy <= 0 || sell <= 0 || qty <= 0) {
      document.getElementById("stockResult").innerHTML = "❌ Please enter valid positive numbers";
      return;
    }

    const total = ((sell - buy) * qty).toFixed(2);
    document.getElementById("stockResult").innerHTML =
      `<b>Total Profit/Loss:</b> ₹${total}`;
  };

  return div;
}
