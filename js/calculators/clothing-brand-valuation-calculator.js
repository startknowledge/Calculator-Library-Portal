export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Clothing Brand Valuation Calculator</h3>

    <label>Annual Revenue (₹)</label>
    <input id="rev" value="5000000">

    <label>Valuation Multiple</label>
    <input id="mul" value="3">

    <button onclick="calcBrand()">Calculate</button>
    <p id="brandResult"></p>
  `;

  window.calcBrand = function () {
    let rev = +document.getElementById("rev").value;
    let mul = +document.getElementById("mul").value;

    document.getElementById("brandResult").innerHTML =
      `<b>Estimated Brand Value:</b> ₹${(rev * mul).toFixed(0)}`;
  };

  return div;
}
