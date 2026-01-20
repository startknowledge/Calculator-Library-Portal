export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Reseller Profit / Loss Calculator</h3>

    <label>Purchase Price (₹)</label>
    <input type="number" id="buy" value="800">

    <label>Selling Price (₹)</label>
    <input type="number" id="sellR" value="1000">

    <label>Quantity</label>
    <input type="number" id="qty" value="10">

    <button onclick="calcResell()">Calculate</button>

    <p id="resellResult"></p>
  `;

  window.calcResell = function () {
    let buy = +document.getElementById("buy").value;
    let sell = +document.getElementById("sellR").value;
    let qty = +document.getElementById("qty").value;

    let profit = (sell - buy) * qty;

    let resultText =
      profit >= 0
        ? `<b>Total Profit:</b> ₹${profit}`
        : `<b>Total Loss:</b> ₹${Math.abs(profit)}`;

    document.getElementById("resellResult").innerHTML = resultText;
  };

  return div;
}
