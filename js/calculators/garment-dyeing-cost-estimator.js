export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Garment Dyeing Cost Estimator</h3>

    <label>Number of Pieces</label>
    <input id="pcs" value="200">

    <label>Cost per Piece (₹)</label>
    <input id="rate" value="15">

    <button onclick="calcDye()">Calculate</button>
    <p id="dyeResult"></p>
  `;

  window.calcDye = function () {
    let pcs = +document.getElementById("pcs").value;
    let rate = +document.getElementById("rate").value;

    document.getElementById("dyeResult").innerHTML =
      `<b>Total Dyeing Cost:</b> ₹${pcs * rate}`;
  };

  return div;
}
