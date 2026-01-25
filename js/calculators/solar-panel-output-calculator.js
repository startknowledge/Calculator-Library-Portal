export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>Solar Panel Daily Output Calculator</h3>
      <p>Calculate the daily energy output of a solar panel based on its wattage and sunlight exposure.</p>

      <label>Panel Wattage (W):</label>
      <input type="number" id="panelWatt" value="100" placeholder="e.g. 100">

      <label>Sunlight Hours per Day:</label>
      <input type="number" id="sunHours" value="5" placeholder="e.g. 5">

      <button id="solarBtn">Calculate</button>
      <p id="solarResult"></p>
      <br>

      <p><b>Explanation:</b> This calculator estimates the energy produced by a solar panel each day.</p>
      <p><b>For example:</b> A 100 W panel with 5 hours of sunlight produces 500 Wh/day.</p>
      <p><b>Formula:</b> Daily Output (Wh) = Panel Wattage × Sunlight Hours</p>
      <p>Calculator is designed to simplify solar energy estimations.</p>
      <p>Accuracy depends on actual sunlight hours and panel efficiency.</p>
      <p>To use the calculator, enter the panel wattage and average daily sunlight hours, then click "Calculate".</p>
      <p><b>Note:</b> Ensure numeric values are entered for accurate results.</p>
      <p>It is important to consider local sunlight conditions and panel losses.</p>
      <p><b>Disclaimer:</b> This calculator provides approximate values for reference purposes only. Actual energy output may vary.</p>
      <br>
    </div>
  `;

  div.querySelector("#solarBtn").onclick = () => {
    const panelWatt = parseFloat(document.getElementById("panelWatt").value);
    const sunHours = parseFloat(document.getElementById("sunHours").value);

    if (isNaN(panelWatt) || isNaN(sunHours)) {
      document.getElementById("solarResult").innerHTML = "<b>Please enter valid numbers!</b>";
      return;
    }

    const output = panelWatt * sunHours;
    document.getElementById("solarResult").innerHTML = `<b>Daily Output:</b> ${output.toFixed(2)} Wh`;
  };

  return div;
}
