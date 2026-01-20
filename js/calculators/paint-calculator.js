export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
  <br><br>
  <h3>Paint Required (litres) = Total Area (sq.m) / Coverage (sq.m/litre) </h3>
  <br><br>
    <label>Total Area (sq.m)</label>
    <input type="number" id="area">

    <label>Coverage (sq.m/litre)</label>
    <input type="number" id="coverage">

    <button onclick="calcPaint()">Calculate</button>
    <p id="paintResult"></p>
  `;

  window.calcPaint = function () {
    let paint = area.value / coverage.value;

    paintResult.innerHTML =
      `<b>Paint Required:</b> ${paint.toFixed(2)} litres`;
  };

  return div;
}
