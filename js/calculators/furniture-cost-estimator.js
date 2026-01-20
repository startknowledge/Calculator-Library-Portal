export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Furniture Cost Estimator</h3>

    <label>Number of Items</label>
    <input id="qty" value="5">

    <label>Average Cost per Item (₹)</label>
    <input id="rate" value="15000">

    <button onclick="calcFurniture()">Calculate</button>
    <p id="furnitureResult"></p>
  `;

  window.calcFurniture = function () {
    let qty = +document.getElementById("qty").value;
    let rate = +document.getElementById("rate").value;

    document.getElementById("furnitureResult").innerHTML =
      `<b>Total Furniture Cost:</b> ₹${qty * rate}`;
  };

  return div;
}
