export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Cash Flow Calculator</h3>

    <label>Cash Inflow (₹)</label>
    <input id="inflow" value="250000">

    <label>Cash Outflow (₹)</label>
    <input id="outflow" value="180000">

    <button onclick="calcCash()">Calculate</button>
    <p id="cashResult"></p>
  `;

  window.calcCash = function () {
    let inflow = +document.getElementById("inflow").value;
    let outflow = +document.getElementById("outflow").value;

    let net = inflow - outflow;

    document.getElementById("cashResult").innerHTML =
      `<b>Net Cash Flow:</b> ₹${net}`;
  };

  return div;
}
