export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Gas (LPG) Consumption Calculator</h3>

    <p>
      This calculator estimates the total LPG (gas) consumption
      based on daily usage and number of days.
    </p>

    <label>Gas Used per Day (kg)</label>
    <input type="number" id="dailyGas" min="0" step="0.01" placeholder="e.g. 0.6">

    <label>Number of Days</label>
    <input type="number" id="gasDays" min="1" placeholder="e.g. 30">

    <button onclick="calcGas()">Calculate</button>

    <p id="gasResult"></p>
    <br>

    <p><b>Formula:</b></p>
    <p>Total Gas Consumption = Daily Gas Usage × Number of Days</p>

    <p><b>Example:</b></p>
    <p>
      Daily Gas Usage = 0.6 kg<br>
      Number of Days = 30<br>
      <b>Total Consumption = 18 kg</b>
    </p>

    <p><b>Use Case:</b></p>
    <p>
      Useful for households, restaurants, hostels,
      and energy consumption planning.
    </p>

    <p><b>Note:</b>
      LPG consumption may vary depending on cooking habits
      and appliance efficiency.
    </p>

    <p><b>Disclaimer:</b>
      This calculator provides an estimate for planning purposes only.
    </p>
  `;

  window.calcGas = function () {
    const dailyGas = parseFloat(document.getElementById("dailyGas").value);
    const gasDays = parseFloat(document.getElementById("gasDays").value);

    if (isNaN(dailyGas) || isNaN(gasDays) || dailyGas < 0 || gasDays <= 0) {
      document.getElementById("gasResult").innerHTML =
        "<b>Please enter valid input values.</b>";
      return;
    }

    const total = dailyGas * gasDays;

    document.getElementById("gasResult").innerHTML =
      `<b>Total LPG Consumption:</b> ${total.toFixed(2)} kg`;
  };

  return div;
}
