export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter number of streetlights:</label>
    <input type="number" id="streetlightCount" placeholder="Enter number">

    <label>Enter wattage per streetlight (W):</label>
    <input type="number" id="streetlightWatt" placeholder="Wattage per light">

    <label>Enter average hours of operation per day:</label>
    <input type="number" id="streetlightHours" placeholder="Hours/day">

    <button onclick="calculateStreetlight()">Calculate</button>
    <p id="streetlightResult"></p>
    <br>
    <h3>Streetlight Energy Use Calculator</h3>
    <p>This calculator estimates the daily energy consumption of streetlights based on user inputs.</p>
    <p>Based on the number of streetlights, their wattage, and average daily operating hours, it calculates the total energy used in kilowatt-hours (kWh).</p>
    <p>Note: 1 kWh = 1000 Watts used for 1 hour.</p>
    <h4>How to Use:</h4>
    <ol>
      <li>Input the total number of streetlights.</li>
      <li>Enter the wattage rating of each streetlight.</li>
      <li>Specify the average number of hours the streetlights operate daily.</li>
      <li>Click "Calculate" to see the estimated daily energy consumption in kWh.</li>
    </ol>
    <h4>Details:</h4>
    <p>Estimate daily and annual energy consumption of streetlights.</p>
    <p><b>Explanation:</b></p>
    <p>Energy use is calculated based on number of lights, their wattage, and daily operating hours.</p>
    <p><b>Formula:</b></p>
    <p>Daily Energy (kWh) = Number of Lights × Wattage × Hours ÷ 1000</p>
    <p><b>Example:</b>  
    100 lights × 100W × 10 hours ÷ 1000 = <b>100 kWh/day</b>.</p>
    <p><b>Disclaimer:</b> Energy consumption may vary based on efficiency and usage patterns.</p>
    <br>
  `;

  window.calculateStreetlight = function () {
    const count = parseFloat(document.getElementById("streetlightCount").value);
    const watt = parseFloat(document.getElementById("streetlightWatt").value);
    const hours = parseFloat(document.getElementById("streetlightHours").value);
    if (isNaN(count) || isNaN(watt) || isNaN(hours)) return;

    const energy = ((count * watt * hours) / 1000).toFixed(2);
    document.getElementById("streetlightResult").innerHTML =
      `<b>Estimated Daily Energy Use:</b> ${energy} kWh`;
  };

  return div;
}
