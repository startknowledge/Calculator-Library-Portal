export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Total Water = Area × Water per Acre</h3>

    <label>Land Area (Acre)</label>
    <input id="area" value="3">

    <label>Water per Acre (Liters)</label>
    <input id="rate" value="5000">

    <button onclick="calcWater()">Calculate</button>
    <p id="waterResult"></p>
    <br>
    <p>The Irrigation Water Requirement Calculator helps you determine the total water needed for irrigation based on the land area and the water requirement per acre. By entering the area of land in acres and the water needed per acre in liters, users can quickly calculate the total water requirement for their irrigation needs.</p>
    <p>This calculator is useful for farmers, agricultural planners, and irrigation specialists looking to efficiently manage water resources for crop production.</p>
    <p>Ensure that the land area and water per acre inputs are accurate to get a reliable water requirement estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter the land area in acres in the "Land Area" field and the water requirement per acre in liters in the "Water per Acre" field. Click the "Calculate" button to see the total water requirement displayed below.</p>
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Land Area (Acre):</b> The total area of land to be irrigated, measured in acres.</li>
      <li><b>Water per Acre (Liters):</b> The amount of water required per acre, measured in liters.</li>
    </ul>
    <p><b>Outputs:</b></p>
    <ul>
      <li><b>Total Water Required:</b> The total amount of water required for irrigation, measured in liters.</li>
    </ul>
    <p><b>Note:</b> Ensure that the land area and water per acre inputs are accurate to get a reliable water requirement estimate.</p>
    <p><b>Example:</b> For a land area of 3 acres and a water requirement of 5000 liters per acre, the total water required would be 15000 liters.</p>
    <p><b>Formula:</b> Total Water = Area × Water per Acre</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual water requirements may vary based on additional factors such as soil type, crop type, climate conditions, and irrigation methods.</p>
    <br>
  `;

  window.calcWater = function () {
    waterResult.innerHTML =
      `<b>Total Water Required:</b> ${area.value * rate.value} Liters`;
  };

  return div;
}
