export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Software License Cost Calculator</h3>

    <label>Cost per License (₹)</label>
    <input id="rate" value="1500">

    <label>Number of Licenses</label>
    <input id="qty" value="20">

    <button onclick="calcLicense()">Calculate</button>
    <p id="licenseResult"></p>
  `;

  window.calcLicense = function () {
    let rate = +document.getElementById("rate").value;
    let qty = +document.getElementById("qty").value;

    document.getElementById("licenseResult").innerHTML =
      `<b>Total License Cost:</b> ₹${rate * qty}`;
  };

  return div;
}
