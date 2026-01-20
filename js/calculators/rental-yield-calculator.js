export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Rental Yield Calculator</h3>

    <label>Annual Rent (₹)</label>
    <input id="rent" value="240000">

    <label>Property Value (₹)</label>
    <input id="value" value="6000000">

    <button onclick="calcYield()">Calculate</button>
    <p id="yieldResult"></p>
  `;

  window.calcYield = function () {
    let rent = +document.getElementById("rent").value;
    let value = +document.getElementById("value").value;

    let yieldPct = (rent / value) * 100;

    document.getElementById("yieldResult").innerHTML =
      `<b>Rental Yield:</b> ${yieldPct.toFixed(2)} %`;
  };

  return div;
}
