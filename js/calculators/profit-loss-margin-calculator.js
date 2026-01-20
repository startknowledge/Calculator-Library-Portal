export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Reseller Profit Loss Calculator</h3>

    <label>Purchase Price (₹)</label>
    <input id="buy" value="800">

    <label>Selling Price (₹)</label>
    <input id="sellR" value="1000">

    <label>Quantity</label>
    <input id="qty" value="10">

    <button onclick="calcResell()">Calculate</button>
    <p id="resellResult"></p>
  `;

  window.calcResell = function () {
    let buy = +document.getElementById("buy").value;
    let sell = +document.getElementById("sellR").value;
    let qty = +document.getElementById("qty").value;

    let profit = (sell - buy) * qty;

    document.getElementById("resellResult").innerHTML =
      `<b>Total Profit / Loss:</b> ₹${profit}`;
  };

  return div;
}
