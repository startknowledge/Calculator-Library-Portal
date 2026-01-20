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
    <p id="amzResult"></p>
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
