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
    <br>
    <p>The Garment Dyeing Cost Estimator helps you calculate the total cost of dyeing garments based on the number of pieces and the cost per piece. Simply enter the number of pieces and the cost per piece in rupees, then click "Calculate" to see the total dyeing cost.</p>
    <p>This calculator is useful for garment manufacturers, textile businesses, and fashion designers who need to estimate dyeing expenses for their products. It allows for quick calculations and aids in budgeting for production costs.</p>
    <p><b>Note:</b> Ensure that the quantity and cost inputs are accurate to get a reliable estimate.</p>
    <p><b>Example:</b> For 200 pieces with a dyeing cost of ₹15 each, the total dyeing cost would be ₹3,000.</p>
    <p><b>Formula:</b> Total Dyeing Cost (₹) = Number of Pieces × Cost per Piece (₹)</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual costs may vary based on additional factors such as fabric type, dye quality, and processing methods.</p>
    <br>
  `;

  window.calcDye = function () {
    let pcs = +document.getElementById("pcs").value;
    let rate = +document.getElementById("rate").value;

    document.getElementById("dyeResult").innerHTML =
      `<b>Total Dyeing Cost:</b> ₹${pcs * rate}`;
  };

  return div;
}
