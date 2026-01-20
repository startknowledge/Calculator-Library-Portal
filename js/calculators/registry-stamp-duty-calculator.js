export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Stamp Duty Calculator</h3>

    <label>Property Value (₹)</label>
    <input id="price" value="5000000">

    <label>Stamp Duty Rate (%)</label>
    <input id="rate" value="6">

    <button onclick="calcStamp()">Calculate</button>
    <p id="stampResult"></p>
  `;

  window.calcStamp = function () {
    let price = +document.getElementById("price").value;
    let rate = +document.getElementById("rate").value / 100;

    let duty = price * rate;

    document.getElementById("stampResult").innerHTML =
      `<b>Stamp Duty:</b> ₹${duty.toFixed(0)}`;
  };

  return div;
}
