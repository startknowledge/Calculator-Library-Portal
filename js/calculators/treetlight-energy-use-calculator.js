export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Streetlight Energy Use Calculator</h2>
    <p>This calculator estimates the total energy consumed by streetlights over a period of time, helping municipalities and building managers plan electricity usage and costs.</p>

    <label>Number of Streetlights</label>
    <input id="numLights" type="number" value="10">

    <label>Power per Streetlight (Watts)</label>
    <input id="wattPerLight" type="number" value="100">

    <label>Hours of Operation per Day</label>
    <input id="hoursPerDay" type="number" value="12">

    <label>Number of Days</label>
    <input id="numDays" type="number" value="30">

    <button id="calcEnergyBtn">Calculate</button>
    <p id="energyResult"></p>

    <br>
    <p><b>Explanation:</b> This calculator multiplies the number of streetlights by their power rating and the total hours they operate over a period to estimate energy consumption.</p>
    <p><b>Formula:</b> <i>Total Energy (kWh) = Number of Streetlights × Power per Streetlight (W) × Hours per Day × Number of Days ÷ 1000</i></p>
    <p><b>Calculator is a tool:</b> Useful for budgeting electricity costs, planning energy usage, and optimizing operational schedules.</p>
    <p><b>Relative Note:</b> Energy consumption depends on actual operating hours, wattage variations, and maintenance conditions.</p>
    <p><b>Based On:</b> Standard power ratings and total operational time of the streetlights.</p>
    <p><b>To Use the Calculator:</b> Enter the number of lights, their wattage, daily operation hours, and number of days, then click "Calculate". The total energy consumption will appear below.</p>
    <p><b>Note:</b> Ensure all inputs are positive numbers. Fractional hours or power ratings are allowed.</p>
    <p><b>It is important:</b> This is an estimate. Actual energy consumption may vary based on usage patterns and lamp efficiency.</p>
    <p><b>Disclaimer:</b> The developer is not responsible for decisions or costs based on this calculator. Always verify actual electricity consumption if necessary.</p>
    <br><hr>
  `;

  // Event listener for calculation
  div.querySelector("#calcEnergyBtn").addEventListener("click", () => {
    const numLights = parseFloat(div.querySelector("#numLights").value);
    const wattPerLight = parseFloat(div.querySelector("#wattPerLight").value);
    const hoursPerDay = parseFloat(div.querySelector("#hoursPerDay").value);
    const numDays = parseFloat(div.querySelector("#numDays").value);

    if (
      isNaN(numLights) || isNaN(wattPerLight) ||
      isNaN(hoursPerDay) || isNaN(numDays) ||
      numLights < 0 || wattPerLight < 0 || hoursPerDay < 0 || numDays < 0
    ) {
      div.querySelector("#energyResult").innerHTML = "❌ Please enter valid positive numbers";
      return;
    }

    // Energy in kWh
    const totalEnergy = (numLights * wattPerLight * hoursPerDay * numDays) / 1000;

    div.querySelector("#energyResult").innerHTML = `<b>Total Energy Consumed:</b> ${totalEnergy.toFixed(2)} kWh`;
  });

  return div;
}
