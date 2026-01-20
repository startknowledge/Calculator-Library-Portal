export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Delivery Cost Calculator</h3>

    <label>Distance (km)</label>
    <input id="dist" value="50">

    <label>Cost per km (₹)</label>
    <input id="rate" value="12">

    <button onclick="calcDelivery()">Calculate</button>
    <p id="deliveryResult"></p>
  `;

  window.calcDelivery = function () {
    let d = +document.getElementById("dist").value;
    let r = +document.getElementById("rate").value;

    let cost = d * r;

    document.getElementById("deliveryResult").innerHTML =
      `<b>Total Delivery Cost:</b> ₹${cost}`;
  };

  return div;
}
