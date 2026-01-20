export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Weight (kg)</label>
    <input id="waterWeight">

    <button onclick="calcWater()">Calculate</button>
    <p id="waterResult"></p>
  `;

  window.calcWater = function () {
    let water = waterWeight.value * 0.033;
    waterResult.innerHTML = `<b>Water Intake:</b> ${water.toFixed(2)} L/day`;
  };

  return div;
}
