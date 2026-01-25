export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>Solar Panels Required Calculator</h3>
      <p>Estimate the number of solar panels needed to meet your daily electricity consumption.</p>

      <label>Daily Electricity Consumption (Units / kWh):</label>
      <input type="number" id="dailyUnits" placeholder="e.g. 30">

      <label>Solar Panel Capacity (Watt):</label>
      <input type="number" id="panelWatt" value="550">

      <label>Average Sunlight Hours per Day:</label>
      <input type="number" id="sunHours" value="5">

      <button id="solarBtn">Calculate</button>
      <p id="solarResult"></p>
      <br>

      <p><b>Explanation:</b> This calculator determines how many solar panels are needed based on your daily electricity usage and panel specifications.</p>
      <p><b>For example:</b> If you consume 30 kWh/day and use 550 W panels with 5 hours of sunlight, you need 11 panels.</p>
      <p><b>Formula:</b> Number of Panels = Daily Units ÷ (Panel Watt × Sun Hours / 1000)</p>
      <p>Calculator is designed to simplify solar system planning.</p>
      <p>Relative accuracy depends on actual sunlight hours and panel efficiency.</p>
      <p>To use the calculator, enter your daily units, panel wattage, and average sunlight hours, then click "Calculate".</p>
      <p><b>Note:</b> Use numeric values only. Round up the panel count as partial panels are not possible.</p>
      <p>It is important to consider seasonal variations and panel losses.</p>
      <p><b>Disclaimer:</b> Results are approximate and for planning purposes only. Actual requirements may vary based on system losses and local conditions.</p>
      <br>
    </div>
  `;

  div.querySelector("#solarBtn").onclick = () => {
    const units = parseFloat(document.getElementById("dailyUnits").value);
    const watt = parseFloat(document.getElementById("panelWatt").value);
    const hours = parseFloat(document.getElementById("sunHours").value);

    if (units <= 0 || watt <= 0 || hours <= 0 || isNaN(units) || isNaN(watt) || isNaN(hours)) {
      document.getElementById("solarResult").innerHTML = "❌ Please enter valid values";
      return;
    }

    const panelOutputPerDay = (watt * hours) / 1000; // kWh/day
    const panels = Math.ceil(units / panelOutputPerDay);

    document.getElementById("solarResult").innerHTML = `
      <b>Panels Required:</b> ${panels}<br>
      <b>Daily Output per Panel:</b> ${panelOutputPerDay.toFixed(2)} kWh
    `;
  };

  return div;
}
