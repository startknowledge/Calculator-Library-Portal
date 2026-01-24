export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Paint Cost Estimator</h3>
    <p>Estimate the total cost of paint for a given area based on the cost per unit area.</p>

    <label>Area (sq ft)</label>
    <input id="area" value="1000">

    <label>Paint Cost per sq ft (₹)</label>
    <input id="rate" value="25">

    <button onclick="calcPaint()">Calculate</button>
    <p id="paintResult"></p>

    <p><b>Explanation:</b><br>
    This calculator multiplies the total area to be painted by the cost of paint per square foot to estimate total paint expenses.</p>

    <p><b>Formula:</b><br>
    Total Paint Cost (₹) = Area × Cost per sq ft</p>

    <p><b>Example:</b><br>
    Area = 1000 sq ft, Cost per sq ft = ₹25 → Total Paint Cost = 1000 × 25 = <b>₹25,000</b></p>

    <p><b>Disclaimer:</b><br>
    This calculator provides an estimate. Actual cost may vary depending on paint type, surface texture, number of coats, and labor charges.<br></p>
  `;

  window.calcPaint = function () {
    const area = parseFloat(document.getElementById("area").value);
    const rate = parseFloat(document.getElementById("rate").value);

    if (!area || !rate || area <= 0 || rate <= 0) {
      paintResult.innerHTML = "Please enter valid positive numbers.";
      return;
    }

    const cost = area * rate;

    document.getElementById("paintResult").innerHTML =
      `<b>Total Paint Cost:</b> ₹${cost.toFixed(2)}`;
  };

  return div;
}
