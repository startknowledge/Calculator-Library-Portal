export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Flooring Cost Calculator</h3>

    <label>Floor Area (sq ft)</label>
    <input id="area" value="800">

    <label>Flooring Cost per sq ft (₹)</label>
    <input id="rate" value="120">

    <button onclick="calcFloor()">Calculate</button>
    <p id="floorResult"></p>
    <br>
    <p>Flooring Cost Calculator helps you estimate the total cost of flooring based on the area to be covered and the cost per square foot. Simply enter the floor area in square feet and the cost per square foot, then click "Calculate" to see the total flooring cost.</p>
    <p>This tool is useful for homeowners, contractors, and interior designers who need to budget for flooring projects. It allows for quick calculations and helps in making informed decisions about flooring options.</p>
    <p><b>Note:</b> Ensure that the area and cost inputs are accurate to get a reliable estimate.</p>
    <p><b>Example:</b> For a room of 800 sq ft with a flooring cost of ₹120 per sq ft, the total cost would be ₹96,000.</p> 
    <p><b>Formula:</b> Total Flooring Cost = Floor Area (sq ft) × Cost per sq ft (₹)</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual costs may vary based on additional factors such as labor, materials, and location.</p>
    <br>
  `;

  window.calcFloor = function () {
    let area = +document.getElementById("area").value;
    let rate = +document.getElementById("rate").value;

    document.getElementById("floorResult").innerHTML =
      `<b>Total Flooring Cost:</b> ₹${area * rate}`;
  };

  return div;
}
