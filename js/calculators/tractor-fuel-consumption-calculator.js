export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Fuel Consumption Calculator</h2>
    <p>This calculator helps you determine the total fuel used based on working hours and fuel consumption per hour.</p>

    <label>Working Hours</label>
    <input id="hours" type="number" value="6">

    <label>Fuel Consumption per Hour (Liters)</label>
    <input id="rate" type="number" value="4">

    <button id="calcFuelBtn">Calculate</button>
    <p id="fuelResult"></p>

    <br>
    <p><b>Explanation:</b> This calculator multiplies the total working hours by the fuel consumption rate per hour to give the total fuel used.</p>
    <p><b>Formula:</b> <i>Total Fuel = Working Hours × Fuel Consumption per Hour</i></p>
    <p><b>Calculator is a tool:</b> It allows operators, drivers, and managers to estimate fuel usage for planning and cost calculation.</p>
    <p><b>Relative Note:</b> Fuel consumption can vary depending on engine condition, load, and operational factors.</p>
    <p><b>Based On:</b> Standard fuel consumption rates provided by the manufacturer or measured from operation logs.</p>
    <p><b>To Use the Calculator:</b> Enter the working hours and the fuel consumption per hour, then click "Calculate". The result will appear below.</p>
    <p><b>Note:</b> Ensure the values are positive numbers. Fractional hours or liters are allowed.</p>
    <p><b>It is important:</b> This calculator is an estimate. Actual fuel usage may vary depending on conditions and equipment.</p>
    <p><b>Disclaimer:</b> The developer is not responsible for decisions or costs based on this calculator. Always verify actual fuel consumption manually if required.</p>
    <br><hr>
  `;

  // Event listener for calculation
  div.querySelector("#calcFuelBtn").addEventListener("click", () => {
    const hours = parseFloat(div.querySelector("#hours").value);
    const rate = parseFloat(div.querySelector("#rate").value);

    if (isNaN(hours) || isNaN(rate) || hours < 0 || rate < 0) {
      div.querySelector("#fuelResult").innerHTML = "❌ Please enter valid positive numbers";
      return;
    }

    const totalFuel = hours * rate;

    div.querySelector("#fuelResult").innerHTML = `<b>Total Fuel Used:</b> ${totalFuel.toFixed(2)} Liters`;
  });

  return div;
}
