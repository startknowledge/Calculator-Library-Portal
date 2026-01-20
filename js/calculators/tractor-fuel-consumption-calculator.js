export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Total Fuel = Working Hours × Fuel Consumption per Hour</h3>

    <label>Working Hours</label>
    <input id="hours" value="6">

    <label>Fuel Consumption per Hour (Liters)</label>
    <input id="rate" value="4">

    <button onclick="calcFuel()">Calculate</button>
    <p id="fuelResult"></p>
  `;

  window.calcFuel = function () {
    fuelResult.innerHTML =
      `<b>Total Fuel Used:</b> ${hours.value * rate.value} Liters`;
  };

  return div;
}
