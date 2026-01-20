export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Paint Cost Estimator</h3>

    <label>Area (sq ft)</label>
    <input id="area" value="1000">

    <label>Paint Cost per sq ft (₹)</label>
    <input id="rate" value="25">

    <button onclick="calcPaint()">Calculate</button>
    <p id="paintResult"></p>
  `;

  window.calcPaint = function () {
    let area = +document.getElementById("area").value;
    let rate = +document.getElementById("rate").value;

    let cost = area * rate;

    document.getElementById("paintResult").innerHTML =
      `<b>Total Paint Cost:</b> ₹${cost}`;
  };

  return div;
}
