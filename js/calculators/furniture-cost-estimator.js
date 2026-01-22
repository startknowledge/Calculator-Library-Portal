export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Furniture Cost Estimator</h3>

    <label>Number of Items</label>
    <input id="qty" value="5">

    <label>Average Cost per Item (₹)</label>
    <input id="rate" value="15000">

    <button onclick="calcFurniture()">Calculate</button>
    <p id="furnitureResult"></p>
    <br>
    <p>The Furniture Cost Estimator helps you calculate the total cost of furnishing a space based on the number of furniture items and their average cost. Simply enter the number of items and the average cost per item in rupees, then click "Calculate" to see the total furniture cost.</p>
    <p>This calculator is useful for homeowners, interior designers, and budget planners who need to estimate furniture expenses for a room or an entire home. It allows for quick calculations and aids in financial planning for furnishing projects.</p>
    <p><b>Note:</b> Ensure that the quantity and cost inputs are accurate to get a reliable estimate.</p>
    <p><b>Example:</b> For 5 furniture items with an average cost of ₹15,000 each, the total furniture cost would be ₹75,000.</p>
    <p><b>Formula:</b> Total Furniture Cost (₹) = Number of Items × Average Cost per Item (₹)</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual costs may vary based on additional factors such as taxes, delivery fees, and discounts.</p>
    <br>
  `;

  window.calcFurniture = function () {
    let qty = +document.getElementById("qty").value;
    let rate = +document.getElementById("rate").value;

    document.getElementById("furnitureResult").innerHTML =
      `<b>Total Furniture Cost:</b> ₹${qty * rate}`;
  };

  return div;
}
