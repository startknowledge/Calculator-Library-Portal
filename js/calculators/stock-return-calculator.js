export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Stock Return Calculator</h3>

    <div class="form-group">
      <label for="stockBuy">Buy Price (₹)</label>
      <input type="number" id="stockBuy">
    </div>

    <div class="form-group">
      <label for="stockSell">Sell Price (₹)</label>
      <input type="number" id="stockSell">
    </div>

    <div class="form-group">
      <label for="stockQty">Quantity</label>
      <input type="number" id="stockQty">
    </div>

    <button onclick="calculateStockUI()">Calculate</button>
    <p id="stockResult"></p>
  `;

  window.calculateStockUI = function () {
    let buy = document.getElementById("stockBuy").value;
    let sell = document.getElementById("stockSell").value;
    let qty = document.getElementById("stockQty").value;

    document.getElementById("stockResult").innerText =
      "Total Profit/Loss: ₹" + calculateStock(buy, sell, qty);
  };

  return div;
}

function calculateStock(buy, sell, qty) {
  buy = parseFloat(buy);
  sell = parseFloat(sell);
  qty = parseFloat(qty);

  return ((sell - buy) * qty).toFixed(2);
}
