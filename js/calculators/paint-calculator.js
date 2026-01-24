export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
  <br><br>
  <h3>Paint Required Calculator</h3>
  <p>Calculate the amount of paint needed based on total area and paint coverage.</p>

  <label>Total Area (sq.m)</label>
  <input type="number" id="area">

  <label>Coverage (sq.m/litre)</label>
  <input type="number" id="coverage">

  <button onclick="calcPaint()">Calculate</button>
  <p id="paintResult"></p>

  <p><b>Explanation:</b><br>
  This calculator helps determine how many litres of paint are required for a given area based on the coverage capacity of the paint.</p>

  <p><b>Formula:</b><br>
  Paint Required (litres) = Total Area ÷ Coverage</p>

  <p><b>Example:</b><br>
  Total Area = 120 sq.m, Coverage = 10 sq.m/litre → Paint Required = 120 ÷ 10 = <b>12 litres</b></p>

  <p><b>Disclaimer:</b><br>
  This calculator provides an estimate. Actual paint required may vary depending on surface texture, number of coats, and paint type.<br></p>
  `;

  window.calcPaint = function () {
    const area = parseFloat(document.getElementById("area").value);
    const coverage = parseFloat(document.getElementById("coverage").value);

    if (!area || !coverage || area <= 0 || coverage <= 0) {
      paintResult.innerHTML = "Please enter valid positive numbers.";
      return;
    }

    const paint = area / coverage;
    paintResult.innerHTML = `<b>Paint Required:</b> ${paint.toFixed(2)} litres`;
  };

  return div;
}
