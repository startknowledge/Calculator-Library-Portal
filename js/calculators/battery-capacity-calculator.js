export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Load (Watt)</label>
    <input type="number" id="load">

    <label>Backup Time (Hours)</label>
    <input type="number" id="hours">

    <label>Battery Voltage (V)</label>
    <input type="number" id="volt" value="12">

    <button onclick="calcBattery()">Calculate</button>
    <p id="batteryResult"></p><br>
    <p><u>Explanation about Battery Capacity Calculation</u> :</p>
    <p>The battery capacity required to power a load for a specific duration can be calculated using the formula:</p>
    <p><b>Battery Capacity (Ah) = (Load (W) × Backup Time (Hours)) / Battery Voltage (V)</b></p>
    <p><u>Where:</u></p>
    <ul>
      <li><b>Load (W)</b> is the power consumption of the device or system in watts.</li>
      <li><b>Backup Time (Hours)</b> is the duration for which the battery needs to supply power.</li>
      <li><b>Battery Voltage (V)</b> is the voltage rating of the battery.</li>
    </ul>
    <p>For example, if you have a load of 100 watts, need a backup time of 5 hours, and are using a 12-volt battery, the calculation would be:</p>
    <p>Battery Capacity = (100 W × 5 Hours) / 12 V = 41.67 Ah</p>
    <p>This means you would need a battery with a capacity of at least 41.67 ampere-hours to power the load for the specified duration.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of battery capacity calculation. For specific applications, please consult a qualified professional or refer to official technical resources.</p>
    <br>
  `;

  window.calcBattery = function () {
    let ah = (load.value * hours.value) / volt.value;
    batteryResult.innerHTML =
      `<b>Required Battery:</b> ${ah.toFixed(2)} Ah`;
  };

  return div;
}
