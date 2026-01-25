export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>UPS Backup Time Calculator</h2>
    <p>This calculator estimates the backup time a UPS or battery can provide based on battery capacity, voltage, and connected load.</p>

    <label>Battery Capacity (Ah):</label>
    <input type="number" id="ah" placeholder="Enter Ampere-hour">
    <br><br>

    <label>Battery Voltage (V):</label>
    <input type="number" id="volt" value="12" placeholder="Enter voltage">
    <br><br>

    <label>Load (Watt):</label>
    <input type="number" id="load" placeholder="Enter connected load">
    <br><br>

    <button onclick="calcUPS()">Calculate</button>
    <p id="upsResult"></p>

    <br>
    <p><b>Explanation:</b> This calculator estimates the runtime of a UPS or battery based on its ampere-hour rating, voltage, and the power drawn by connected devices.</p>
    <p><b>Formula:</b> <i>Backup Time (hours) = (Battery Ah × Battery Voltage) ÷ Load (W)</i></p>
    <p><b>Calculator is a tool:</b> Useful for electricians, engineers, and anyone planning backup power.</p>
    <p><b>Relative Note:</b> The calculation assumes 100% efficiency; real-world efficiency is lower due to inverter and battery losses.</p>
    <p><b>Based On:</b> Electrical energy calculation principles.</p>
    <p><b>To Use the Calculator:</b> Enter the battery Ah, voltage, and load in watts, then click "Calculate".</p>
    <p><b>Note:</b> Ensure units are correct. Voltage in volts, load in watts, and battery capacity in Ah.</p>
    <p><b>It is important:</b> This is a theoretical estimation. Real backup time may vary.</p>
    <p><b>Disclaimer:</b> The developer is not responsible for errors or decisions based on this calculator. Use as a reference only.</p>
    <br><hr>
  `;

  window.calcUPS = function () {
    const ah = parseFloat(document.getElementById("ah").value);
    const volt = parseFloat(document.getElementById("volt").value);
    const load = parseFloat(document.getElementById("load").value);

    if (isNaN(ah) || isNaN(volt) || isNaN(load) || load <= 0) {
      document.getElementById("upsResult").innerHTML = "❌ Please enter valid positive numbers.";
      return;
    }

    const time = (ah * volt) / load;
    document.getElementById("upsResult").innerHTML = `<b>Backup Time:</b> ${time.toFixed(2)} Hours`;
  };

  return div;
}
