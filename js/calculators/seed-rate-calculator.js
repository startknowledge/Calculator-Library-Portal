export default function () { 
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Total Seed Calculator</h3>
    <p>Calculate the total seed required for your land based on area and seed rate per acre.</p>

    <label>Land Area (Acre)</label>
    <input id="area" value="2">

    <label>Seed Rate per Acre (kg)</label>
    <input id="rate" value="20">

    <button onclick="calcSeed()">Calculate</button>
    <p id="seedResult"></p>
    <br>

    <p><b>Explanation:</b> This calculator helps farmers and agronomists determine the amount of seed needed for planting crops over a specified area.</p>
    <p><b>For example:</b> If you have 5 acres and the seed rate is 25 kg/acre, the total seed required = 5 × 25 = 125 kg.</p>
    <p><b>Formula:</b> Total Seed = Area × Seed Rate per Acre</p>
    <p>Calculator is a tool designed to simplify agricultural planning and ensure correct seed usage.</p>
    <p>Relative accuracy depends on entering the correct land area and seed rate values.</p>
    <p>Based on standard agricultural practices.</p>
    <p>To use the calculator, enter the land area and seed rate, then click "Calculate".</p>
    <p><b>Note:</b> Ensure the area is measured in acres and seed rate is in kilograms per acre for correct calculation.</p>
    <p>It is important to enter valid numeric values.</p>
    <p><b>Disclaimer:</b> This calculator is for educational and planning purposes only. Actual seed requirements may vary based on crop type, soil conditions, and local agronomic practices.</p>
    <br>
  `;

  window.calcSeed = function () {
    const areaVal = parseFloat(document.getElementById("area").value);
    const rateVal = parseFloat(document.getElementById("rate").value);

    if (isNaN(areaVal) || isNaN(rateVal)) {
      seedResult.innerHTML = "<b>Please enter valid numbers</b>";
      return;
    }

    seedResult.innerHTML =
      `<b>Total Seed Required:</b> ${(areaVal * rateVal).toFixed(2)} kg`;
  };

  return div;
}
