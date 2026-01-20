export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Business Valuation Calculator</h3>

    <label>Annual Profit (₹)</label>
    <input id="profit" value="300000">

    <label>Valuation Multiple</label>
    <input id="multiple" value="4">

    <button onclick="calcVal()">Calculate</button>
    <p id="valResult"></p>
  `;

  window.calcVal = function () {
    let p = +profit.value;
    let m = +multiple.value;

    valResult.innerHTML =
      `<b>Estimated Business Value:</b> ₹${(p * m).toLocaleString()}`;
  };

  return div;
}
