export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Startup Valuation Calculator</h3>

    <label>Annual Revenue (₹)</label>
    <input type="number" id="revenue" value="5000000">

    <label>Industry Multiple (×)</label>
    <input type="number" id="multiple" value="4">

    <button onclick="calcValuation()">Calculate</button>
    <p id="valResult"></p>
  `;

  window.calcValuation = function () {
    let revenue =
      +document.getElementById("revenue").value;

    let multiple =
      +document.getElementById("multiple").value;

    let valuation = revenue * multiple;

    document.getElementById("valResult").innerHTML =
      `<b>Estimated Startup Valuation:</b> ₹${valuation.toLocaleString()}`;
  };

  return div;
}
