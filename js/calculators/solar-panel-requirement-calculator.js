export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <br>  
    <h3>Panels Required = Daily Electricity Consumption (kWh) / (Panel Capacity (kW) × Sunlight Hours), </h3>
    <h3>Number of Panels = Daily Units Required (kWh) ÷ (Panel Watt × Sun Hours / 1000)</h3>

    <label>Daily Electricity Consumption (Units / kWh)</label>
    <input type="number" id="dailyUnits">

    <label>Solar Panel Capacity (Watt)</label>
    <input type="number" id="panelWatt" value="550">

    <label>Average Sunlight Hours per Day</label>
    <input type="number" id="sunHours" value="5">

    <button onclick="calcSolar()">Calculate</button>
    <p id="solarResult"></p>
  `;

  window.calcSolar = function () {
    let units = +document.getElementById("dailyUnits").value;
    let watt = +document.getElementById("panelWatt").value;
    let hours = +document.getElementById("sunHours").value;

    if (units <= 0 || watt <= 0 || hours <= 0) {
      solarResult.innerHTML = "❌ Please enter valid values";
      return;
    }

    let panelOutputPerDay = (watt * hours) / 1000; // kWh/day
    let panels = Math.ceil(units / panelOutputPerDay);

    document.getElementById("solarResult").innerHTML = `
      <b>Panels Required:</b> ${panels}<br>
      <b>Daily Output per Panel:</b> ${panelOutputPerDay.toFixed(2)} kWh
    `;
  };

  return div;
}
